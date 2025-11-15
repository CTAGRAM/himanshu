#!/bin/bash

# Cloudflare Tunnel Script
# This script creates a shareable link for your local development server

echo "🚀 Starting Cloudflare Tunnel..."
echo "📡 Connecting to localhost:3000..."
echo ""
echo "⏳ Please wait while the tunnel is being created..."
echo ""

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "❌ Error: Server is not running on port 3000"
    echo "   Please start your server first with: npm run dev"
    exit 1
fi

# Start cloudflared tunnel
echo "✅ Server is running!"
echo ""
echo "🔗 Creating tunnel... (this may take a few seconds)"
echo ""

cloudflared tunnel --url http://localhost:3000

