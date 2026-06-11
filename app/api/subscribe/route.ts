import { Resend } from "resend";

const EMAIL_FROM = "RYN.BD Newsletter <contact@ryn.bd>";
const EMAIL_TO = "itsrahul880@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof payload.email === "string" ? payload.email.trim() : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Optionally store the subscriber in a Resend Audience
  if (process.env.RESEND_AUDIENCE_ID) {
    const { error } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });
    if (error) {
      console.error("Resend error (audience):", error);
    }
  }

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: email,
    subject: "New Newsletter Subscriber",
    html: `<p>A new visitor subscribed to the newsletter:</p><p><strong>${escapeHtml(
      email
    )}</strong></p>`,
  });

  if (error) {
    console.error("Resend error (subscribe):", error);
    return Response.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}
