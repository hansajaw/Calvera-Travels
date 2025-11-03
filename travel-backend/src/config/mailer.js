import nodemailer from 'nodemailer';

export function createTransport() {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT) || 587,
    secure: Number(MAIL_PORT) === 465,
    auth: { user: MAIL_USER, pass: MAIL_PASS }
  });
}

export async function sendMail({ subject, html, to = process.env.MAIL_TO }) {
  const transporter = createTransport();
  return transporter.sendMail({ from: process.env.MAIL_FROM, to, subject, html });
}
