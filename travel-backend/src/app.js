import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

/* ========================================================
   ✅ Middleware Setup
   ======================================================== */
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

/* ========================================================
   ✅ Fast CORS Preflight (before cors middleware)
   ======================================================== */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Vary", "Origin");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

/* ========================================================
   ✅ Apply cors() with safe allow-list
   ======================================================== */
const allowedOrigins = [
  "http://localhost:3000",
  "https://calveratravels.com",
  "https://www.calveratravels.com",
  "https://calvera-travels-react-app.vercel.app",
  "https://calvera-travels-tt5v.vercel.app",
];

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // handle server-to-server or curl
      if (allowedOrigins.includes(origin)) return cb(null, true);
      console.warn("❌ Blocked CORS origin:", origin);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ========================================================
   ✅ Main API Routes
   ======================================================== */
app.use("/api/v1", routes);

/* ========================================================
   ✅ Health Check
   ======================================================== */
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

/* ========================================================
   ✅ Error Handlers
   ======================================================== */
app.use(notFound);
app.use(errorHandler);

export default app;
