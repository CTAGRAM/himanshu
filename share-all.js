#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

let devServer = null;
let tunnel = null;

// Check if server is running
const checkServer = () => {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000', (res) => {
      resolve(true);
    });
    req.on('error', () => {
      resolve(false);
    });
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
};

// Wait for server to be ready
const waitForServer = async (maxAttempts = 30) => {
  for (let i = 0; i < maxAttempts; i++) {
    const isRunning = await checkServer();
    if (isRunning) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    process.stdout.write('.');
  }
  return false;
};

// Start dev server
const startDevServer = () => {
  console.log('🚀 Starting Next.js dev server...');
  devServer = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  devServer.on('error', (error) => {
    console.error('❌ Error starting dev server:', error);
    process.exit(1);
  });
};

// Start cloudflared tunnel
const startTunnel = async () => {
  console.log('\n⏳ Waiting for server to be ready');
  const serverReady = await waitForServer();
  
  if (!serverReady) {
    console.error('\n❌ Server did not start in time');
    if (devServer) devServer.kill();
    process.exit(1);
  }
  
  console.log('\n✅ Server is running on port 3000');
  console.log('📡 Creating Cloudflare tunnel...');
  console.log('⏳ Please wait (this may take 10-15 seconds)...\n');
  
  tunnel = spawn('cloudflared', ['tunnel', '--url', 'http://localhost:3000'], {
    stdio: ['inherit', 'pipe', 'pipe']
  });
  
  let urlFound = false;
  
  tunnel.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(output);
    
    const urlMatch = output.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
    if (urlMatch && !urlFound) {
      urlFound = true;
      const url = urlMatch[0];
      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('\n🎉 SUCCESS! Your shareable link is ready:\n');
      console.log(`   ${url}\n`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('\n📋 Share this URL with anyone - they can access your site immediately!');
      console.log('\n⚠️  Press Ctrl+C to stop both server and tunnel\n');
    }
  });
  
  tunnel.stderr.on('data', (data) => {
    process.stderr.write(data);
  });
  
  tunnel.on('close', (code) => {
    if (code !== 0 && !urlFound) {
      console.error(`\n❌ Tunnel process exited with code ${code}`);
    }
  });
};

// Handle cleanup
const cleanup = () => {
  console.log('\n\n🛑 Stopping server and tunnel...');
  if (tunnel) tunnel.kill();
  if (devServer) devServer.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Start everything
startDevServer();
setTimeout(() => startTunnel(), 3000);

