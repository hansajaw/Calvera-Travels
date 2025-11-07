// api/index.js
import app from "../src/app.js";

// ✅ Entry point for Vercel serverless runtime
export default function handler(req, res) {
  return app(req, res);
}
