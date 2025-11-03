import { Router } from 'express';
import Package from '../models/TourBooking.js';
import Destination from '../models/Destination.js';
import BlogPost from '../models/BlogPost.js';
import { buildPagination } from '../utils/pagination.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { q = '', page = 1, limit = 10 } = req.query;
    const { skip, limitNum } = buildPagination(page, limit);
    if (!q || !q.trim()) return res.json({ packages: [], destinations: [], blogs: [], total: 0 });

    const textQuery = { $text: { $search: q } };

    const [packages, destinations, blogs, counts] = await Promise.all([
      Package.find(textQuery, { score: { $meta: 'textScore' } })
             .sort({ score: { $meta: 'textScore' } }).skip(skip).limit(limitNum),
      Destination.find(textQuery, { score: { $meta: 'textScore' } })
                 .sort({ score: { $meta: 'textScore' } }).skip(skip).limit(limitNum),
      BlogPost.find(textQuery, { score: { $meta: 'textScore' } })
              .sort({ score: { $meta: 'textScore' } }).skip(skip).limit(limitNum),
      Promise.all([
        Package.countDocuments(textQuery),
        Destination.countDocuments(textQuery),
        BlogPost.countDocuments(textQuery),
      ])
    ]);

    const total = counts.reduce((a, b) => a + b, 0);
    res.json({ packages, destinations, blogs, total, page: Number(page) });
  } catch (e) { next(e); }
});

export default router;
