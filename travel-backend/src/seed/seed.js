import 'dotenv/config';
import mongoose from 'mongoose';
import Package from '../models/TourBooking.js';
import Destination from '../models/Destination.js';
import BlogPost from '../models/BlogPost.js';
import { connectDB } from '../config/db.js';

function slugify(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}

async function run() {
  await connectDB(process.env.MONGODB_URI);

  await Promise.all([
    Package.deleteMany({}),
    Destination.deleteMany({}),
    BlogPost.deleteMany({}),
  ]);

  const destinations = await Destination.insertMany([
    { name: 'Sigiriya', region: 'Central', description: 'Ancient rock fortress in Sri Lanka', slug: 'sigiriya', coverImage: '/img/sigiriya.jpg' },
    { name: 'Ella', region: 'Uva', description: 'Hiking paradise with scenic train rides', slug: 'ella', coverImage: '/img/ella.jpg' },
    { name: 'Galle', region: 'Southern', description: 'Fort city with colonial charm', slug: 'galle', coverImage: '/img/galle.jpg' },
  ]);

  await Package.insertMany([
    { title: 'Cultural Triangle Explorer', slug: slugify('Cultural Triangle Explorer'), description: 'Explore Dambulla, Sigiriya & Kandy', priceUSD: 399, durationDays: 3, destination: 'Central', highlights: ['Sigiriya Rock', 'Kandy Temple'], images: [], isFeatured: true },
    { title: 'Ella Hiking Retreat', slug: slugify('Ella Hiking Retreat'), description: 'Little Adam’s Peak and Nine Arches', priceUSD: 299, durationDays: 2, destination: 'Uva', highlights: ['Nine Arches Bridge'], images: [] },
    { title: 'Galle Fort & Beaches', slug: slugify('Galle Fort & Beaches'), description: 'Historic fort and southern beaches', priceUSD: 349, durationDays: 2, destination: 'Southern', highlights: ['Galle Fort', 'Unawatuna'], images: [] },
  ]);

  await BlogPost.insertMany([
    { title: 'Top 5 Things to Do in Galle', slug: slugify('Top 5 Things to Do in Galle'), excerpt: 'Food, fort walls and sunsets', content: 'Long article here...', bannerImage: '/img/galle-blog.jpg', tags: ['galle', 'southern'] },
    { title: 'Riding the Train to Ella', slug: slugify('Riding the Train to Ella'), excerpt: 'Probably the most scenic route', content: 'Long article here...', bannerImage: '/img/ella-train.jpg', tags: ['ella', 'train'] },
  ]);

  console.log('✅ Seed complete');
  await mongoose.disconnect();
}

run().catch(err => { console.error(err); process.exit(1); });
