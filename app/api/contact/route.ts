import { Resend } from "resend";

const EMAIL_FROM = "RYN.BD Contact <contact@ryn.bd>";
const EMAIL_TO = "itsrahul880@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function field(label: string, value: string) {
  return `<p style="margin:0 0 12px"><strong>${label}:</strong> ${escapeHtml(value)}</p>`;
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

  const name = read("name");
  const email = read("email");
  const message = read("message");
  const phone = read("phone_number");
  const subject = read("subject");

  // Honeypot field — real visitors never fill it, bots do
  if (read("company")) {
    return Response.json({ success: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
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

  const html = [
    `<h2 style="margin:0 0 16px">New contact form submission</h2>`,
    field("Name", name),
    field("Email", email),
    phone ? field("Phone", phone) : "",
    subject ? field("Service", subject) : "",
    `<p style="margin:16px 0 4px"><strong>Message:</strong></p>`,
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>`,
  ].join("");

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: email,
    subject: subject ? `New Contact: ${subject}` : `New Contact Message from ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error (contact):", error);
    return Response.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}
