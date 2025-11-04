// travel-backend/src/server.js
import app from './app.js';
import connectDB from './config/db.js'; // adjust if named export

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`✅ API running locally on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

start();
