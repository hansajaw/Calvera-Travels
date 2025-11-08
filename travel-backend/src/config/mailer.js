import nodemailer from "nodemailer";

export function createTransport() {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS) {
    console.warn("⚠️ Missing mail credentials, skipping SMTP setup");
    return null;
  }

  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT) || 587,
    secure: Number(MAIL_PORT) === 465,
    auth: { user: MAIL_USER, pass: MAIL_PASS },
  });
}

export async function sendMail({ subject, html, to = process.env.MAIL_TO }) {
  const transporter = createTransport();
  if (!transporter) return { message: "Mail skipped: no SMTP credentials" };

  try {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Mail timeout after 8s")), 8000)
    );
    return await Promise.race([
      transporter.sendMail({ from: process.env.MAIL_FROM, to, subject, html }),
      timeout,
    ]);
  } catch (err) {
    console.error("❌ Mail send failed:", err.message);
    return { message: "Mail failed" };
  }
}
