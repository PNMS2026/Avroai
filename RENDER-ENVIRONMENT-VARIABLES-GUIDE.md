# ✅ Render Environment Variables Configuration

## 🎯 Purpose
Configure the 3 required environment variables in Render for your backend to work properly.

---

## 📋 Required Environment Variables

Your AvroAI backend needs these 3 variables:

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `MONGODB_URI` | Your MongoDB connection string | Database connection |
| `PORT` | `3000` | Server port |
| `NODE_VERSION` | `18.18.0` | Node.js version |

---

## 🚀 Step-by-Step Instructions

### Step 1: Access Render Dashboard
1. Go to: **https://dashboard.render.com**
2. Sign in with your GitHub account

### Step 2: Find Your Service
1. You should see your **"avroai"** service in the dashboard
2. Click on it to open service details

**If you don't see it:**
- You haven't deployed yet! Go back to deployment instructions
- Check you're in the correct Render account

### Step 3: Navigate to Environment Tab
1. In your service page, look for tabs at the top
2. Click on **"Environment"** tab
3. You'll see a list of environment variables

### Step 4: Check Existing Variables

Look for these 3 variables:

✅ **If all 3 exist with correct values**: You're done! Skip to Verification.

❌ **If any are missing or incorrect**: Continue to Step 5.

### Step 5: Add Missing Variables

For EACH missing variable, click **"Add Environment Variable"**:

#### Variable 1: MONGODB_URI
```
Key: MONGODB_URI
Value: mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai
```

**Important:** 
- Copy the ENTIRE string (no spaces at start/end)
- Make sure it starts with `mongodb+srv://`
- Make sure it ends with `&appName=Avroai`

#### Variable 2: PORT
```
Key: PORT
Value: 3000
```

#### Variable 3: NODE_VERSION
```
Key: NODE_VERSION
Value: 18.18.0
```

### Step 6: Save Changes
1. After adding all variables, scroll to bottom
2. Click **"Save Changes"** button
3. **IMPORTANT:** Render will automatically redeploy your service
4. Wait 2-3 minutes for redeployment

---

## ✅ Verification

### Visual Check
Your Environment tab should show:

```
┌──────────────────────────────────────────────────────────────┐
│ Environment Variables                                        │
├──────────────────────────────────────────────────────────────┤
│ MONGODB_URI                                                  │
│ mongodb+srv://panesh_mondal:*****@avroai.bkvoht8.mongodb... │
│ [Edit] [Delete]                                              │
├──────────────────────────────────────────────────────────────┤
│ PORT                                                         │
│ 3000                                                         │
│ [Edit] [Delete]                                              │
├──────────────────────────────────────────────────────────────┤
│ NODE_VERSION                                                 │
│ 18.18.0                                                      │
│ [Edit] [Delete]                                              │
└──────────────────────────────────────────────────────────────┘
```

**Note:** MongoDB URI will show `*****` for the password (this is normal security)

### Functional Test
After saving and redeployment completes:

1. Go to **"Logs"** tab in Render
2. Look for these messages:
   ```
   ✅ Connected to MongoDB
   🚀 Server running on http://localhost:3000
   ```

3. Test the API endpoint:
   - Visit: `https://avroai.onrender.com/api/tools`
   - Should return JSON data (not 502 error)

---

## 🔐 Security Best Practices

### ✅ DO:
- Use environment variables for all secrets
- Never commit `.env` file to Git
- Rotate passwords periodically
- Use strong, unique passwords

### ❌ DON'T:
- Hardcode credentials in code
- Share environment variables publicly
- Commit sensitive data to GitHub
- Use same password for multiple services

---

## 🐛 Troubleshooting

### Problem: "Add Environment Variable" button not showing
**Solution:**
- You may not have permissions
- Make sure you own the service
- Try refreshing the page

### Problem: After adding variables, still getting 502
**Solution:**
1. Wait for redeployment to complete (check "Events" tab)
2. Check "Logs" tab for error messages
3. Verify MongoDB Atlas allows 0.0.0.0/0 access
4. Check that MongoDB URI is correct (no typos)

### Problem: Service keeps restarting
**Solution:**
1. Go to "Logs" tab
2. Look for error messages like:
   - `MongoDB connection error` → Check MONGODB_URI
   - `Port already in use` → Should use PORT env var
   - `Module not found` → Check package.json

### Problem: Can't edit existing variable
**Solution:**
1. Click the [Edit] button next to the variable
2. Update the value
3. Click "Save Changes"
4. Service will auto-redeploy

### Problem: Variables not showing in logs
**Solution:**
- Environment variables are loaded at startup
- Make sure to restart/redeploy after changes
- Check that variable names are EXACTLY correct (case-sensitive)

---

## 📝 Copy-Paste Values

For your convenience, here are the exact values to copy:

### MONGODB_URI (copy entire line):
```
mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai
```

### PORT:
```
3000
```

### NODE_VERSION:
```
18.18.0
```

---

## 🔄 What Happens When You Save

1. **Render detects change** → Triggers new deployment
2. **Build starts** → Runs `npm install`
3. **Environment loaded** → Variables available to app
4. **Server starts** → Runs `npm start`
5. **Health check** → Render verifies service is running
6. **Traffic switches** → New version goes live

**Total time:** ~2-3 minutes

---

## ✅ Checklist

After completing this guide, verify:

- [ ] Logged into Render Dashboard
- [ ] Opened your "avroai" service
- [ ] Navigated to "Environment" tab
- [ ] Added/verified MONGODB_URI
- [ ] Added/verified PORT (3000)
- [ ] Added/verified NODE_VERSION (18.18.0)
- [ ] Clicked "Save Changes"
- [ ] Waited for redeployment to complete
- [ ] Checked "Logs" for successful startup
- [ ] Tested API endpoint (no 502 error)

---

## 🔗 Quick Links

- **Render Dashboard**: https://dashboard.render.com
- **Render Docs - Environment Variables**: https://render.com/docs/environment-variables
- **Render Support**: https://render.com/docs

---

## 💡 Pro Tips

### Tip 1: Use .env locally
Create a `.env` file locally (already in .gitignore):
```
MONGODB_URI=mongodb+srv://panesh_mondal:grcQXl5TRG3P76qY@avroai.bkvoht8.mongodb.net/avroai?retryWrites=true&w=majority&appName=Avroai
PORT=3000
```

### Tip 2: Test locally before deploying
```bash
npm start
# Visit: http://localhost:3000/api/tools
```

### Tip 3: Use Render's secret file feature
For very sensitive data, you can use secret files instead of env vars.

### Tip 4: Group-related variables
Use prefixes to organize:
- `DB_URI`, `DB_NAME`, `DB_PASSWORD`
- `API_KEY`, `API_SECRET`

---

## ✅ Task Complete!

Once all 3 variables are set and service is running without errors, this task is done!

**Next Steps:**
1. Check deployment logs
2. Test API endpoints
3. Verify frontend can connect

---

**Need help?** Check Render documentation or contact support.

