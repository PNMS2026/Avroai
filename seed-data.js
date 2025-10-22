// Optional: Seed Database with Sample Data
// Run this file with: node seed-data.js

require('dotenv').config();
const mongoose = require('mongoose');
const Tool = require('./models/Tool');
const Category = require('./models/Category');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/avroai';

// Sample Categories
const categories = [
  { name: 'Image Generation' },
  { name: 'Video Creation' },
  { name: 'Text & Writing' },
  { name: 'Code Assistant' },
  { name: 'Audio & Music' },
  { name: 'Productivity' },
  { name: 'Marketing' },
  { name: 'Data Analysis' }
];

// Sample Tools
const tools = [
  {
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for conversations, writing, coding, and problem-solving powered by OpenAI',
    category: 'Text & Writing',
    logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Midjourney',
    description: 'Create stunning, unique images from text descriptions using advanced AI image generation',
    category: 'Image Generation',
    logo: 'https://cdn.midjourney.com/favicon.ico',
    url: 'https://www.midjourney.com'
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster with intelligent suggestions',
    category: 'Code Assistant',
    logo: 'https://github.githubassets.com/favicons/favicon.png',
    url: 'https://github.com/features/copilot'
  },
  {
    name: 'DALL-E 3',
    description: 'Generate realistic images and art from natural language descriptions with OpenAI',
    category: 'Image Generation',
    logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
    url: 'https://openai.com/dall-e-3'
  },
  {
    name: 'Runway',
    description: 'AI-powered video editing and generation tool for creative professionals',
    category: 'Video Creation',
    logo: 'https://runwayml.com/favicon.ico',
    url: 'https://runwayml.com'
  },
  {
    name: 'Grammarly',
    description: 'AI writing assistant that helps you write clear, mistake-free content',
    category: 'Text & Writing',
    logo: 'https://static.grammarly.com/assets/files/efe8db153da4c2a79663220b4c89aa35/favicon.svg',
    url: 'https://www.grammarly.com'
  },
  {
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management with intelligent assistance',
    category: 'Productivity',
    logo: 'https://www.notion.so/images/favicon.ico',
    url: 'https://www.notion.so/product/ai'
  },
  {
    name: 'Jasper',
    description: 'AI content platform for creating marketing copy, blog posts, and social media content',
    category: 'Marketing',
    logo: 'https://www.jasper.ai/favicon.ico',
    url: 'https://www.jasper.ai'
  },
  {
    name: 'Murf AI',
    description: 'Generate realistic AI voiceovers with natural-sounding voices in multiple languages',
    category: 'Audio & Music',
    logo: 'https://murf.ai/favicon.ico',
    url: 'https://murf.ai'
  },
  {
    name: 'Claude',
    description: 'Advanced AI assistant by Anthropic for analysis, research, and creative tasks',
    category: 'Text & Writing',
    logo: 'https://claude.ai/favicon.ico',
    url: 'https://claude.ai'
  },
  {
    name: 'Stable Diffusion',
    description: 'Open-source AI model for generating detailed images from text descriptions',
    category: 'Image Generation',
    logo: 'https://stability.ai/favicon.ico',
    url: 'https://stability.ai'
  },
  {
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing content, emails, and social posts',
    category: 'Marketing',
    logo: 'https://www.copy.ai/favicon.ico',
    url: 'https://www.copy.ai'
  }
];

async function seedDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Tool.deleteMany({});
    await Category.deleteMany({});
    console.log('✅ Data cleared\n');

    // Insert categories
    console.log('📁 Adding categories...');
    const insertedCategories = await Category.insertMany(categories);
    console.log(`✅ Added ${insertedCategories.length} categories\n`);

    // Insert tools
    console.log('🛠️  Adding tools...');
    const insertedTools = await Tool.insertMany(tools);
    console.log(`✅ Added ${insertedTools.length} tools\n`);

    console.log('🎉 Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Categories: ${insertedCategories.length}`);
    console.log(`   Tools: ${insertedTools.length}`);
    console.log('\n🌐 You can now access your site at http://localhost:3000');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

