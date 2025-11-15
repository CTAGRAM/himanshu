# How to Share Your Project with Cloudflare Tunnel

## Quick Start (Recommended)

### Option 1: Two Terminal Windows

**Terminal 1 - Start your dev server:**
```bash
npm run dev
```

**Terminal 2 - Create shareable link:**
```bash
npm run share
```

The share script will:
- Check if your server is running on port 3000
- Create a Cloudflare tunnel
- Give you a shareable URL like: `https://xxxxx.trycloudflare.com`

### Option 2: Combined Script (All-in-One)

Run this single command:
```bash
npm run share:all
```

This will start both the dev server and the tunnel automatically.

## Important Notes

1. **Keep both terminals open** - Closing them will stop the server/tunnel
2. **The link is temporary** - It will expire when you stop the tunnel
3. **Anyone with the link can access** - Share it with anyone, anywhere
4. **Works on any device** - Mobile, tablet, desktop - all work instantly

## Troubleshooting

- **"Server is not running"** - Make sure `npm run dev` is running first
- **"cloudflared not found"** - Run: `brew install cloudflare/cloudflare/cloudflared`
- **Port 3000 in use** - Change port in `package.json` dev script or kill the process using port 3000

## Stopping

Press `Ctrl+C` in both terminals to stop the server and tunnel.

