// api/index.js
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

let isConnected = false;

export default async function handler(req, res) {
  try {
    // Connect to MongoDB only once per cold start
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("✅ MongoDB connection established (serverless)");
    }

    // Pass request to Express app
    return app(req, res);
  } catch (err) {
    console.error("❌ Handler error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
