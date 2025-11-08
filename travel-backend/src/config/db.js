// src/config/db.js
import mongoose from "mongoose";

export async function connectDB() {
  try {
    // Support both naming conventions
    const uri = process.env.MONGO_URI || process.env.MONGO_URI;

    if (!uri) {
      throw new Error(
        "❌ MongoDB connection string missing. Please set MONGO_URI or MONGODB_URI in environment variables."
      );
    }

    // Optional: make queries strict and enable automatic indexes
    mongoose.set("strictQuery", true);

    // Connect to MongoDB
    const conn = await mongoose.connect(uri, {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
