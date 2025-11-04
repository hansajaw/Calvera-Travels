// travel-backend/src/server.js
import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import serverless from "serverless-http";

const PORT = process.env.PORT || 4000;

let dbReady;

/**
 * Ensures MongoDB is connected before handling requests.
 */
async function ensureDB() {
  if (!dbReady) {
    console.log("🗄️ Connecting to MongoDB...");
    dbReady = connectDB(process.env.MONGODB_URI);
  }
  await dbReady;
}

// ✅ Express JSON + CORS setup MUST be inside app.js (confirm below)
const serverlessHandler = serverless(app);

/**
 * Vercel serverless handler
 */
export default async function handler(req, res) {
  await ensureDB();
  return serverlessHandler(req, res);
}

/**
 * Local dev server (only runs when not on Vercel)
 */
if (!process.env.VERCEL) {
  (async () => {
    try {
      await ensureDB();
      app.listen(PORT, () =>
        console.log(`✅ Local API running on http://localhost:${PORT}`)
      );
    } catch (err) {
      console.error("❌ Failed to start server:", err);
      process.exit(1);
    }
  })();
}
