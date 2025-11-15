#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

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

// Start cloudflared tunnel
const startTunnel = async () => {
  console.log('🔍 Checking if server is running...');
  
  const isRunning = await checkServer();
  if (!isRunning) {
    console.error('❌ Error: Server is not running on port 3000');
    console.error('   Please start your server first with: npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Server is running on port 3000');
  console.log('');
  console.log('🚀 Starting Cloudflare Tunnel...');
  console.log('📡 Creating shareable link...');
  console.log('');
  console.log('⏳ Please wait (this may take 10-15 seconds)...');
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  
  const cloudflared = spawn('cloudflared', ['tunnel', '--url', 'http://localhost:3000'], {
    stdio: ['inherit', 'pipe', 'pipe']
  });
  
  let urlFound = false;
  
  cloudflared.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(output);
    
    // Extract URL from output
    const urlMatch = output.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
    if (urlMatch && !urlFound) {
      urlFound = true;
      const url = urlMatch[0];
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('🎉 SUCCESS! Your shareable link is ready:');
      console.log('');
      console.log(`   ${url}`);
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('📋 Instructions:');
      console.log('   • Copy the URL above');
      console.log('   • Share it with anyone');
      console.log('   • They can access your site immediately');
      console.log('');
      console.log('⚠️  Important:');
      console.log('   • Keep this terminal open (closing it will stop the tunnel)');
      console.log('   • Keep your server running (npm run dev)');
      console.log('   • Press Ctrl+C to stop the tunnel');
      console.log('');
    }
  });
  
  cloudflared.stderr.on('data', (data) => {
    process.stderr.write(data);
  });
  
  cloudflared.on('close', (code) => {
    if (code !== 0) {
      console.error(`\n❌ Tunnel process exited with code ${code}`);
    }
    process.exit(code);
  });
  
  // Handle Ctrl+C
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Stopping tunnel...');
    cloudflared.kill();
    process.exit(0);
  });
};

startTunnel();

