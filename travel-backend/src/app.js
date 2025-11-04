// travel-backend/src/app.js
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// --- CORS ---
const allowedOrigins = [
  'https://calveratravels.com',
  'https://www.calveratravels.com',
  'https://clavera-travels-react-app.vercel.app',
  'https://calvera-travels-react-app.vercel.app',
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
      console.warn('❌ Blocked CORS origin:', origin);
      return cb(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

// --- Routes ---
app.use('/api/v1', routes);

// --- Health ---
app.get('/api/health', (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || 'development' })
);

// --- Errors ---
app.use(notFound);
app.use(errorHandler);

export default app;
