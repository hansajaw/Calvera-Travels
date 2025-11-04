// travel-backend/api/index.js
import serverless from "serverless-http";
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// Reuse connections across invocations
let handler;
let dbReady;

export default async function vercelHandler(req, res) {
  if (!dbReady) {
    dbReady = connectDB();
  }
  await dbReady;

  if (!handler) {
    handler = serverless(app);
  }
  return handler(req, res);
}
