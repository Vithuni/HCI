const mongoose = require('mongoose');
const User = require('../models/User');
const Furniture = require('../models/Furniture');
const Category = require('../models/Category');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const initializeDatabase = async () => {
  try {
    // Check if MongoDB URI exists
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    // Create Categories
    const categories = [
      { name: 'Living Room', description: 'Furniture for living room spaces' },
      { name: 'Bedroom', description: 'Furniture for bedroom spaces' },
      { name: 'Kitchen', description: 'Furniture for kitchen spaces' },
      { name: 'Office', description: 'Furniture for office spaces' },
      { name: 'Outdoor', description: 'Outdoor furniture designs' }
    ];

    console.log('Creating categories...');
    await Category.insertMany(categories);
    console.log('Categories created successfully');

    // Create sample furniture items
    const furnitureItems = [
      {
        name: 'Modern Sofa',
        description: 'Contemporary 3-seater sofa with premium fabric',
        category: 'Living Room',
        dimensions: { length: 220, width: 90, height: 85 },
        materials: ['Fabric', 'Wood', 'Metal'],
        price: 1299.99,
        imageUrl: 'https://example.com/sofa.jpg',
        isCustomizable: true
      },
      {
        name: 'Ergonomic Office Chair',
        description: 'Adjustable office chair with lumbar support',
        category: 'Office',
        dimensions: { length: 65, width: 65, height: 110 },
        materials: ['Mesh', 'Aluminum', 'Plastic'],
        price: 299.99,
        imageUrl: 'https://example.com/office-chair.jpg',
        isCustomizable: true
      },
      {
        name: 'Queen Size Bed Frame',
        description: 'Modern bed frame with headboard',
        category: 'Bedroom',
        dimensions: { length: 200, width: 160, height: 40 },
        materials: ['Wood', 'Metal'],
        price: 899.99,
        imageUrl: 'https://example.com/bed.jpg',
        isCustomizable: true
      }
    ];

    console.log('Creating sample furniture items...');
    await Furniture.insertMany(furnitureItems);
    console.log('Sample furniture items created successfully');

    // Create a test admin user
    const adminUser = new User({
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    });

    console.log('Creating admin user...');
    await adminUser.save();
    console.log('Admin user created successfully');

    console.log('Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error.message);
    process.exit(1);
  }
};

initializeDatabase(); 