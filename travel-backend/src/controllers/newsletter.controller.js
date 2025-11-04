import Subscriber from "../models/Subscriber.js";
import nodemailer from "nodemailer";

/**
 * Utility: Validate email format
 */
const isEmail = (str = "") => /\S+@\S+\.\S+/.test(String(str).toLowerCase());

/**
 * Subscribe user and send emails to both subscriber & Calvera team
 */
export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("📩 Incoming subscription request:", req.body);

    // 1️⃣ Validate email input
    if (!email || !isEmail(email)) {
      console.warn("⚠️ Invalid or missing email.");
      return res.status(400).json({ message: "A valid email is required." });
    }

    // 2️⃣ Prevent duplicates
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      console.warn("⚠️ Duplicate subscription attempt for:", email);
      return res.status(400).json({ message: "Email already subscribed." });
    }

    // 3️⃣ Save new subscriber
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    console.log("✅ Subscriber saved to DB:", email);

    // 4️⃣ Setup mail transporter (Gmail or Mailtrap)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log("✅ Mail transporter verified successfully.");
    } catch (verifyErr) {
      console.error("❌ Mail transporter verification failed:", verifyErr);
      return res.status(500).json({ message: "Email service not available." });
    }

    // 5️⃣ Define sender and recipient details
    const MAIL_FROM =
      process.env.MAIL_FROM || `"Calvera Travels" <${process.env.MAIL_USER}>`;
    const ADMIN_EMAIL = process.env.MAIL_TO || process.env.MAIL_USER;

    // 6️⃣ Email templates
    const userMail = {
      from: MAIL_FROM,
      to: email,
      subject: "Welcome to Calvera Travels Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color:#333;">
          <h2>Welcome to <span style="color:#22404a;">Calvera Travels!</span></h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll now receive exclusive travel deals, insider tips, and destination highlights.</p>
          <p>Safe travels,<br><strong>The Calvera Team 🌍</strong></p>
        </div>
      `,
    };

    const adminMail = {
      from: MAIL_FROM,
      to: ADMIN_EMAIL,
      subject: "🆕 New Newsletter Subscriber",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color:#333;">
          <h3>New Newsletter Subscription</h3>
          <p>A new user has subscribed to the newsletter:</p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</li>
          </ul>
          <p>— Calvera Travels Website</p>
        </div>
      `,
    };

    // 7️⃣ Send both emails in parallel
    try {
      await Promise.all([
        transporter.sendMail(userMail),
        transporter.sendMail(adminMail),
      ]);
      console.log("📤 Emails successfully sent to:", email, "and", ADMIN_EMAIL);
    } catch (mailErr) {
      console.error("❌ Failed to send one or more emails:", mailErr);
      return res.status(500).json({ message: "Subscription saved but emails failed to send." });
    }

    // 8️⃣ Respond success
    res.status(201).json({ message: "Subscription successful" });
  } catch (err) {
    console.error("🔥 Newsletter subscription error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
