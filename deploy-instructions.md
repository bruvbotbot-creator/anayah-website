# Quick Deploy Guide for Anayah's Website

## Fastest Option: Netlify (5 minutes setup)

### Step 1: Prepare Files
✅ All files ready in `anayah-website/` folder:
- `index.html`
- `style.css` 
- `script.js`
- `README.md`

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Deploy manually"
3. Drag the entire `anayah-website` folder onto the deployment area
4. Site will be live at `https://[random-name].netlify.app`

### Step 3: Add Custom Domain
1. In Netlify dashboard, go to Site Settings → Domain management
2. Click "Add custom domain"
3. Enter `anayahzafar.com`
4. Follow DNS instructions to update domain settings

### Step 4: Update Squarespace DNS
Since the domain is currently on Squarespace, you'll need to:
1. Log into Squarespace account
2. Go to Settings → Domains → anayahzafar.com
3. Point DNS to Netlify:
   - A record: `@` → `75.2.60.5`
   - CNAME: `www` → `[your-site].netlify.app`

## Alternative: Quick GitHub Pages
If you prefer GitHub:
1. Create new repository at github.com
2. Upload all files to the repository
3. Go to Settings → Pages
4. Enable Pages from main branch
5. Add custom domain in Pages settings

## Cost Breakdown
- **Netlify Free**: ✅ $0/month (perfect for this site)
- **GitHub Pages**: ✅ $0/month 
- **Vercel Free**: ✅ $0/month
- **Current Squarespace**: ❌ $12-18/month (overkill)

## What You Get
- **Fast loading** (CDN)
- **HTTPS included** (security)
- **99.9% uptime** (reliability)
- **Easy updates** (just upload new files)
- **No monthly fees** 

The countdown will start immediately and update every second!

## Next Steps After Deploy
1. Test the countdowns are working
2. Check mobile responsiveness  
3. Maybe add some actual UC logo images instead of text
4. Consider adding a photo gallery or personal message section

**Total setup time: 5-10 minutes**
**Monthly cost: £0** 

Much better than paying Squarespace for a simple countdown page! 🤙