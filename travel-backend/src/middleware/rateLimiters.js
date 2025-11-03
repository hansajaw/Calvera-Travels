import rateLimit from 'express-rate-limit';
export const formLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many submissions, please try again shortly.' }
});
