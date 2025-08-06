const connectDB = require('../config/db');
const User = require('../models/User');
const Project = require('../models/Project');

const seed = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    await Project.deleteMany();

    const client = await User.create({
      name: 'Client',
      email: 'client@example.com',
      password: '123456',
      role: 'client',
    });

    const student = await User.create({
      name: 'Student',
      email: 'student@example.com',
      password: '123456',
      role: 'student',
    });

    await Project.create({
      title: 'Demo Project',
      description: 'Sample project for seeding',
      category: 'web',
      budget: 100,
      client: client._id,
    });

    console.log('Seed complete');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
