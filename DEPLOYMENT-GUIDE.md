# 🚀 AvroAI Deployment Guide
## Railway (Backend) + MongoDB Atlas + Vercel (Frontend)

---

## 📋 **Quick Overview**

Your AvroAI application stack:
- **Backend:** Railway (Node.js + Express)
- **Database:** MongoDB Atlas (already configured)
- **Frontend:** Vercel (Static files)

**Total deployment time:** ~10 minutes

---

## 🎯 **PART 1: Deploy Backend to Railway** (5 minutes)

### Step 1: Sign Up / Login to Railway

1. Go to: **https://railway.app**
2. Click **"Login"** or **"Start a New Project"**
3. Sign in with **GitHub** (recommended)
4. Authorize Railway to access your repositories

### Step 2: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Find and select: **"PNMS2026/Avroai"**
4. Click on the repository to deploy

**Railway will automatically:**
- ✅ Detect it's a Node.js project
- ✅ Install dependencies (`npm install`)
- ✅ Start the server (`npm start`)

### Step 3: Add Environment Variables

**CRITICAL:** Click on your deployment, then click **"Variables"** tab

Add these **3 environment variables**:

#### Variable 1: MONGODB_URI
**Key:**
```
MONGODB_URI
```
**Value:**
```
mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai
```

#### Variable 2: PORT
**Key:**
```
PORT
```
**Value:**
```
3000
```

#### Variable 3: NODE_VERSION
**Key:**
```
NODE_VERSION
```
**Value:**
```
18
```

### Step 4: Generate Public Domain

1. Go to **"Settings"** tab in your Railway project
2. Scroll down to **"Networking"** section
3. Click **"Generate Domain"**
4. Copy your Railway URL (something like: `avroai-production.up.railway.app`)

### Step 5: Verify Backend is Running

1. Visit your Railway URL + `/api/tools`:
   ```
   https://your-app-name.up.railway.app/api/tools
   ```

2. You should see JSON data with your AI tools

**If you see JSON:** ✅ Backend is working!

---

## 🎯 **PART 2: Configure MongoDB Atlas** (2 minutes)

### Allow Railway to Access Database

1. Go to: **https://cloud.mongodb.com**
2. Sign in with your account
3. Click **"Network Access"** (left sidebar)
4. Click **"Add IP Address"**
5. Click **"ALLOW ACCESS FROM ANYWHERE"**
6. Confirm (this adds `0.0.0.0/0`)

**This is required** so Railway can connect to your database!

---

## 🎯 **PART 3: Update Frontend Configuration** (1 minute)

### Update API URL in Config

1. Open `public/js/config.js` in your code
2. Update the production URL to your Railway URL:

```javascript
production: 'https://YOUR-RAILWAY-URL.up.railway.app/api',
```

Replace `YOUR-RAILWAY-URL` with your actual Railway domain.

3. Save the file
4. Commit and push to GitHub:
   ```bash
   git add public/js/config.js
   git commit -m "Update API URL for Railway"
   git push
   ```

---

## 🎯 **PART 4: Deploy Frontend to Vercel** (3 minutes)

### Step 1: Sign Up / Login to Vercel

1. Go to: **https://vercel.com**
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find **"PNMS2026/Avroai"** in the list
3. Click **"Import"**

### Step 3: Configure Project

**Framework Preset:** Other  
**Root Directory:** `./`  
**Build Command:** (leave empty)  
**Output Directory:** `public`  
**Install Command:** (leave empty)

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment
3. Your site will be live at: `https://avroai.vercel.app` (or similar)

### Step 5: Test Your Site

Visit your Vercel URL and verify:
- ✅ Homepage loads
- ✅ Tools are displayed
- ✅ Search works
- ✅ Category filter works

---

## ✅ **Verification Checklist**

After completing all steps:

### Backend Verification:
- [ ] Railway project is deployed
- [ ] 3 environment variables are set
- [ ] Generated public domain
- [ ] Visit `https://your-url.up.railway.app/api/tools` → Returns JSON
- [ ] No errors in Railway logs

