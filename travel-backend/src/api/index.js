
import serverless from 'serverless-http';
import app from '../src/app.js';

// If your DB connect function is default-exported, this works:
//   import connectDB from '../src/config/db.js';
// If it's a named export, use:
//   import { connectDB } from '../src/config/db.js';

import connectDB from '../src/config/db.js';

// Make sure DB is connected on cold start
let dbReady = null;
async function ensureDB() {
  if (!dbReady) {
    dbReady = connectDB();
  }
  await dbReady;
}

// Wrap Express app for Vercel
const handler = serverless(app);

export default async function vercelHandler(req, res) {
  await ensureDB();
  return handler(req, res);
}

// Optional: tweak body size if needed
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb',
    },
  },
};
