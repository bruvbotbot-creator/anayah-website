# Anayah's University Countdown Website

A heartfelt countdown website for Anayah Zafar featuring:
- Countdown to university departure (September 15, 2026)
- Special "Saturdays left with dad" counter
- UC system themed background
- Responsive design

## Free Hosting Options

### Option 1: Netlify (RECOMMENDED)
1. Create account at netlify.com
2. Drag and drop this entire folder to Netlify
3. Add custom domain `anayahzafar.com` in Site Settings → Domain management
4. Update DNS at current registrar to point to Netlify

### Option 2: GitHub Pages
1. Create GitHub repository
2. Upload files to repository  
3. Enable GitHub Pages in Settings
4. Add custom domain in repository settings
5. Create CNAME file with domain name

### Option 3: Vercel
1. Create account at vercel.com
2. Import from GitHub or upload files
3. Add custom domain in project settings
4. Update DNS settings

### Option 4: Firebase Hosting (Google)
1. Create Firebase project
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Run `firebase init hosting`
4. Deploy with `firebase deploy`
5. Add custom domain in Firebase console

## DNS Configuration
To point anayahzafar.com to your chosen hosting:

**For Netlify:**
- Add CNAME record: `www` → `[your-site].netlify.app`
- Add A record: `@` → `75.2.60.5`

**For GitHub Pages:**
- Add CNAME record: `www` → `[username].github.io`
- Add A records for `@` to GitHub's IPs

**For Vercel:**
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.19.61`

## Customization
- Target date is set to September 15, 2026 in `script.js`
- Colors and styling can be modified in `style.css`
- UC logos in background can be replaced with actual logo images

## Features
- Real-time countdown with seconds precision
- Saturday counter specifically for father-daughter time
- Mobile responsive design
- Subtle animations and visual effects
- Click the Saturday counter for a little surprise! 💙