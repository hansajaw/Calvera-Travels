// api/index.js
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// ✅ Establish MongoDB connection before handling requests
let isConnected = false;

export default async function handler(req, res) {
  try {
    // Only connect once per cold start (important for serverless)
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("✅ MongoDB connection established in serverless function");
    }

    // Pass the request to Express
    return app(req, res);
  } catch (err) {
    console.error("❌ Serverless handler error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
