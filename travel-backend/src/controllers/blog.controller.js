import BlogPost from '../models/BlogPost.js';
import { buildPagination } from '../utils/pagination.js';

export async function listBlogs(req, res, next) {
  try {
    const { page = 1, limit = 10, tag } = req.query;
    const filter = {};
    if (tag) filter.tags = tag;
    const { skip, limitNum } = buildPagination(page, limit);

    const [items, total] = await Promise.all([
      BlogPost.find(filter).sort({ publishedAt: -1 }).skip(skip).limit(limitNum),
      BlogPost.countDocuments(filter),
    ]);
    res.json({ items, total, page: Number(page), pages: Math.ceil(total / limitNum) });
  } catch (e) { next(e); }
}

export async function getBlogBySlug(req, res, next) {
  try {
    const item = await BlogPost.findOne({ slug: req.params.slug });
    if (!item) return res.status(404).json({ message: 'Post not found' });
    res.json(item);
  } catch (e) { next(e); }
}
