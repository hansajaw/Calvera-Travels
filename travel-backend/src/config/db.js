// src/config/db.js
import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) throw new Error("❌ MongoDB URI missing in environment variables");

    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(uri, { autoIndex: true });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
