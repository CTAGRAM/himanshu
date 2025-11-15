# Deployment Guide - Create Shareable Link

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account (you can use GitHub, GitLab, or email).

### Step 2: Deploy to Production
```bash
vercel --prod
```

This will:
- Create a production deployment
- Give you a shareable link (e.g., `https://your-project.vercel.app`)
- Automatically set up CI/CD for future deployments

### Step 3: Share the Link
Once deployed, Vercel will provide you with a URL like:
- `https://clips-agency-clone.vercel.app` (or similar)

## Option 2: Deploy via Vercel Web Interface (Easier)

### Step 1: Go to Vercel
1. Visit https://vercel.com
2. Sign in with your GitHub account

### Step 2: Import Project
1. Click "Add New" → "Project"
2. Select your GitHub repository: `CTAGRAM/clips-agency-clone`
3. Vercel will auto-detect it's a Next.js project

### Step 3: Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://clips-agency-clone.vercel.app`

### Step 4: Custom Domain (Optional)
- You can add a custom domain in the Vercel dashboard
- Settings → Domains → Add Domain

## Option 3: Quick Local Sharing (For Testing)

If you need a quick shareable link for testing without deploying:

### Using ngrok or similar:
```bash
# Install ngrok
npm install -g ngrok

# Start your local server
npm run dev

# In another terminal, create tunnel
ngrok http 3000
```

This will give you a temporary shareable link (e.g., `https://abc123.ngrok.io`)

## Important Notes

1. **Environment Variables**: If you have any API keys or secrets, add them in Vercel Dashboard → Settings → Environment Variables

2. **Build Settings**: Vercel auto-detects Next.js projects, but you can customize:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Automatic Deployments**: Once connected to GitHub, every push to `main` will automatically deploy

4. **Preview Deployments**: Pull requests will get preview deployments automatically

## Troubleshooting

- **Build Errors**: Check the build logs in Vercel dashboard
- **Image Issues**: Ensure remote image domains are allowed in `next.config.ts`
- **Custom Loader**: The `component-tagger-loader.js` might need adjustment for production

