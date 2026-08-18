import {
  WEEKLY_LIMIT,
  MAX_MESSAGE_LEN,
  REPLY_UNKNOWN,
  REPLY_ERROR,
  REPLY_LIMIT,
  askAI,
  readIdentity,
  remainingQuestions,
  sendChatEmail,
  type SimpleMessage,
} from "@/lib/chat";
import { getVisitorByEmail, upsertVisitor, rollWindow } from "@/lib/chatStore";

export const dynamic = "force-dynamic";

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : "").trim();
}

/** Widget bootstrap: is this visitor known, and how many questions remain? */
export async function GET() {
  const identity = await readIdentity();
  if (!identity) {
    return Response.json({ registered: false, remaining: WEEKLY_LIMIT, limit: WEEKLY_LIMIT });
  }
  const rec = await getVisitorByEmail(identity.email);
  if (!rec) {
    return Response.json({ registered: false, remaining: WEEKLY_LIMIT, limit: WEEKLY_LIMIT });
  }
  const rolled = rollWindow(rec, Date.now());
  return Response.json({
    registered: true,
    name: rolled.name,
    remaining: remainingQuestions(rolled),
    limit: WEEKLY_LIMIT,
  });
}

export async function POST(request: Request) {
  let payload: { message?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (!message) {
    return Response.json({ error: "Empty message." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const identity = await readIdentity();
  if (!identity) {
    return Response.json({ error: "not-registered" }, { status: 401 });
  }
  const current = await getVisitorByEmail(identity.email);
  if (!current) {
    return Response.json({ error: "not-registered" }, { status: 401 });
  }

  const now = Date.now();
  const ip = clientIp(request);
  const rolled = rollWindow(current, now);

  // ---- Weekly limit reached — do NOT call the AI ------------------------
  if (rolled.count >= WEEKLY_LIMIT) {
    const rec = await upsertVisitor(identity.email, (r) => {
      const rr = rollWindow(r, now);
      if (rr.count < WEEKLY_LIMIT) return rr; // window rolled between reads
      return { ...rr, lastIp: ip || rr.lastIp };
    });

    if (rec.count >= WEEKLY_LIMIT && !rec.limitEmailed) {
      await sendChatEmail({ ...rec }, "limit", message);
      await upsertVisitor(identity.email, (r) => ({ ...r, limitEmailed: true }));
    }
    if (rec.count >= WEEKLY_LIMIT) {
      return Response.json({ reply: REPLY_LIMIT, remaining: 0, limitReached: true });
    }
    // else fall through — the window just reset, allow the question.
  }

  // ---- Ask the AI --------------------------------------------------------
  const history: SimpleMessage[] = rolled.messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));
  const result = await askAI(history, message);

  const reply =
    result.kind === "answer" ? result.answer : result.kind === "error" ? REPLY_ERROR : REPLY_UNKNOWN;
  const known = result.kind === "answer";

  // Persist the exchange and increment the server-side counter.
  const rec = await upsertVisitor(identity.email, (r) => {
    const rr = rollWindow(r, now);
    return {
      ...rr,
      count: rr.count + 1,
      lastIp: ip || rr.lastIp,
      messages: [
        ...rr.messages,
        { role: "user" as const, content: message, at: now },
        { role: "assistant" as const, content: reply, known, at: now },
      ].slice(-40),
    };
  });

  // Escalate to email when the AI couldn't answer or errored.
  if (result.kind !== "answer") {
    await sendChatEmail(rec, result.kind === "error" ? "error" : "unknown", message);
  }

  return Response.json({
    reply,
    remaining: remainingQuestions(rec),
    needsHuman: result.kind !== "answer",
  });
}
