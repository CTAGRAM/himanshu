#!/bin/bash

# Get Shareable Link Script
# This script starts a Cloudflare Tunnel and displays the shareable URL

echo "🔍 Checking if server is running..."
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "❌ Error: Server is not running on port 3000"
    echo "   Please start your server first with: npm run dev"
    exit 1
fi

echo "✅ Server is running on port 3000"
echo ""
echo "🚀 Starting Cloudflare Tunnel..."
echo "📡 This will create a shareable link..."
echo ""
echo "⏳ Please wait (this may take 10-15 seconds)..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start cloudflared and capture output
cloudflared tunnel --url http://localhost:3000 2>&1 | tee /tmp/tunnel-output.log &
TUNNEL_PID=$!

# Wait for the URL to appear
sleep 10

# Extract the URL from the output
TUNNEL_URL=$(grep -oE "https://[a-z0-9-]+\.trycloudflare\.com" /tmp/tunnel-output.log 2>/dev/null | head -1)

if [ -n "$TUNNEL_URL" ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🎉 SUCCESS! Your shareable link is ready:"
    echo ""
    echo "   $TUNNEL_URL"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "📋 Instructions:"
    echo "   • Copy the URL above"
    echo "   • Share it with anyone"
    echo "   • They can access your site immediately"
    echo ""
    echo "⚠️  Important:"
    echo "   • Keep this terminal open (closing it will stop the tunnel)"
    echo "   • Keep your server running (npm run dev)"
    echo "   • Press Ctrl+C to stop the tunnel"
    echo ""
    echo "🔗 The tunnel is now running. The URL above is your shareable link!"
    echo ""
    
    # Keep the script running
    wait $TUNNEL_PID
else
    echo ""
    echo "⚠️  Could not extract URL automatically. Check the output above."
    echo "   Look for a line containing: https://...trycloudflare.com"
    echo ""
    # Keep running anyway
    wait $TUNNEL_PID
fi

