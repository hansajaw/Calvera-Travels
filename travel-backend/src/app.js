import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

/* ========================================================
   ✅ FAST CORS + PREFLIGHT HANDLER (must be before anything else)
   ======================================================== */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    // Instantly end preflight request (critical for Vercel)
    return res.status(200).end();
  }
  next();
});

/* ========================================================
   ✅ Optional: restrict allowed origins if you want strict security
   ======================================================== */
const allowedOrigins = [
  "http://localhost:3000",
  "https://calveratravels.com",
  "https://www.calveratravels.com",
  "https://calvera-travels-react-app.vercel.app",
  /\.vercel\.app$/, // all preview deployments
];

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // curl/Postman
      const ok = allowedOrigins.some((p) =>
        p instanceof RegExp ? p.test(origin) : p === origin
      );
      if (ok) return cb(null, true);
      console.warn("❌ Blocked CORS origin:", origin);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ========================================================
   ✅ API Routes
   ======================================================== */
app.use("/api/v1", routes);

/* ========================================================
   ✅ Health Route
   ======================================================== */
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

/* ========================================================
   ✅ Error Handling
   ======================================================== */
app.use(notFound);
app.use(errorHandler);

export default app;
