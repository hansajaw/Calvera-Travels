import Subscriber from "../models/Subscriber.js";
import nodemailer from "nodemailer";

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // Save subscriber to database (avoid duplicates)
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "You’re already subscribed!" });
    }
    const subscriber = await Subscriber.create({ email });

    // === 1. Configure your transporter (same as you used for inquiries)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // === 2. Send confirmation email to subscriber
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Welcome to Calvera Travels",
      html: `
        <h2>Welcome Aboard, Traveler!</h2>
        <p>Thank you for subscribing to <strong>Calvera Travels</strong>.</p>
        <p>We’ll send you exclusive travel deals, insider tips, and destination guides soon.</p>
        <br/>
        <p>Safe travels,<br/>The Calvera Travels Team</p>
      `,
    });

    // === 3. Notify admin (optional)
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `🆕 New Newsletter Subscriber`,
      html: `
        <h3>New Subscriber</h3>
        <p>Email: ${email}</p>
        <p>Subscribed on: ${new Date().toLocaleString()}</p>
      `,
    });

    res.status(201).json({ success: true, message: "Subscription successful!" });
  } catch (err) {
    console.error("❌ Newsletter subscription error:", err);
    res.status(500).json({ message: "Failed to subscribe or send email" });
  }
};
