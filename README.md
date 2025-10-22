# 🚀 AvroAI - AI Tools Directory

A beautiful, modern web application to discover and explore AI tools from around the world.

## 📋 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **Hosting:** 
  - Backend: Railway
  - Frontend: Vercel

## ✨ Features

- 🔍 **Search Functionality** - Find AI tools by name or description
- 📁 **Category Filtering** - Browse tools by category
- ⚡ **Fast & Responsive** - Modern, mobile-friendly design
- 🛠️ **Admin Panel** - Manage tools and categories
- 🌐 **48+ AI Tools** - Curated collection of the best AI tools

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Railway account (for backend deployment)
- Vercel account (for frontend deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/PNMS2026/Avroai.git
   cd Avroai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Deployment

### Complete deployment guide: [`DEPLOYMENT-GUIDE.md`](./DEPLOYMENT-GUIDE.md)

**Quick steps:**

1. **Deploy Backend to Railway**
   - Connect GitHub repository
   - Add environment variables (MONGODB_URI, PORT, NODE_VERSION)
   - Generate public domain

2. **Configure MongoDB Atlas**
   - Add 0.0.0.0/0 to Network Access
   - Allow connections from anywhere

3. **Deploy Frontend to Vercel**
   - Import GitHub repository
   - Set output directory to `public`
   - Deploy

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB Atlas connection string | Yes |
| `PORT` | Server port (default: 3000) | Yes |
| `NODE_VERSION` | Node.js version (18) | Yes |

## 📂 Project Structure

```
avroai/
├── models/           # MongoDB models (Category, Tool)
├── routes/           # API routes (tools, categories)
├── public/           # Frontend files
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript files
│   └── *.html       # HTML pages
├── server.js        # Express server
├── package.json     # Dependencies
└── README.md        # This file
```

## 🌐 API Endpoints

### Tools
- `GET /api/tools` - Get all tools
- `GET /api/tools?category=Chatbots` - Get tools by category
- `GET /api/tools/search?q=chatgpt` - Search tools
- `POST /api/tools` - Create new tool
- `PUT /api/tools/:id` - Update tool
- `DELETE /api/tools/:id` - Delete tool

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category
- `DELETE /api/categories/:id` - Delete category

## 🎨 Pages

- **Home** (`/`) - Browse all AI tools
- **Categories** (`/categories`) - View tools by category
- **Admin** (`/admin`) - Manage tools and categories
- **About** (`/about`) - About the platform
- **Contact** (`/contact`) - Contact information

## 🧪 Testing

Run the automated deployment test:

```bash
# Open test-deployment.html in your browser
# Click "Run All Tests"
```

This will verify:
- ✅ Frontend configuration
- ✅ Backend API connection
- ✅ Database connection
- ✅ CORS configuration

## 📚 Documentation

- **Deployment Guide:** `DEPLOYMENT-GUIDE.md`
- **MongoDB Network Setup:** `MONGODB-NETWORK-ACCESS-GUIDE.md`
- **Project Summary:** `PROJECT-SUMMARY.md`

## 💰 Hosting Costs

**Free Tier:**
- Railway: $5 credit/month (sufficient for small apps)
- Vercel: Free forever (personal projects)
- MongoDB Atlas: Free tier (512MB)

**Total:** $0/month for hobby use

## 🔄 Updates & Auto-Deploy

Both Railway and Vercel automatically deploy when you push to GitHub:

```bash
git add .
git commit -m "Your update"
git push
```

## 🛠️ Built With

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM
- [Railway](https://railway.app/) - Backend hosting
- [Vercel](https://vercel.com/) - Frontend hosting

## 📄 License

MIT License - feel free to use this project for your own purposes

## 👤 Author

**AvroAI Team**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Live Demo:** [avroai.vercel.app](https://avroai.vercel.app)

**Need help?** Check `DEPLOYMENT-GUIDE.md` or open an issue.