### Database Verification:
- [ ] MongoDB Atlas Network Access allows 0.0.0.0/0
- [ ] Connection string is correct
- [ ] Database has tools data

### Frontend Verification:
- [ ] Config.js has correct Railway URL
- [ ] Changes pushed to GitHub
- [ ] Vercel project deployed
- [ ] Frontend loads without errors
- [ ] Tools display on homepage
- [ ] No console errors (Press F12)

---

## 🔧 **Troubleshooting**

### Issue: "Backend not loading"

**Check Railway Logs:**
1. Go to Railway dashboard
2. Click on your project
3. Check **"Deployments"** → **"View Logs"**
4. Look for errors

**Common issues:**
- MongoDB connection error → Check Network Access allows 0.0.0.0/0
- Module not found → Redeploy (Railway will reinstall packages)
- Port error → Make sure PORT env var is set to 3000

### Issue: "Frontend shows no tools"

**Check browser console (F12):**
- Look for network errors
- Verify API URL is correct
- Make sure Railway backend is running

**Common issues:**
- Wrong API URL in config.js
- Railway backend is still deploying (wait 2-3 minutes)
- CORS error (shouldn't happen - already configured)

### Issue: "502 or 503 errors"

**Solutions:**
1. Check Railway deployment status
2. Verify environment variables are set
3. Check Railway logs for errors
4. Redeploy if needed

---

## 📊 **Your Live Application**

After successful deployment:

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | https://avroai.vercel.app | User interface |
| **Backend** | https://your-app.up.railway.app | API server |
| **Database** | MongoDB Atlas | Data storage |
| **Admin Panel** | https://avroai.vercel.app/admin | Admin interface |

---

## 🔄 **Future Updates**

### To Update Your Application:

1. **Make changes locally**
2. **Test locally:** `npm start`
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

**Auto-Deploy:**
- ✅ Railway automatically redeploys backend
- ✅ Vercel automatically redeploys frontend

---

## 💰 **Cost Breakdown**

### Free Tier:
- **Railway:** $5 credit/month (enough for small apps)
- **Vercel:** Free forever for personal projects
- **MongoDB Atlas:** Free tier (512MB)
- **Total:** $0/month for hobby use

### Paid Plans (Optional):
- **Railway:** $5-20/month for more resources
- **Vercel Pro:** $20/month for teams
- **MongoDB Atlas:** $9+/month for dedicated clusters

---

## 🎉 **Success!**

If everything is working:
- ✅ Backend on Railway responds to API calls
- ✅ Database connected successfully
- ✅ Frontend on Vercel loads tools
- ✅ Search and filters work
- ✅ Admin panel accessible

**Your AvroAI is now live!** 🚀

---

## 📚 **Important Links**

- **Railway Dashboard:** https://railway.app/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard
- **MongoDB Atlas:** https://cloud.mongodb.com
- **GitHub Repository:** https://github.com/PNMS2026/Avroai

---

## 🆘 **Need Help?**

### Railway Issues:
- **Docs:** https://docs.railway.app
- **Discord:** https://discord.gg/railway

### Vercel Issues:
- **Docs:** https://vercel.com/docs
- **Support:** https://vercel.com/support

### MongoDB Issues:
- **Docs:** https://docs.atlas.mongodb.com
- **Support:** https://support.mongodb.com

---

## 💡 **Pro Tips**

### 1. Monitor Your Apps
- Check Railway logs for backend errors
- Use Vercel Analytics for frontend metrics
- Monitor MongoDB usage in Atlas dashboard

### 2. Environment Variables
- Keep sensitive data in environment variables
- Never commit .env files to GitHub
- Update Railway vars if you change database password

### 3. Custom Domain (Optional)
- **Vercel:** Settings → Domains → Add your domain
- **Railway:** Settings → Networking → Add custom domain
- Update DNS records at your domain registrar

### 4. Performance
- Railway doesn't sleep (unlike Render free tier)
- Vercel uses global CDN (super fast)
- Consider upgrading MongoDB for better performance

---

**That's it! You're done!** 🎊

Your AvroAI is now deployed and ready to use!

