// src/app.js
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Core middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// ===== Global CORS Preflight =====
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

// ===== Allow specific origins =====
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://calveratravels.com",
      "https://www.calveratravels.com",
      /\.vercel\.app$/,
    ],
    credentials: true,
  })
);

// ===== Default Routes =====
app.get("/", (req, res) => {
  res.json({ message: "✅ Calvera Travels API is running" });
});

app.use("/api/v1", routes);

app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

// ===== Error Handlers =====
app.use(notFound);
app.use(errorHandler);

export default app;
