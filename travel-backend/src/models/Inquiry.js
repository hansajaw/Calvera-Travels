import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    title: String,
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: String,
    nationality: String,
    tripType: [String],
    destinations: [String],
    experiences: [String],
    expectedDays: Number,
    arrivalDate: { type: Date },
    departureDate: { type: Date },
    adults: Number,
    children: Number,
    budget: String,
    agreePrivacy: Boolean,
    agreeTerms: Boolean,
    sourcePage: {
      type: String,
      enum: ["plan-trip", "contact", "other"],
      default: "plan-trip",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);
