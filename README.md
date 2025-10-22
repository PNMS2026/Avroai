# 🚀 AvroAI - AI Tools Directory

A clean, fast, and responsive AI tools directory platform built with Node.js, Express, and MongoDB.

## 📋 Features

- **🏠 Home Page** - Browse all AI tools with search and category filtering
- **📚 Categories Page** - Explore tools organized by categories
- **🔍 Search Functionality** - Find tools by name or keyword
- **🎨 Responsive Design** - Beautiful UI that works on all devices
- **⚡ Fast & Lightweight** - Optimized for performance
- **🔐 Admin Panel** - Private dashboard to manage tools and categories
- **🎯 Direct Links** - "Try Now" buttons link directly to tool websites

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with modern design principles

## 📁 Project Structure

```
avroai/
├── models/
│   ├── Tool.js              # Tool schema
│   └── Category.js          # Category schema
├── routes/
│   ├── tools.js             # Tool API routes
│   └── categories.js        # Category API routes
├── public/
│   ├── css/
│   │   ├── style.css        # Main styles
│   │   └── admin.css        # Admin panel styles
│   ├── js/
│   │   ├── main.js          # Home page logic
│   │   ├── categories.js    # Categories page logic
│   │   └── admin.js         # Admin panel logic
│   ├── index.html           # Home page
│   ├── categories.html      # Categories page
│   ├── admin.html           # Admin panel
│   ├── about.html           # About page
│   └── contact.html         # Contact page
├── server.js                # Express server
├── package.json             # Dependencies
└── README.md               # Documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

### Installation

1. **Clone or download this project**

```bash
cd avroai
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/avroai
```

4. **Start MongoDB**

Make sure MongoDB is running on your system:

```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Windows
net start MongoDB

# On Linux
sudo systemctl start mongod
```

5. **Run the application**

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

6. **Open your browser**

Navigate to: `http://localhost:3000`

## 🎯 Usage

### Frontend Pages

- **Home** (`/`) - Browse all AI tools
- **Categories** (`/categories`) - View tools by category
- **About** (`/about`) - Information about AvroAI
- **Contact** (`/contact`) - Contact information
- **Admin** (`/admin`) - Manage tools and categories

### Admin Panel

Access the admin panel at `/admin` to:

- ✅ Add new AI tools
- ✏️ Edit existing tools
- 🗑️ Delete tools
- 📁 Create categories
- 🏷️ Remove categories

### API Endpoints

#### Tools

- `GET /api/tools` - Get all tools
- `GET /api/tools?category=name` - Filter tools by category
- `GET /api/tools/search?q=keyword` - Search tools
- `POST /api/tools` - Add a new tool
- `PUT /api/tools/:id` - Update a tool
- `DELETE /api/tools/:id` - Delete a tool

#### Categories

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Add a new category
- `DELETE /api/categories/:id` - Delete a category

## 📝 Adding Sample Data

To get started quickly, you can add sample tools and categories through the admin panel at `/admin`.

### Sample Categories

- Image Generation
- Video Creation
- Text & Writing
- Code Assistant
- Audio & Music
- Productivity
- Marketing
- Data Analysis

### Sample Tool Format

```json
{
  "name": "ChatGPT",
  "description": "Advanced AI chatbot for conversations, writing, and problem-solving",
  "category": "Text & Writing",
  "logo": "https://example.com/chatgpt-logo.png",
  "url": "https://chat.openai.com"
}
```

## 🎨 Customization

### Styling

- Main styles: `public/css/style.css`
- Admin styles: `public/css/admin.css`
- Color scheme defined in CSS variables (`:root`)

### Branding

Update the following in your HTML files:
- Website name: "AvroAI" (in navigation)
- Subtitle: "Discover the best AI tools from around the world"
- Footer: "© AvroAI 2025"

## 🌐 Deployment

### Deploy to Production

1. **Set up your MongoDB database** (MongoDB Atlas recommended)

2. **Update environment variables**

```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/avroai
```

3. **Build and deploy** to your preferred platform:
   - Heroku
   - DigitalOcean
   - AWS
   - Vercel
   - Railway

### Domain Setup

1. Point your domain `avroai.com` to your server
2. Set up SSL certificate (Let's Encrypt recommended)
3. Update any hardcoded URLs if necessary

## 📊 Database Schema

### Tool Model

```javascript
{
  name: String (required),
  description: String (required),
  category: String (required),
  logo: String (required),
  url: String (required),
  createdAt: Date (default: now)
}
```

### Category Model

```javascript
{
  name: String (required, unique),
  createdAt: Date (default: now)
}
```

## 🔒 Security Recommendations

For production deployment:

1. Add authentication to the admin panel
2. Use environment variables for sensitive data
3. Implement rate limiting
4. Enable CORS restrictions
5. Add input validation and sanitization
6. Use HTTPS only

## 🐛 Troubleshooting

### MongoDB Connection Error

```bash
# Check if MongoDB is running
mongosh

# If not, start the service
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
net start MongoDB                      # Windows
```

### Port Already in Use

Change the `PORT` in your `.env` file to a different number (e.g., 3001, 8080).

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, contact: contact@avroai.com

## 🌟 Acknowledgments

- Inspired by [Aixploria](https://www.aixploria.com/en/)
- Built with modern web technologies
- Designed for simplicity and performance

---

**Made with ❤️ for the AI community**

