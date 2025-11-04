import Subscriber from "../models/Subscriber.js";
import nodemailer from "nodemailer";

export const subscribeUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email)
      return res.status(400).json({ message: "Email is required." });

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already subscribed." });

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Calvera Travels Newsletter 🌴",
      html: `<p>Hi there! 👋</p>
      <p>Thank you for subscribing to <strong>Calvera Travels</strong>.</p>
      <p>We'll send you the latest travel deals, tips, and destination highlights soon!</p>
      <p>🌍 Safe travels,<br> The Calvera Team</p>`,
    });

    res.status(201).json({ message: "Subscription successful" });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
