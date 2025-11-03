import { Router } from 'express';
import tourRoutes from "./tour.js";
import destRoutes from './destinations.js';
import blogRoutes from './blogs.js';
import searchRoutes from './search.js';
import inquiryRoutes from './inquiries.js';
import newsletterRoutes from "./newsletter.js";
import contactRoutes from './contact.js';

const router = Router();
router.get('/health', (req, res) => res.json({ ok: true }));
router.use('/destinations', destRoutes);
router.use('/blogs', blogRoutes);
router.use('/search', searchRoutes);
router.use('/inquiries', inquiryRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/tour", tourRoutes);
router.use('/contact', contactRoutes);

export default router;
