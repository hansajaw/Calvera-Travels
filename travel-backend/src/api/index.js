// travel-backend/api/index.js
import serverless from 'serverless-http';
import app from '../src/app.js';
import connectDB from '../src/config/db.js'; // if yours is a named export, use: { connectDB }

let dbReady = null;
async function ensureDB() {
  if (!dbReady) {
    dbReady = connectDB();
  }
  await dbReady;
}

// Wrap Express as a serverless handler for Vercel
const handler = serverless(app);

export default async function vercelHandler(req, res) {
  await ensureDB();
  return handler(req, res);
}

export const config = {
  api: {
    bodyParser: { sizeLimit: '2mb' },
  },
};
