# 🚀 Deploy AvroAI to Render

## Quick Deployment Guide

Follow these steps to deploy your AvroAI Tools Directory to Render.

---

## 📋 Prerequisites

1. ✅ GitHub account
2. ✅ Render account (sign up at https://render.com)
3. ✅ Your code pushed to GitHub
4. ✅ MongoDB Atlas credentials (already configured)

---

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub

If you haven't already, initialize Git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - AvroAI Tools Directory"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Sign Up/Login to Render

1. Go to: https://render.com
2. Sign up or log in (you can use GitHub login)

### Step 3: Create New Web Service

1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository
4. Select your **avroai** repository

### Step 4: Configure Service

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `avroai` (or your preferred name) |
| **Region** | Choose closest to you |
| **Branch** | `main` |
| **Root Directory** | (leave blank) |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | `Free` |

### Step 5: Add Environment Variables

Click **"Advanced"** and add these environment variables:

**Required:**

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai` |
| `PORT` | `3000` |
| `NODE_VERSION` | `18.18.0` |

### Step 6: Deploy

1. Click **"Create Web Service"**
2. Render will start building and deploying
3. Wait 3-5 minutes for deployment to complete

### Step 7: Access Your Live Site

Once deployed, you'll get a URL like:
```
https://avroai.onrender.com
```

---

## 🎯 What Render Provides

✅ **Free Hosting** - Free tier available  
✅ **Automatic HTTPS** - SSL certificate included  
✅ **Auto Deploy** - Deploys on every Git push  
✅ **Custom Domain** - Can add your avroai.com domain  
✅ **Logs & Monitoring** - Built-in dashboard  

---

## 🌐 After Deployment

Your live URLs will be:

- **Home:** https://avroai.onrender.com
- **Admin:** https://avroai.onrender.com/admin
- **Categories:** https://avroai.onrender.com/categories
- **API:** https://avroai.onrender.com/api/tools

---

## 🔧 Configuration Files

These files have been created for Render:

- ✅ `render.yaml` - Render configuration
- ✅ `.gitignore` - Excludes node_modules and .env
- ✅ `package.json` - Has proper start script

---

## ⚠️ Important Notes

### Free Tier Limitations:
- **Sleep after inactivity:** Service sleeps after 15 mins of no requests
- **Cold starts:** First request after sleep takes ~30 seconds
- **Monthly hours:** 750 hours/month free

### To Prevent Sleep:
1. Upgrade to paid plan ($7/month)
2. Or use a service like UptimeRobot to ping your site every 10 minutes

---

## 🔐 Security Best Practices

### For Production:

1. **Environment Variables**
   - ✅ MongoDB URI is in Render's env vars (not in code)
   - ✅ Never commit `.env` file

2. **Admin Panel Protection** (Optional)
   - Consider adding authentication
   - Or use a secret URL path

3. **Database Security**
   - ✅ MongoDB Atlas already configured
   - Consider enabling IP whitelisting in Atlas

---

## 📱 Custom Domain Setup

To use **avroai.com** instead of **.onrender.com**:

1. **In Render Dashboard:**
   - Go to your service
   - Click "Settings"
   - Scroll to "Custom Domain"
   - Add `avroai.com` and `www.avroai.com`

2. **In Your Domain Registrar:**
   - Add CNAME record:
     - Name: `www`
     - Value: `avroai.onrender.com`
   - Add A record (or ALIAS):
     - Name: `@`
     - Value: (Render will provide IP)

3. **Wait for DNS propagation** (can take 1-48 hours)

---

## 🔄 Continuous Deployment

Once set up, Render automatically deploys when you:

```bash
git add .
git commit -m "Update tools"
git push
```

Render will:
1. Detect the push
2. Build your app
3. Deploy automatically
4. Your live site updates!

---

## 📊 Monitoring Your Site

Access Render Dashboard to:
- ✅ View deployment logs
- ✅ Monitor performance
- ✅ Check uptime
- ✅ Manage environment variables
- ✅ View metrics

Dashboard: https://dashboard.render.com

---

## 🐛 Troubleshooting

### Build Fails:
- Check build logs in Render dashboard
- Verify `package.json` has all dependencies
- Ensure Node version is compatible

### Database Connection Fails:
- Verify MongoDB URI in environment variables
- Check MongoDB Atlas whitelist (should allow all IPs: 0.0.0.0/0)
- Test connection string locally first

### Site Not Loading:
- Check deploy logs for errors
- Verify PORT environment variable is set
- Ensure start command is correct

---

## 💡 Quick Commands Reference

### Test Locally Before Deploy:
```bash
npm start
```

### Push Changes to Deploy:
```bash
git add .
git commit -m "Your message"
git push
```

### View Logs:
```bash
# In Render dashboard, go to "Logs" tab
```

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] Code is working locally (`npm start`)
- [ ] `.env` file is in `.gitignore`
- [ ] MongoDB Atlas connection works
- [ ] All dependencies in `package.json`
- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] Environment variables configured in Render

---

## 🎉 You're Ready to Deploy!

Your AvroAI is ready for Render deployment!

**Next steps:**
1. Push your code to GitHub
2. Connect to Render
3. Add environment variables
4. Deploy!

**Your site will be live in minutes!** 🚀

---

## 📚 Useful Links

- **Render Dashboard:** https://dashboard.render.com
- **Render Docs:** https://render.com/docs
- **MongoDB Atlas:** https://cloud.mongodb.com
- **Your GitHub:** https://github.com

---

**Need help? Check the Render documentation or contact Render support.**

Good luck with your deployment! 🌟

