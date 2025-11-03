import Inquiry from "../models/Inquiry.js";
import nodemailer from "nodemailer";

export async function submitInquiry(req, res, next) {
  try {
    // === 1. Save inquiry data to MongoDB ===
    const data = req.body;
    const doc = await Inquiry.create(data);

    // === 2. Configure Gmail SMTP transporter ===
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // your Gmail App Password (16 chars)
      },
    });

    // === 3. Admin email content ===
    const adminSubject = `New Trip Plan from ${doc.name}`;
    const adminHtml = `
      <h2>New Trip Inquiry Received</h2>
      <p><b>Name:</b> ${doc.title || ""} ${doc.name}</p>
      <p><b>Email:</b> ${doc.email}</p>
      <p><b>Contact:</b> ${doc.contact || "-"}</p>
      <p><b>Nationality:</b> ${doc.nationality || "-"}</p>
      <p><b>Trip Type:</b> ${(doc.tripType || []).join(", ")}</p>
      <p><b>Destinations:</b> ${(doc.destinations || []).join(", ")}</p>
      <p><b>Experiences:</b> ${(doc.experiences || []).join(", ")}</p>
      <p><b>Adults:</b> ${doc.adults || 0}, <b>Children:</b> ${doc.children || 0}</p>
      <p><b>Expected Days:</b> ${doc.expectedDays || "-"}</p>
      <p><b>Arrival:</b> ${doc.arrivalDate || "-"}, <b>Departure:</b> ${doc.departureDate || "-"}</p>
      <p><b>Budget:</b> ${doc.budget || "-"}</p>
      <p><b>Source Page:</b> ${doc.sourcePage}</p>
      <hr/>
      <p>Submitted at: ${new Date(doc.createdAt).toLocaleString()}</p>
    `;

    // === 4. User confirmation email content ===
    const userSubject = `Your Travel Plan has been received! 🌴`;
    const userHtml = `
      <h2>Hi ${doc.name},</h2>
      <p>Thank you for submitting your travel plan with <strong>Calvera Travels</strong>!</p>
      <p>Our travel team will review your preferences and get in touch with you soon.</p>
      <p>Here’s a quick summary of your submission:</p>
      <ul>
        <li><strong>Trip Type:</strong> ${(doc.tripType || []).join(", ")}</li>
        <li><strong>Destinations:</strong> ${(doc.destinations || []).join(", ")}</li>
        <li><strong>Expected Days:</strong> ${doc.expectedDays}</li>
        <li><strong>Budget:</strong> ${doc.budget || "-"}</li>
      </ul>
      <p>Safe travels,<br/>The Calvera Travels Team</p>
    `;

    // === 5. Send admin notification ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: adminSubject,
      html: adminHtml,
      replyTo: doc.email, // makes it easy to reply directly to the traveler
    });

    // === 6. Add small delay (Gmail sends fast but good to avoid rate-limiting)
    await new Promise((res) => setTimeout(res, 1000));

    // === 7. Send confirmation to user ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: doc.email,
      subject: userSubject,
      html: userHtml,
    });

    // === 8. Response ===
    res.status(201).json({
      success: true,
      message: "Inquiry submitted and emails sent successfully.",
      id: doc._id,
    });

  } catch (err) {
    console.error("❌ Inquiry submission error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to submit inquiry or send email.",
      error: err.message,
    });
  }
}
