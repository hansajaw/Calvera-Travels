import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

const allowed = process.env.CLIENT_ORIGIN?.split(',').map(s => s.trim());
app.use(cors({ origin: allowed || '*' }));

app.use('/api/v1', routes);
app.use(notFound);
app.use(errorHandler);

export default app;
