# Shareable Link Guide - Cloudflare Tunnel

## 🚀 Quick Start - Create Shareable Link

### Option 1: Using the Script (Easiest)

1. **Make sure your server is running:**
   ```bash
   npm run dev
   ```

2. **In a new terminal, run the tunnel script:**
   ```bash
   ./start-tunnel.sh
   ```

3. **Wait for the URL:**
   - Cloudflare will generate a URL like: `https://abc123-def456-ghi789.trycloudflare.com`
   - This is your **shareable link**!

4. **Share the link:**
   - Copy the URL from the terminal
   - Share it with anyone
   - They can access your site immediately

### Option 2: Manual Command

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **In a new terminal, start the tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:3000
   ```

3. **Copy the URL:**
   - Look for a line like: `https://abc123-def456-ghi789.trycloudflare.com`
   - This is your shareable link!

---

## 📋 Requirements

- **Cloudflared installed:** Already installed via npm
- **Server running:** Your Next.js dev server must be running on port 3000
- **Internet connection:** Required to create the tunnel

---

## 🔗 How It Works

1. **Cloudflare Tunnel** creates a secure connection between your local server and Cloudflare's network
2. **HTTPS URL** is generated that points to your local server
3. **Anyone** with the URL can access your site
4. **No deployment** needed - it's a live tunnel to your local server

---

## ⚠️ Important Notes

1. **Tunnel stays active** while the command is running
2. **Close the tunnel** by pressing `Ctrl+C` in the terminal
3. **URL changes** each time you restart the tunnel (unless you use a named tunnel)
4. **Free tier** - perfect for sharing and testing
5. **Server must stay running** - if you stop `npm run dev`, the tunnel won't work

---

## 🎯 Step-by-Step Instructions

### Step 1: Start Your Server
```bash
npm run dev
```
Wait until you see: `Ready on http://localhost:3000`

### Step 2: Start the Tunnel
Open a **new terminal** and run:
```bash
cloudflared tunnel --url http://localhost:3000
```

### Step 3: Copy the URL
Look for output like:
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://abc123-def456-ghi789.trycloudflare.com                                           |
+--------------------------------------------------------------------------------------------+
```

### Step 4: Share the Link
- Copy the URL (e.g., `https://abc123-def456-ghi789.trycloudflare.com`)
- Share it with anyone
- They can access your site immediately!

---

## 🔄 Keep the Tunnel Running

- **Keep the terminal open** - the tunnel runs while the command is active
- **Don't close the terminal** - closing it will stop the tunnel
- **Keep your server running** - `npm run dev` must stay active

---

## 🛑 Stop the Tunnel

- Press `Ctrl+C` in the tunnel terminal
- Or close the terminal window

---

## 🔧 Troubleshooting

### "Server is not running"
- Make sure `npm run dev` is running
- Check that the server is on port 3000
- Wait a few seconds for the server to start

### "cloudflared: command not found"
- Install cloudflared: `npm install -g cloudflared`
- Or use the tunnel script: `./start-tunnel.sh`

### "Connection refused"
- Check that your server is running
- Verify the port is 3000
- Try restarting the server

### URL not working
- Wait a few seconds for the tunnel to fully establish
- Check that both server and tunnel are running
- Try creating a new tunnel

---

## 🌟 Alternative: Named Tunnel (Persistent URL)

If you want the **same URL every time**, you can create a named tunnel:

1. **Login to Cloudflare:**
   ```bash
   cloudflared tunnel login
   ```

2. **Create a named tunnel:**
   ```bash
   cloudflared tunnel create my-tunnel
   ```

3. **Run the tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:3000 my-tunnel
   ```

This will give you a persistent URL that doesn't change!

---

## 📱 Share Your Link

Once you have the URL:
- ✅ Share via email
- ✅ Share via messaging apps
- ✅ Share via social media
- ✅ Anyone with the link can access your site
- ✅ Works on mobile and desktop
- ✅ Secure HTTPS connection

---

## 🎉 That's It!

You now have a **shareable link** that anyone can use to access your local development server!

**No deployment needed** - just share the URL and they can see your site immediately.

