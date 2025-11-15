# 🚀 Quick Start - Get Your Shareable Link

## 3 Simple Steps

### Step 1: Start Your Server
```bash
npm run dev
```
Wait until you see: `Ready on http://localhost:3000`

### Step 2: Create Shareable Link
**Open a NEW terminal** and run:
```bash
npm run share
```
OR
```bash
node share-link.js
```

### Step 3: Copy the URL
The script will show you a URL like:
```
https://abc123-def456-ghi789.trycloudflare.com
```
**Copy this URL and share it with anyone!**

---

## ✅ That's It!

- ✅ **No deployment needed**
- ✅ **Shareable immediately**
- ✅ **Works on mobile & desktop**
- ✅ **Secure HTTPS**
- ✅ **Free**

---

## ⚠️ Important

1. **Keep both terminals open:**
   - Terminal 1: `npm run dev` (server)
   - Terminal 2: `npm run share` (tunnel)

2. **Tunnel stops when you close Terminal 2**
   - Create a new tunnel to get a new URL

3. **Server must stay running**
   - If you stop `npm run dev`, the tunnel won't work

---

## 🎯 Example

```bash
# Terminal 1
npm run dev

# Terminal 2 (new terminal)
npm run share

# Copy the URL that appears:
# https://abc123-def456-ghi789.trycloudflare.com
```

**Share the URL with anyone!**

