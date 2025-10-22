# 🚀 Deploy AvroAI: Frontend (Vercel) + Backend (Render)

## 📋 Architecture Overview

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  VERCEL         │────────▶│  RENDER         │────────▶│  MONGODB ATLAS  │
│  (Frontend)     │  API    │  (Backend)      │  Data   │  (Database)     │
│                 │  Calls  │                 │ Storage │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
  avroai.vercel.app      avroai.onrender.com       Already Active ✅
```

### Benefits:
- ✅ **Fast Frontend**: Vercel's global CDN for static files
- ✅ **Scalable Backend**: Render handles API and server logic
- ✅ **Cloud Database**: MongoDB Atlas (already configured)
- ✅ **Free Tiers**: Both Vercel and Render offer free plans
- ✅ **Easy Updates**: Push to GitHub auto-deploys both

---

## 🎯 STEP 1: Deploy Backend to Render

### 1.1 Push Code to GitHub (If Not Done)

See `PUSH-TO-GITHUB.md` for detailed instructions.

Quick commands:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/PNMS2026/Avroai.git
git push -u origin main
```

### 1.2 Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in with GitHub

2. **Create New Web Service**
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository: `PNMS2026/Avroai`

3. **Configure Service**
   ```
   Name: avroai-backend
   Environment: Node
   Region: Choose closest to you
   Branch: main
   Root Directory: (leave blank)
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```

4. **Add Environment Variables**
   Click **"Advanced"** and add:
   
   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | `mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai` |
   | `PORT` | `3000` |
   | `NODE_VERSION` | `18.18.0` |

5. **Deploy!**
   - Click **"Create Web Service"**
   - Wait 3-5 minutes for deployment
   - Note your backend URL: `https://avroai-backend.onrender.com`

### 1.3 Test Backend
Visit: `https://your-backend.onrender.com/api/tools`
You should see JSON data with your tools.

---

## 🎯 STEP 2: Deploy Frontend to Vercel

### 2.1 Update API Configuration

Before deploying frontend, update the backend URL:

**Edit `public/js/config.js`:**
```javascript
const API_CONFIG = {
    production: 'https://avroai-backend.onrender.com/api',  // ← Your Render URL
    // ... rest of code
};
```

Save and commit:
```bash
git add public/js/config.js
git commit -m "Update API URL for production"
git push
```

### 2.2 Deploy on Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. **Sign Up / Sign In**
   - Go to: https://vercel.com
   - Click **"Sign Up"** or **"Log In"**
   - Use GitHub to sign in

2. **Import Project**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Find and select: `PNMS2026/Avroai`
   - Click **"Import"**

3. **Configure Project**
   ```
   Project Name: avroai
   Framework Preset: Other (or None)
   Root Directory: ./
   Build Command: (leave empty for static site)
   Output Directory: public
   ```

4. **Deploy**
   - Click **"Deploy"**
   - Wait 1-2 minutes
   - Your site will be live at: `https://avroai.vercel.app`

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### 2.3 Custom Domain (Optional)

To use `avroai.com`:

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add: `avroai.com` and `www.avroai.com`
3. Follow DNS configuration instructions
4. Update your domain's DNS records

---

## 🔧 STEP 3: Configure CORS (Already Done!)

The backend is already configured to accept requests from Vercel:

```javascript
// In server.js - Already configured!
const corsOptions = {
  origin: [
    'https://avroai.vercel.app',
    'https://avroai-*.vercel.app',
    /\.vercel\.app$/
  ]
};
```

---

## ✅ STEP 4: Verify Deployment

### 4.1 Test Frontend
Visit your Vercel URL: `https://avroai.vercel.app`

Check:
- ✅ Homepage loads
- ✅ Tools are displayed (fetched from Render backend)
- ✅ Search works
- ✅ Category filter works
- ✅ Admin panel accessible

### 4.2 Test Backend
Visit: `https://avroai-backend.onrender.com/api/tools`

Check:
- ✅ Returns JSON data
- ✅ Tools are listed
- ✅ MongoDB connection working

### 4.3 Test Integration
- Open browser console (F12)
- Navigate through your site
- Check for CORS errors (there should be none)
- Test admin panel (add/edit/delete tool)

---

## 📊 Your Live URLs

After deployment:

| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend** | `https://avroai.vercel.app` | User interface |
| **Backend API** | `https://avroai-backend.onrender.com/api` | API endpoints |
| **Admin** | `https://avroai.vercel.app/admin` | Admin panel |
| **Database** | MongoDB Atlas | Data storage (already active) |

---

## 🔄 Auto-Deployment

