# ⚡ AvroAI - Quick Start Guide

Get your AI Tools Directory running in 5 minutes!

## 🔥 Fast Setup (5 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/avroai
```

### Step 3: Start MongoDB
Make sure MongoDB is running on your system.

**Windows:**
```bash
net start MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Step 4: Seed Sample Data (Optional but Recommended)
```bash
npm run seed
```

This adds 12 sample AI tools and 8 categories to get you started!

### Step 5: Start the Server
```bash
npm run dev
```

**That's it!** 🎉

---

## 🌐 Access Your Website

Open your browser and visit:

- **🏠 Home Page:** http://localhost:3000
- **📚 Categories:** http://localhost:3000/categories
- **🔐 Admin Panel:** http://localhost:3000/admin
- **ℹ️ About:** http://localhost:3000/about
- **📧 Contact:** http://localhost:3000/contact

---

## 🎯 What to Do Next

### Add Your Own Tools
1. Go to **http://localhost:3000/admin**
2. Add a category (if needed)
3. Fill in the "Add New Tool" form:
   - **Name:** Tool name
   - **Description:** Brief description
   - **Category:** Select from dropdown
   - **Logo URL:** Link to tool's logo image
   - **Website URL:** Link to the actual tool
4. Click "Add Tool"

### Edit or Delete Tools
- All tools are listed at the bottom of the admin panel
- Click **Edit** to modify a tool
- Click **Delete** to remove a tool

### Browse on Frontend
- Go to **http://localhost:3000**
- Search for tools by name or keyword
- Filter by category
- Click "Try Now" to visit the tool's website

---

## 📋 Sample Tool Entry

Here's an example of what to enter when adding a tool:

**Name:** ChatGPT  
**Description:** Advanced AI chatbot for conversations, writing, and problem-solving  
**Category:** Text & Writing  
**Logo URL:** https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png  
**Website URL:** https://chat.openai.com

---

## 🎨 Customization

### Change Branding
Edit these files:
- `public/index.html` - Change "AvroAI" name and subtitle
- `public/css/style.css` - Modify colors in `:root` section
- All HTML files - Update footer copyright

### Change Colors
In `public/css/style.css`, modify the CSS variables:
```css
:root {
    --primary-color: #6366f1;    /* Change main color */
    --secondary-color: #8b5cf6;  /* Change secondary color */
    /* ... more colors ... */
}
```

---

## 🐛 Troubleshooting

### "MongoDB connection error"
- Make sure MongoDB is running: `mongosh` to test
- Check your MONGODB_URI in `.env` file

### "Port 3000 is already in use"
- Change PORT in `.env` to another number (e.g., 3001, 8080)

### "Module not found"
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

---

## 📦 Project Structure

```
avroai/
├── server.js              # Main server file
├── package.json           # Dependencies
├── seed-data.js          # Sample data script
├── models/               # Database schemas
├── routes/               # API endpoints
└── public/               # Frontend files
    ├── css/             # Stylesheets
    ├── js/              # JavaScript
    └── *.html           # HTML pages
```

---

## 🚀 Deploy to Production

### Using Heroku
```bash
heroku create avroai
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
git push heroku main
```

### Using Other Platforms
1. Sign up for MongoDB Atlas (free tier available)
2. Get your connection string
3. Set MONGODB_URI environment variable
4. Deploy your code
5. Point avroai.com to your server

---

## 📚 Learn More

- **Full Documentation:** See `README.md`
- **Project Summary:** See `PROJECT-SUMMARY.md`
- **API Endpoints:** Documented in `README.md`

---

## ✅ Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Created `.env` file
- [ ] Started MongoDB
- [ ] Seeded sample data (`npm run seed`)
- [ ] Started server (`npm run dev`)
- [ ] Opened http://localhost:3000
- [ ] Added a test tool via admin panel
- [ ] Customized branding (optional)

---

**🎉 Enjoy building your AI Tools Directory!**

Questions? Check the README.md or PROJECT-SUMMARY.md files.

