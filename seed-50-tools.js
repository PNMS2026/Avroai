// Seed Database with 50 AI Tools
// Run this file with: node seed-50-tools.js

require('dotenv').config();
const mongoose = require('mongoose');
const Tool = require('./models/Tool');
const Category = require('./models/Category');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/avroai';

// Categories
const categories = [
  { name: 'Image Generation' },
  { name: 'Video Creation' },
  { name: 'Text & Writing' },
  { name: 'Code Assistant' },
  { name: 'Audio & Music' },
  { name: 'Productivity' },
  { name: 'Marketing' },
  { name: 'Data Analysis' },
  { name: 'Design Tools' },
  { name: 'Translation' },
  { name: 'Chatbots' },
  { name: 'Education' },
  { name: 'Research' },
  { name: 'SEO & Content' }
];

// 50 AI Tools
const tools = [
  // Text & Writing (10 tools)
  {
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for conversations, writing, coding, and problem-solving powered by OpenAI',
    category: 'Text & Writing',
    logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Claude',
    description: 'Advanced AI assistant by Anthropic for analysis, research, writing, and creative tasks with strong reasoning',
    category: 'Text & Writing',
    logo: 'https://claude.ai/favicon.ico',
    url: 'https://claude.ai'
  },
  {
    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps you write clear, mistake-free content with grammar checking',
    category: 'Text & Writing',
    logo: 'https://static.grammarly.com/assets/files/efe8db153da4c2a79663220b4c89aa35/favicon.svg',
    url: 'https://www.grammarly.com'
  },
  {
    name: 'QuillBot',
    description: 'AI-powered paraphrasing tool and writing assistant to improve your writing quality',
    category: 'Text & Writing',
    logo: 'https://quillbot.com/favicon.ico',
    url: 'https://quillbot.com'
  },
  {
    name: 'Wordtune',
    description: 'AI writing companion that helps you rewrite and rephrase your text for better clarity',
    category: 'Text & Writing',
    logo: 'https://www.wordtune.com/favicon.ico',
    url: 'https://www.wordtune.com'
  },
  {
    name: 'Writesonic',
    description: 'AI content creation platform for articles, blogs, ads, and marketing copy',
    category: 'Text & Writing',
    logo: 'https://writesonic.com/favicon.ico',
    url: 'https://writesonic.com'
  },
  {
    name: 'Rytr',
    description: 'AI writing assistant that helps create high-quality content in seconds',
    category: 'Text & Writing',
    logo: 'https://rytr.me/favicon.ico',
    url: 'https://rytr.me'
  },
  {
    name: 'Hemingway Editor',
    description: 'AI-powered editor that makes your writing bold and clear by highlighting complex sentences',
    category: 'Text & Writing',
    logo: 'https://hemingwayapp.com/favicon.ico',
    url: 'https://hemingwayapp.com'
  },
  {
    name: 'ProWritingAid',
    description: 'AI writing assistant with grammar checking, style improvements, and readability analysis',
    category: 'Text & Writing',
    logo: 'https://prowritingaid.com/favicon.ico',
    url: 'https://prowritingaid.com'
  },
  {
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management with intelligent writing assistance',
    category: 'Text & Writing',
    logo: 'https://www.notion.so/images/favicon.ico',
    url: 'https://www.notion.so/product/ai'
  },

  // Image Generation (10 tools)
  {
    name: 'Midjourney',
    description: 'Create stunning, unique images from text descriptions using advanced AI image generation',
    category: 'Image Generation',
    logo: 'https://cdn.midjourney.com/favicon.ico',
    url: 'https://www.midjourney.com'
  },
  {
    name: 'DALL-E 3',
    description: 'Generate realistic images and art from natural language descriptions with OpenAI technology',
    category: 'Image Generation',
    logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
    url: 'https://openai.com/dall-e-3'
  },
  {
    name: 'Stable Diffusion',
    description: 'Open-source AI model for generating detailed images from text descriptions',
    category: 'Image Generation',
    logo: 'https://stability.ai/favicon.ico',
    url: 'https://stability.ai'
  },
  {
    name: 'Leonardo.ai',
    description: 'AI-powered image generation platform for creating production-quality visual assets',
    category: 'Image Generation',
    logo: 'https://leonardo.ai/favicon.ico',
    url: 'https://leonardo.ai'
  },
  {
    name: 'Canva AI',
    description: 'Design platform with AI-powered image generation and editing tools',
    category: 'Image Generation',
    logo: 'https://static.canva.com/static/images/favicon.ico',
    url: 'https://www.canva.com'
  },
  {
    name: 'Adobe Firefly',
    description: 'Adobe\'s generative AI for creating images, text effects, and design elements',
    category: 'Image Generation',
    logo: 'https://firefly.adobe.com/favicon.ico',
    url: 'https://firefly.adobe.com'
  },
  {
    name: 'Playground AI',
    description: 'Free AI image generator for creating art, designs, and photos',
    category: 'Image Generation',
    logo: 'https://playground.com/favicon.ico',
    url: 'https://playground.com'
  },
  {
    name: 'NightCafe',
    description: 'AI art generator with multiple algorithms for creating unique artwork',
    category: 'Image Generation',
    logo: 'https://nightcafe.studio/favicon.ico',
    url: 'https://nightcafe.studio'
  },
  {
    name: 'Artbreeder',
    description: 'Collaborative AI tool for creating and mixing images using machine learning',
    category: 'Image Generation',
    logo: 'https://www.artbreeder.com/favicon.ico',
    url: 'https://www.artbreeder.com'
  },
  {
    name: 'Craiyon',
    description: 'Free AI image generator (formerly DALL-E mini) for creating images from text',
    category: 'Image Generation',
    logo: 'https://www.craiyon.com/favicon.ico',
    url: 'https://www.craiyon.com'
  },

  // Code Assistant (8 tools)
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster with intelligent suggestions',
    category: 'Code Assistant',
    logo: 'https://github.githubassets.com/favicons/favicon.png',
    url: 'https://github.com/features/copilot'
  },
  {
    name: 'Cursor',
    description: 'AI-powered code editor built for pair programming with AI',
    category: 'Code Assistant',
    logo: 'https://cursor.sh/favicon.ico',
    url: 'https://cursor.sh'
  },
  {
    name: 'Tabnine',
    description: 'AI code completion tool that learns your coding patterns',
    category: 'Code Assistant',
    logo: 'https://www.tabnine.com/favicon.ico',
    url: 'https://www.tabnine.com'
  },
  {
    name: 'Codeium',
    description: 'Free AI-powered code acceleration toolkit for developers',
    category: 'Code Assistant',
    logo: 'https://codeium.com/favicon.ico',
    url: 'https://codeium.com'
  },
  {
    name: 'Amazon CodeWhisperer',
    description: 'AI coding companion by AWS for generating code suggestions',
    category: 'Code Assistant',
    logo: 'https://aws.amazon.com/favicon.ico',
    url: 'https://aws.amazon.com/codewhisperer'
  },
  {
    name: 'Replit AI',
    description: 'AI-powered coding assistant integrated into Replit IDE',
    category: 'Code Assistant',
    logo: 'https://replit.com/favicon.ico',
    url: 'https://replit.com'
  },
  {
    name: 'CodeT5',
    description: 'Open-source AI model for code understanding and generation',
    category: 'Code Assistant',
    logo: 'https://huggingface.co/favicon.ico',
    url: 'https://huggingface.co/Salesforce/codet5-base'
  },
  {
    name: 'Phind',
    description: 'AI-powered search engine and coding assistant for developers',
    category: 'Code Assistant',
    logo: 'https://www.phind.com/favicon.ico',
    url: 'https://www.phind.com'
  },

  // Video Creation (5 tools)
  {
    name: 'Runway',
    description: 'AI-powered video editing and generation tool for creative professionals',
    category: 'Video Creation',
    logo: 'https://runwayml.com/favicon.ico',
    url: 'https://runwayml.com'
  },
  {
    name: 'Synthesia',
    description: 'AI video creation platform with AI avatars and text-to-video generation',
    category: 'Video Creation',
    logo: 'https://www.synthesia.io/favicon.ico',
    url: 'https://www.synthesia.io'
  },
  {
    name: 'Pictory',
    description: 'AI-powered video creation from text, perfect for content marketers',
    category: 'Video Creation',
    logo: 'https://pictory.ai/favicon.ico',
    url: 'https://pictory.ai'
  },
  {
    name: 'Descript',
    description: 'All-in-one video and audio editor powered by AI with transcription',
    category: 'Video Creation',
    logo: 'https://www.descript.com/favicon.ico',
    url: 'https://www.descript.com'
  },
  {
    name: 'HeyGen',
    description: 'AI video generator that creates professional videos with virtual avatars',
    category: 'Video Creation',
    logo: 'https://www.heygen.com/favicon.ico',
    url: 'https://www.heygen.com'
  },

  // Marketing (5 tools)
  {
    name: 'Jasper',
    description: 'AI content platform for creating marketing copy, blog posts, and social media content',
    category: 'Marketing',
    logo: 'https://www.jasper.ai/favicon.ico',
    url: 'https://www.jasper.ai'
  },
  {
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing content, emails, and social posts',
    category: 'Marketing',
    logo: 'https://www.copy.ai/favicon.ico',
    url: 'https://www.copy.ai'
  },
  {
    name: 'Adcreative.ai',
    description: 'AI-powered platform for generating conversion-focused ad creatives',
    category: 'Marketing',
    logo: 'https://www.adcreative.ai/favicon.ico',
    url: 'https://www.adcreative.ai'
  },
  {
    name: 'Persado',
    description: 'AI platform for generating and optimizing marketing language',
    category: 'Marketing',
    logo: 'https://www.persado.com/favicon.ico',
    url: 'https://www.persado.com'
  },
  {
    name: 'MarketMuse',
    description: 'AI content planning and optimization platform for content marketers',
    category: 'Marketing',
    logo: 'https://www.marketmuse.com/favicon.ico',
    url: 'https://www.marketmuse.com'
  },

  // Audio & Music (4 tools)
  {
    name: 'Murf AI',
    description: 'Generate realistic AI voiceovers with natural-sounding voices in multiple languages',
    category: 'Audio & Music',
    logo: 'https://murf.ai/favicon.ico',
    url: 'https://murf.ai'
  },
  {
    name: 'ElevenLabs',
    description: 'AI voice generator for creating realistic speech and voice cloning',
    category: 'Audio & Music',
    logo: 'https://elevenlabs.io/favicon.ico',
    url: 'https://elevenlabs.io'
  },
  {
    name: 'AIVA',
    description: 'AI music composition tool for creating original soundtracks',
    category: 'Audio & Music',
    logo: 'https://www.aiva.ai/favicon.ico',
    url: 'https://www.aiva.ai'
  },
  {
    name: 'Soundraw',
    description: 'AI music generator for creating royalty-free background music',
    category: 'Audio & Music',
    logo: 'https://soundraw.io/favicon.ico',
    url: 'https://soundraw.io'
  },

  // Productivity (4 tools)
  {
    name: 'Otter.ai',
    description: 'AI meeting assistant that records audio, writes notes, and generates summaries',
    category: 'Productivity',
    logo: 'https://otter.ai/favicon.ico',
    url: 'https://otter.ai'
  },
  {
    name: 'Mem',
    description: 'AI-powered note-taking app that organizes itself',
    category: 'Productivity',
    logo: 'https://get.mem.ai/favicon.ico',
    url: 'https://get.mem.ai'
  },
  {
    name: 'Fireflies.ai',
    description: 'AI assistant that records, transcribes, and analyzes voice conversations',
    category: 'Productivity',
    logo: 'https://fireflies.ai/favicon.ico',
    url: 'https://fireflies.ai'
  },
  {
    name: 'Taskade',
    description: 'AI-powered productivity workspace for tasks, notes, and collaboration',
    category: 'Productivity',
    logo: 'https://www.taskade.com/favicon.ico',
    url: 'https://www.taskade.com'
  },

  // Data Analysis (2 tools)
  {
    name: 'Julius AI',
    description: 'AI-powered data analysis tool that interprets and visualizes your data',
    category: 'Data Analysis',
    logo: 'https://julius.ai/favicon.ico',
    url: 'https://julius.ai'
  },
  {
    name: 'Polymer',
    description: 'AI-powered business intelligence tool for analyzing data without coding',
    category: 'Data Analysis',
    logo: 'https://www.polymersearch.com/favicon.ico',
    url: 'https://www.polymersearch.com'
  }
];

async function seedDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    console.log('📍 URI:', MONGODB_URI);
    
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
    console.log('🛠️  Adding 50 AI tools...');
    const insertedTools = await Tool.insertMany(tools);
    console.log(`✅ Added ${insertedTools.length} tools\n`);

    console.log('🎉 Database seeded successfully!\n');
    console.log('📊 Summary:');
    console.log(`   Categories: ${insertedCategories.length}`);
    console.log(`   Tools: ${insertedTools.length}`);
    console.log('\n🌐 Your site is now fully populated!');
    console.log('   Home: http://localhost:3000');
    console.log('   Admin: http://localhost:3000/admin');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    console.error('\n💡 Make sure MongoDB is running:');
    console.error('   Windows: net start MongoDB');
    console.error('   macOS: brew services start mongodb-community');
    console.error('   Linux: sudo systemctl start mongod');
    process.exit(1);
  }
}

seedDatabase();

