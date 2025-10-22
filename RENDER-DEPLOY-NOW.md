# 🚀 DEPLOY TO RENDER - DO THIS NOW

## Step 1: Open Render Dashboard

**Click here:** https://dashboard.render.com

- If not signed in, click **"Sign in with GitHub"**
- Authorize Render

---

## Step 2: Create New Web Service

1. Click the **"New +"** button (top right corner)
2. Click **"Web Service"** from dropdown

---

## Step 3: Connect Your GitHub Repository

**First time setup:**
1. Click **"Connect account"** or **"Configure account"**
2. You'll be redirected to GitHub
3. Click **"Install"** to give Render access
4. Select **"All repositories"** or select **"PNMS2026/Avroai"**
5. Click **"Install"**
6. You'll be redirected back to Render

**Connecting the repo:**
1. You should see a list of your repositories
2. Find **"PNMS2026/Avroai"**
3. Click **"Connect"** button next to it

---

## Step 4: Configure Your Service

Fill in these EXACT values:

### Basic Settings:

**Name:**
```
avroai
```
(You can choose any name you want)

**Region:**
```
Oregon
```
(Or choose the one closest to you)

**Branch:**
```
main
```

**Root Directory:**
```
(leave this EMPTY - just skip it)
```

**Runtime:**
```
Node
```
(Select from dropdown)

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Instance Type:**
```
Free
```
(Select from dropdown)

---

## Step 5: Add Environment Variables (CRITICAL!)

**Scroll down** and click the **"Advanced"** button to expand.

You'll see **"Environment Variables"** section.

Click **"Add Environment Variable"** THREE times to add these:

### Variable 1: MONGODB_URI

**Key:** (type exactly)
```
MONGODB_URI
```

**Value:** (copy and paste entire line)
```
mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai
```

### Variable 2: PORT

**Key:**
```
PORT
```

**Value:**
```
3000
```

### Variable 3: NODE_VERSION

**Key:**
```
NODE_VERSION
```

**Value:**
```
18.18.0
```

---

## Step 6: Double-Check Everything

Before clicking deploy, verify:

- ✅ Name: avroai (or your choice)
- ✅ Branch: main
- ✅ Build Command: npm install
- ✅ Start Command: npm start
- ✅ Instance Type: Free
- ✅ Environment Variables: 3 added (MONGODB_URI, PORT, NODE_VERSION)

---

## Step 7: Deploy!

1. Scroll to the bottom
2. Click the big blue **"Create Web Service"** button
3. **WAIT** - Don't close the tab!

---

## Step 8: Watch the Deployment

You'll see logs appearing in real-time:

**What you should see:**

```
==> Cloning from https://github.com/PNMS2026/Avroai...
==> Running build command 'npm install'
...adding packages...
==> Build successful 🎉
==> Starting service with 'npm start'
✅ Connected to MongoDB
🚀 Server running on http://localhost:3000
Your service is live 🎉
```

**This takes 3-5 minutes.**

---

## Step 9: Get Your Backend URL

Once deployment is complete:

1. Look at the top of the page
2. You'll see your URL: **https://avroai.onrender.com** (or similar)
3. **Copy this URL** - you'll need it!

---

## Step 10: Test Your Backend

Open a new tab and visit:
```
https://your-service-name.onrender.com/api/tools
```

**Expected result:** JSON data with your AI tools

**If you see JSON:** ✅ SUCCESS! Backend is working!

**If you see 502:** Continue to next section (MongoDB config)

---

## Common Issues During Deploy

### Issue: "Repository not found"
**Fix:** 
- Make sure you installed Render on your GitHub account
- Go to GitHub → Settings → Applications → Render → Configure
- Grant access to PNMS2026/Avroai repository

### Issue: "Build failed"
**Fix:**
- Check the logs for the exact error
- Usually it's missing package.json or syntax error
- Your code is fine, so this shouldn't happen

### Issue: "Service keeps restarting"
**Fix:**
- Go to "Logs" tab
- Look for error messages
- Usually MongoDB connection issue (fix in next step)

---

## ✅ You're Done with This Step!

Once you see "Your service is live 🎉" in the logs, move to the next step.

**Your backend URL:** https://avroai.onrender.com (or your custom name)

---

**Next:** Configure MongoDB Atlas to allow connections

