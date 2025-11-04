// travel-backend/src/app.js
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

// CORS — allow your deployed frontend(s)
const allowedOrigins = [
  "https://calveratravels.com",
  "https://www.calveratravels.com",
  "https://calvera-travels-react-app.vercel.app",
  "https://clavera-travels-react-app.vercel.app",
  /\.vercel\.app$/,
];
app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true);
      const ok = allowedOrigins.some((o) =>
        o instanceof RegExp ? o.test(origin) : o === origin
      );
      return ok ? cb(null, true) : cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Health & routes
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);
app.use("/api/v1", routes);

// Errors
app.use(notFound);
app.use(errorHandler);

export default app;
