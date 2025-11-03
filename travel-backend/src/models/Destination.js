import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true, index: 'text' },
  slug: { type: String, required: true, unique: true },
  region: { type: String, index: true },
  description: { type: String, index: 'text' },
  coverImage: String,
  gallery: [String],
}, { timestamps: true });

DestinationSchema.index({ name: 'text', description: 'text', region: 'text' });

export default mongoose.model('Destination', DestinationSchema);
