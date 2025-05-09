const mongoose = require('mongoose');
const User = require('../models/User');

const createAdmin = async () => {
  try {
    // Use hardcoded MongoDB URI
    const MONGODB_URI = 'mongodb://127.0.0.1:27017/furniture-web';
    
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully');

    const email = process.argv[2];
    const password = process.argv[3];

    if (!email || !password) {
      console.error('Please provide email and password as arguments');
      console.log('Usage: node createAdmin.js <email> <password>');
      process.exit(1);
    }

    console.log('Checking for existing admin...');
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      if (existingAdmin.role === 'admin') {
        console.log('Admin user already exists');
      } else {
        // Update existing user to admin
        existingAdmin.role = 'admin';
        await existingAdmin.save();
        console.log('User updated to admin role');
      }
      process.exit(0);
    }

    console.log('Creating new admin user...');
    // Create admin user
    const adminUser = new User({
      email,
      password,
      role: 'admin'
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  } finally {
    // Close the MongoDB connection
    await mongoose.connection.close();
  }
};

createAdmin();