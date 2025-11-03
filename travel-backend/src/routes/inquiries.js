import { Router } from 'express';
import { submitInquiry } from '../controllers/inquiry.controller.js';
import { inquiryRules } from '../validators/inquiry.validators.js';
import { formLimiter } from '../middleware/rateLimiters.js';

const router = Router();
router.post('/', formLimiter, inquiryRules, submitInquiry);
export default router;
