const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Furniture = require('../models/Furniture');
const Design = require('../models/Design');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Drop the database
    await mongoose.connection.dropDatabase();
    console.log('Dropped existing database');

    // Create admin user
    const adminUser = await User.create({
      email: 'admin@test.com',
      password: 'password123',
      role: 'admin'
    });
    console.log('Created admin user');

    // Create test user
    const testUser = await User.create({
      email: 'user@test.com',
      password: 'password123',
      role: 'user'
    });
    console.log('Created test user');

    // Create furniture categories and items
    const furnitureItems = [
      {
        name: 'Modern Chair',
        category: 'chairs',
        description: 'A sleek and comfortable modern chair',
        dimensions: {
          width: 50,
          height: 80,
          depth: 50
        },
        materials: ['wood', 'fabric'],
        colors: ['black', 'white', 'gray'],
        price: 299.99,
        modelUrl: '/public/models/chair.glb',
        thumbnailUrl: '/public/images/chair-thumbnail.jpg',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1
      },
      {
        name: 'Dining Table',
        category: 'tables',
        description: 'Contemporary dining table with wooden top',
        dimensions: {
          width: 150,
          height: 75,
          depth: 90
        },
        materials: ['wood', 'metal'],
        colors: ['brown', 'black'],
        price: 499.99,
        modelUrl: '/public/models/dining-table.glb',
        thumbnailUrl: '/public/images/dining-table-thumbnail.jpg',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1
      },
      {
        name: 'Side Table',
        category: 'tables',
        description: 'Compact side table with glass top',
        dimensions: {
          width: 40,
          height: 60,
          depth: 40
        },
        materials: ['wood', 'glass'],
        colors: ['brown', 'black'],
        price: 149.99,
        modelUrl: '/public/models/side-table.glb',
        thumbnailUrl: '/public/images/side-table-thumbnail.jpg',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1
      }
    ];

    const createdFurniture = await Furniture.insertMany(furnitureItems);
    console.log('Created furniture items');

    // Create sample designs
    const sampleDesigns = [
      {
        name: 'Living Room Set',
        description: 'Modern living room setup',
        userId: testUser._id,
        roomSpecs: {
          floorColor: '#ffffff',
          wallColor: '#f5f5f5',
          shape: 'rectangular',
          height: 300,
          length: 500,
          width: 400
        },
        furniture: [
          {
            type: 'dining-table',
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: 'brown',
            shading: 'none'
          },
          {
            type: 'chair',
            position: { x: 0, y: 0, z: -100 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: 'black',
            shading: 'none'
          },
          {
            type: 'side-table',
            position: { x: 150, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: 'brown',
            shading: 'none'
          }
        ]
      },
      {
        name: 'L-Shaped Room',
        description: 'L-shaped room design',
        userId: testUser._id,
        roomSpecs: {
          floorColor: '#f0f0f0',
          wallColor: '#e0e0e0',
          shape: 'l-shaped',
          height: 300,
          length: 600,
          width: 400
        },
        furniture: [
          {
            type: 'dining-table',
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: 'brown',
            shading: 'none'
          },
          {
            type: 'chair',
            position: { x: 0, y: 0, z: -100 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: 'black',
            shading: 'none'
          }
        ]
      }
    ];

    await Design.insertMany(sampleDesigns);
    console.log('Created sample designs');

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 