import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security & parsing
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = process.env.CLIENT_ORIGIN?.split(",").map((o) => o.trim()) || [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.some((url) => origin.includes(url))) return callback(null, true);
      console.warn("❌ Blocked CORS origin:", origin);
      callback(new Error("Not allowed by CORS"));
    },
  })
);

// Base routes
app.use("/api/v1", routes);

// Health route
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
