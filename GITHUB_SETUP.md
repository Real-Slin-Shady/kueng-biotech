# GitHub Setup Instructions

## 📦 What You Have

A complete, modern redesign of the Küng Biotech & Umwelt website with:
- ✅ 8 fully functional HTML pages
- ✅ Professional CSS styling with responsive design
- ✅ Interactive JavaScript functionality
- ✅ Mobile-friendly navigation
- ✅ All original content preserved and reorganized
- ✅ Comprehensive README documentation
- ✅ Ready-to-deploy structure

## 🚀 Quick Setup on GitHub

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create a new repository on GitHub.com:**
   - Go to https://github.com/new
   - Repository name: `kueng-biotech`
   - Description: "Modern redesign of Küng Biotech & Umwelt website"
   - Make it **Public** (required for GitHub Pages)
   - Click "Create repository"

2. **Upload files:**
   - Click "uploading an existing file" link
   - Drag and drop all files from the `kueng-biotech` folder
   - Alternatively, use GitHub Desktop or command line

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click Save
   - Your site will be available at: `https://yourusername.github.io/kueng-biotech`

### Option 2: Using Command Line

1. **Create empty repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `kueng-biotech`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push local repository:**
   ```bash
   cd /path/to/kueng-biotech
   git init
   git add .
   git commit -m "Initial commit: Modern redesign of Küng Biotech & Umwelt website"
   git branch -M main
   git remote add origin https://github.com/yourusername/kueng-biotech.git
   git push -u origin main
   ```
   (Replace `yourusername` with your actual GitHub username)

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click Save

### Option 3: Using GitHub Desktop

1. Create repository on GitHub.com (see Option 1, step 1)
2. Open GitHub Desktop
3. File → Clone Repository → Select your new `kueng-biotech` repo
4. Copy all files from local `kueng-biotech` folder into the cloned folder
5. Commit changes with message "Initial commit: Modern redesign"
6. Click "Publish repository"
7. Enable GitHub Pages (see Option 1, step 3)

## ✅ Verification Checklist

After setup, verify the following pages load correctly:

- [ ] Homepage: `yourusername.github.io/kueng-biotech/`
- [ ] About Us: `yourusername.github.io/kueng-biotech/pages/about.html`
- [ ] Services: `yourusername.github.io/kueng-biotech/pages/services.html`
- [ ] Projects: `yourusername.github.io/kueng-biotech/pages/projects.html`
- [ ] Clients: `yourusername.github.io/kueng-biotech/pages/clients.html`
- [ ] Publications: `yourusername.github.io/kueng-biotech/pages/publications.html`
- [ ] Contact: `yourusername.github.io/kueng-biotech/pages/contact.html`
- [ ] Impressum: `yourusername.github.io/kueng-biotech/pages/impressum.html`

## 🎨 Custom Domain (Optional)

To use a custom domain instead of github.io:

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., kueng-biotech.ch)
3. Click Save
4. Update DNS records with your domain provider:
   - Create A records pointing to GitHub's IP addresses
   - Or use CNAME record (if using subdomain)
   - See GitHub's documentation for current IPs

## 📝 Making Updates

After initial setup, to update the website:

```bash
# Make changes to files
# Then commit and push:
git add .
git commit -m "Update description"
git push
```

Changes will appear on your GitHub Pages site within 1-2 minutes.

## 🔍 Testing Locally Before Upload

To test the website before uploading to GitHub:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## ⚙️ File Structure

```
kueng-biotech/
├── index.html                 # Homepage
├── css/
│   └── style.css             # All styling
├── js/
│   └── main.js               # All interactivity
├── pages/                     # Subpages
│   ├── about.html
│   ├── services.html
│   ├── projects.html
│   ├── clients.html
│   ├── publications.html
│   ├── contact.html
│   └── impressum.html
├── images/                    # (empty - ready for images)
├── assets/                    # (empty - ready for assets)
├── README.md                  # Full documentation
├── GITHUB_SETUP.md           # This file
└── .gitignore                # Git configuration
```

## 💡 Tips

1. **No Configuration Needed:** Website works as-is, no build process required
2. **Edit Content:** Simply edit HTML files to update text content
3. **Add Images:** Create images subdirectory and reference in HTML
4. **Mobile Friendly:** Already fully responsive
5. **SEO:** All pages have meta descriptions and semantic HTML
6. **Speed:** No dependencies = fast loading

## 🆘 Troubleshooting

### Pages not loading
- Check GitHub Pages is enabled in Settings → Pages
- Verify branch is "main" (not "master")
- Wait 2-3 minutes for GitHub to rebuild site

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try different browser
- Check CSS file path in HTML (should be `css/style.css`)

### Links not working
- Verify file paths in navigation links
- Use relative paths for internal links
- Test locally first using `http://localhost:8000`

## 📞 Support

For questions about the website design or content, contact Küng Biotech & Umwelt:
- Email: info@kueng-biotech.ch
- Original website: https://www.kueng-biotech.ch

## 🎉 You're Done!

Your modern Küng Biotech & Umwelt website is ready to go live on GitHub Pages!

---

**Last Updated:** December 2025
