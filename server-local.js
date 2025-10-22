const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Start MongoDB Memory Server and Connect
let mongoServer;

async function startServer() {
  try {
    console.log('🚀 Starting MongoDB Memory Server...');
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    console.log('📍 MongoDB Memory Server URI:', mongoUri);
    
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB Memory Server\n');
    
    // Seed initial data
    await seedInitialData();
    
    // Routes
    app.use('/api/tools', require('./routes/tools'));
    app.use('/api/categories', require('./routes/categories'));

    // Serve frontend pages
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.get('/categories', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'categories.html'));
    });

    app.get('/admin', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'admin.html'));
    });

    app.get('/about', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'about.html'));
    });

    app.get('/contact', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'contact.html'));
    });

    // Start HTTP server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🌐 Server running on http://localhost:${PORT}`);
      console.log(`📁 Admin Panel: http://localhost:${PORT}/admin`);
      console.log(`\n💡 Using in-memory MongoDB - data will reset on restart`);
    });
    
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
}

// Seed Initial Data with 50 Tools
async function seedInitialData() {
  const Tool = require('./models/Tool');
  const Category = require('./models/Category');
  
  const existingTools = await Tool.countDocuments();
  
  if (existingTools > 0) {
    console.log(`📊 Database already has ${existingTools} tools`);
    return;
  }
  
  console.log('🌱 Seeding database with 50 AI tools...\n');
  
  // Categories
  const categories = [
    { name: 'Image Generation' }, { name: 'Video Creation' },
    { name: 'Text & Writing' }, { name: 'Code Assistant' },
    { name: 'Audio & Music' }, { name: 'Productivity' },
    { name: 'Marketing' }, { name: 'Data Analysis' },
    { name: 'Design Tools' }, { name: 'Translation' },
    { name: 'Chatbots' }, { name: 'Education' },
    { name: 'Research' }, { name: 'SEO & Content' }
  ];
  
  await Category.insertMany(categories);
  console.log(`✅ Added ${categories.length} categories`);
  
  // 50 AI Tools
  const tools = require('./tools-data');
  await Tool.insertMany(tools);
  console.log(`✅ Added ${tools.length} AI tools\n`);
  console.log('🎉 Database seeded successfully!\n');
}

// Cleanup on exit
process.on('SIGINT', async () => {
  console.log('\n\n🛑 Shutting down...');
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
  process.exit(0);
});

startServer();

