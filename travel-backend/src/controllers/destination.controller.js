import Destination from '../models/Destination.js';
import { buildPagination } from '../utils/pagination.js';

export async function listDestinations(req, res, next) {
  try {
    const { page = 1, limit = 12, region } = req.query;
    const filter = {};
    if (region) filter.region = region;
    const { skip, limitNum } = buildPagination(page, limit);

    const [items, total] = await Promise.all([
      Destination.find(filter).sort({ name: 1 }).skip(skip).limit(limitNum),
      Destination.countDocuments(filter),
    ]);
    res.json({ items, total, page: Number(page), pages: Math.ceil(total / limitNum) });
  } catch (e) { next(e); }
}

export async function getDestinationBySlug(req, res, next) {
  try {
    const item = await Destination.findOne({ slug: req.params.slug });
    if (!item) return res.status(404).json({ message: 'Destination not found' });
    res.json(item);
  } catch (e) { next(e); }
}
