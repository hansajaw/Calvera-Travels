import TourBooking from "../models/TourBooking.js";
import nodemailer from "nodemailer";

export const bookTour = async (req, res) => {
  try {
    const data = req.body;
    const booking = await TourBooking.create(data); // saves booking to MongoDB

    // === Setup mail transporter ===
    const transporter = nodemailer.createTransport({
      service: "gmail", // or smtp.yourdomain.com
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // === Admin notification ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New Tour Booking: ${booking.tour}`, // ✅ replaced tourId with tour
      html: `
        <h2>New Tour Booking</h2>
        <p><b>Package:</b> ${booking.tour}</p>
        <p><b>Name:</b> ${booking.name}</p>
        <p><b>Email:</b> ${booking.email}</p>
        <p><b>Phone:</b> ${booking.phone || "-"}</p>
        <p><b>Date:</b> ${booking.date || "-"}</p>
        <p><b>Travelers:</b> ${booking.travelers}</p>
        <p><b>Notes:</b> ${booking.notes || "N/A"}</p>
        <hr/>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
    });

    // === Confirmation email to user ===
    await transporter.sendMail({
      from: `"Calvera Travels" <${process.env.MAIL_USER}>`,
      to: booking.email,
      subject: `Your Booking Confirmation: ${booking.tour}`, // ✅ replaced tourId with tour
      html: `
        <h2>Hi ${booking.name},</h2>
        <p>Thank you for booking <strong>${booking.tour}</strong> with <b>Calvera Travels</b>!</p>
        <p>We’ve received your request and our team will reach out shortly to confirm your details.</p>
        <p><b>Travel Date:</b> ${booking.date || "-"}<br/>
        <b>Travelers:</b> ${booking.travelers}</p>
        <p>We look forward to crafting your perfect adventure!</p>
        <p>Warm regards,<br/>The Calvera Travels Team</p>
      `,
    });

    res.status(201).json({ success: true, message: "Tour booked successfully!" });
  } catch (err) {
    console.error("❌ Booking error:", err);
    res.status(500).json({ success: false, message: "Booking failed", error: err.message });
  }
};
