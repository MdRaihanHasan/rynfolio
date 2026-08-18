import {
  EMAIL_REGEX,
  WEEKLY_LIMIT,
  remainingQuestions,
  writeIdentity,
  sendLeadEmail,
} from "@/lib/chat";
import { getVisitorByEmail, upsertVisitor, rollWindow } from "@/lib/chatStore";

export const dynamic = "force-dynamic";

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : "").trim();
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const read = (key: string) =>
    typeof payload[key] === "string" ? (payload[key] as string).trim() : "";

  // Honeypot — bots fill it, real visitors never see it.
  if (read("company")) {
    return Response.json({ success: true, remaining: WEEKLY_LIMIT });
  }

  const name = read("name").slice(0, 120);
  const email = read("email").slice(0, 200);
  const phone = read("phone").slice(0, 60);

  if (!name || !email) {
    return Response.json({ error: "Please share your name and email." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // Is this a brand-new visitor? (used only to decide the optional lead email)
  const before = await getVisitorByEmail(email);

  const now = Date.now();
  const ip = clientIp(request);
  // Create-or-update. Crucially, an existing visitor keeps their count/window,
  // so re-registering (e.g. after clearing cookies) cannot reset the limit.
  const rec = await upsertVisitor(email, (r) => {
    const rolled = rollWindow(r, now);
    return { ...rolled, name, email: email.toLowerCase(), phone, lastIp: ip || rolled.lastIp };
  });

  // Remember the visitor for 7 days (identity only; counter stays server-side).
  await writeIdentity({ email: rec.email, name: rec.name });

  if (!before) {
    await sendLeadEmail(rec);
  }

  return Response.json({
    success: true,
    name: rec.name,
    remaining: remainingQuestions(rec),
    limit: WEEKLY_LIMIT,
  });
}
