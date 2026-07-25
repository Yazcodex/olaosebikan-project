import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import connectDB from '../config/db.js';

dotenv.config();

const products = [
  {
    name: 'Small Sweet Bread',
    description: 'Soft sweet bread loaf for quick family meals.',
    price: 500,
    category: 'Sweet Bread',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    stockQuantity: 80,
    lowStockThreshold: 15,
    isAvailable: true,
  },
  {
    name: 'Medium Butter Bread',
    description: 'Rich butter bread with a tender crumb.',
    price: 900,
    category: 'Butter Bread',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    stockQuantity: 60,
    lowStockThreshold: 12,
    isAvailable: true,
  },
  {
    name: 'Family Jumbo Bread',
    description: 'Large loaf baked for families and bulk buyers.',
    price: 1500,
    category: 'Family Bread',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    stockQuantity: 30,
    lowStockThreshold: 10,
    isAvailable: true,
  },
];

async function seed() {
  await connectDB();

  await Promise.all([User.deleteMany(), Product.deleteMany(), Order.deleteMany()]);

  await User.create({
    name: 'Olaosebikan Admin',
    email: 'olaosebikan2212@gmail.com',
    password: 'Sebikan2212##',
  });

  const createdProducts = await Product.insertMany(products);

  await Order.create({
    customerName: 'Test Customer',
    phoneNumber: '+2348060000000',
    deliveryAddress: '12 Bakery Road, Lagos',
    items: [
      {
        product: createdProducts[0]._id,
        name: createdProducts[0].name,
        price: createdProducts[0].price,
        quantity: 2,
      },
    ],
    totalPrice: createdProducts[0].price * 2,
    status: 'Pending',
    orderDate: new Date(),
  });

  console.log('Seed data created.');
  console.log('Admin login: olaosebikan2212@gmail.com / Sebikan2212##');
  await mongoose.connection.close();
}

seed().catch(async (error) => {
  console.error(error);
  await mongoose.connection.close();
  process.exit(1);
});
