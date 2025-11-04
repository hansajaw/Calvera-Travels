import mongoose from "mongoose";

const tourBookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: 'text' },
    email: { type: String, required: true, index: 'text' },
    phone: String,
    travelers: { type: Number, default: 1 },
    date: String,
    notes: { type: String, index: 'text' },
    tour: String,
  },
  { timestamps: true }
);

tourBookingSchema.index({ name: 'text', email: 'text', notes: 'text' });

export default mongoose.model("TourBooking", tourBookingSchema);
