import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// === Middleware Setup ===
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// === CORS Configuration ===
const allowedOrigins = [
  "https://www.calveratravels.com", // ✅ production domain
  "https://calveratravels.com",     // non-www
  "http://localhost:3000",          // local dev frontend
  /\.vercel\.app$/,                 // all vercel preview URLs
];

// Dynamic CORS check
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow tools like Postman
      const isAllowed = allowedOrigins.some((pattern) =>
        pattern instanceof RegExp ? pattern.test(origin) : pattern === origin
      );
      if (isAllowed) callback(null, true);
      else {
        console.warn("❌ Blocked CORS origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// === Base Routes ===
app.use("/api/v1", routes);

// Health check endpoint (for debugging)
app.get("/api/v1/health", (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || "development" });
});

// === Error Handlers ===
app.use(notFound);
app.use(errorHandler);

export default app;