Both platforms auto-deploy when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Updated features"
git push

# ✅ Vercel automatically deploys frontend
# ✅ Render automatically deploys backend
```

---

## 💰 Cost Breakdown (Free Tiers)

### Vercel (Frontend)
- ✅ **FREE Forever**
- 100 GB bandwidth/month
- Unlimited deployments
- Global CDN
- Custom domains
- Automatic HTTPS

### Render (Backend)
- ✅ **FREE Tier**
- 750 hours/month
- 512 MB RAM
- Sleeps after 15 min inactivity
- First request takes ~30s after sleep

### MongoDB Atlas (Database)
- ✅ **FREE Tier** (already using)
- 512 MB storage
- Shared cluster
- No credit card required

### Total Cost: **$0/month** 🎉

---

## 🚀 Upgrade Options

### Vercel Pro ($20/month)
- More bandwidth
- Better analytics
- Team features

### Render Starter ($7/month)
- ✅ **No sleep** (recommended!)
- Always-on service
- More RAM
- Better performance

### MongoDB Atlas Paid Plans
- More storage
- Dedicated clusters
- Backups

---

## 🔐 Security Checklist

- ✅ CORS configured (only Vercel can access API)
- ✅ `.env` not committed (secrets protected)
- ✅ MongoDB Atlas credentials in environment variables
- ✅ HTTPS enabled (automatic)
- ✅ MongoDB network access configured

### Additional Security (Optional):
- Add rate limiting to API
- Implement admin authentication
- Use API keys for admin panel
- Enable MongoDB IP whitelist

---

## 🐛 Troubleshooting

### Frontend Can't Connect to Backend

**Problem:** API calls fail with CORS error

**Solution:**
1. Check backend URL in `config.js`
2. Verify Render deployment is live
3. Check CORS settings in `server.js`
4. Make sure backend is not sleeping (on Render free tier)

### Backend Sleeps Too Often

**Problem:** First request takes 30+ seconds

**Solutions:**
1. **Upgrade to Render Starter** ($7/month) - No sleep!
2. Use UptimeRobot to ping every 10 minutes (free)
3. Accept the cold start on free tier

### Database Connection Issues

**Problem:** Tools not loading

**Solution:**
1. Check MongoDB Atlas is online
2. Verify network access allows 0.0.0.0/0
3. Check `MONGODB_URI` in Render environment variables
4. View Render logs for connection errors

### Vercel Build Fails

**Problem:** Deployment fails

**Solution:**
1. Check `vercel.json` is valid JSON
2. Ensure `public` folder exists
3. Verify all HTML files are in `public/`
4. Check Vercel build logs

---

## 📖 Configuration Files

### Key Files for This Setup:

```
avroai/
├── vercel.json              # Vercel configuration
├── render.yaml              # Render configuration  
├── server.js                # Backend with CORS
├── public/
│   ├── js/
│   │   └── config.js        # API URL configuration
│   ├── index.html           # Homepage
│   ├── admin.html           # Admin panel
│   └── ...                  # Other frontend files
└── package.json             # Dependencies
```

---

## 🎯 Quick Deployment Summary

1. ✅ Push code to GitHub
2. ✅ Deploy backend to Render (with MongoDB URI)
3. ✅ Update `config.js` with Render backend URL
4. ✅ Push updated config
5. ✅ Deploy frontend to Vercel
6. ✅ Test everything works!

---

## 📱 Next Steps

After deployment:

1. **Test thoroughly** - Try all features
2. **Monitor performance** - Check Render and Vercel dashboards
3. **Add custom domain** - Use avroai.com
4. **Consider upgrades** - Render Starter to avoid cold starts
5. **Add more tools** - Use admin panel
6. **Share your site** - It's live! 🎉

---

## 🆘 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **MongoDB Atlas:** https://docs.atlas.mongodb.com

---

## ✅ Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas network access configured (0.0.0.0/0)
- [ ] Backend deployed to Render
- [ ] Backend URL tested and working
- [ ] `config.js` updated with production backend URL
- [ ] Changes committed and pushed
- [ ] Frontend deployed to Vercel
- [ ] Frontend loads and connects to backend
- [ ] All features tested
- [ ] Admin panel works

---

**Your AI Tools Directory will be live on Vercel + Render!** 🚀

**Frontend:** Fast global CDN  
**Backend:** Scalable Node.js API  
**Database:** Reliable MongoDB Atlas  

**Total Setup Time:** ~15 minutes  
**Monthly Cost:** $0 (or $7 for no-sleep backend)

---

Good luck with your deployment! 🌟

