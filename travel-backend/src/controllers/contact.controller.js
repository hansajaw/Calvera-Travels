// controllers/contact.controller.js
import nodemailer from "nodemailer";
import ContactMessage from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};

    // === 1. Validate input ===
    const errors = [];
    if (!name?.trim()) errors.push("Name is required");
    if (!email?.trim()) errors.push("Email is required");
    else if (!/\S+@\S+\.\S+/.test(email)) errors.push("Invalid email address");
    if (!phone?.trim()) errors.push("Phone is required");
    if (!subject?.trim()) errors.push("Subject is required");
    if (!message?.trim()) errors.push("Message is required");

    if (errors.length) {
      return res.status(400).json({ success: false, errors });
    }

    // === 2. Save to database ===
    const contact = await ContactMessage.create({ name, email, phone, subject, message });

    // === 3. Create Nodemailer transporter ===
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.MAIL_PORT || 587),
      secure: false, // true only for 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // === 4. Confirmation Email to User ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Calvera Travels ✈️",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#1a1a1a;">
          <h2 style="color:#ea8f32;">Thank You for Contacting Us!</h2>
          <p>Hi ${name},</p>
          <p>We’ve received your message and our team will reach out to you soon.</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
          <p>Best Regards,<br/><strong>Calvera Travels Team</strong></p>
        </div>
      `,
    });

    // === 5. Notification Email to Admin ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `📩 New Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#1a1a1a;">
          <h3 style="color:#ea8f32;">New Contact Message Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    // === 6. Respond success ===
    res.status(201).json({
      success: true,
      message: "Thank you for contacting us. Our team will reach you soon!",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message or email",
      error: error.message,
    });
  }
};
