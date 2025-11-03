import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, index: 'text' },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, index: 'text' },
  content: { type: String, index: 'text' },
  bannerImage: String,
  tags: { type: [String], index: true },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

BlogPostSchema.index({ title: 'text', excerpt: 'text', content: 'text', tags: 'text' });

export default mongoose.model('BlogPost', BlogPostSchema);
