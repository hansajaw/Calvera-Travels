import mongoose from "mongoose";

const tourBookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    travelers: { type: Number, default: 1 },
    date: String,
    notes: String,
    tour: String,
  },
  { timestamps: true }
);

export default mongoose.model("TourBooking", tourBookingSchema);
