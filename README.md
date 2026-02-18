# Küng Biotech & Umwelt - Modern Website Redesign

A modern, clean, and professional redesign of the Küng Biotech & Umwelt website, built with HTML5, CSS3, and vanilla JavaScript.

## 🌿 About This Project

This is a contemporary redesign of the original Küng Biotech & Umwelt website (https://www.kueng-biotech.ch), featuring improved design, better user experience, and enhanced usability while preserving all original content.

**Key Improvements:**
- ✨ Modern, professional design
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast loading times
- ♿ Improved accessibility
- 🎨 Clean typography and visual hierarchy
- 🎯 Better information organization
- 🔧 Easy to maintain and update

## 📋 Project Structure

```
kueng-biotech/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet with all styling
├── js/
│   └── main.js            # JavaScript for interactivity
├── pages/
│   ├── about.html         # About Us & Company History
│   ├── services.html      # Services Overview
│   ├── projects.html      # Projects & Case Studies
│   ├── clients.html       # Client List
│   ├── publications.html  # Research Publications
│   ├── contact.html       # Contact Form & Information
│   └── impressum.html     # Legal Notice
└── README.md              # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Green:** `#2d8659` - Main brand color
- **Light Green:** `#4a9d6f` - Accent color
- **Dark Green:** `#1e5d3a` - Dark variant
- **Neutral Dark:** `#1a1a1a` - Text color
- **White/Light:** `#f5f5f5` - Background colors

### Typography
- **Headings:** Poppins (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Font sizes:** Responsive scaling from mobile to desktop

### Responsive Breakpoints
- Desktop: > 1200px
- Tablet: 768px - 1200px
- Mobile: < 768px
- Small Mobile: < 480px

## 📄 Pages

### Homepage (`index.html`)
- Hero section with call-to-action
- Services overview cards
- Company profile section
- Newsletter subscription area

### About Us (`pages/about.html`)
- Company history and mission
- Leadership information
- Expertise areas
- Partnership details

### Services (`pages/services.html`)
- Comprehensive service listings
- Service details and benefits
- Working methodology
- Call-to-action section

### Projects (`pages/projects.html`)
- Current and recent projects
- Project categories
- Portfolio summary
- Case studies

### Clients (`pages/clients.html`)
- Federal institution clients
- Cantonal clients
- University partners
- Industry partners
- Research institutions

### Publications (`pages/publications.html`)
- Expert reports
- Research publications
- Technical documentation
- Access information

### Contact (`pages/contact.html`)
- Contact information
- Contact form
- Service quick links
- Response time expectations

### Impressum (`pages/impressum.html`)
- Legal notice
- Company information
- Disclaimer
- Data protection and privacy
- Technical information

## 🚀 Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kueng-biotech.git
   cd kueng-biotech
   ```

2. Open in a web server (recommended for best results):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment
1. Push to GitHub repository named `kueng-biotech`
2. Go to repository Settings → Pages
3. Select `main` branch and `/root` folder
4. Visit `https://yourusername.github.io/kueng-biotech`

## 🛠️ Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Modern styling with CSS custom properties (variables)
- **JavaScript (ES6+):** Vanilla JS for interactivity
- **Google Fonts:** Professional typography
- **Responsive Design:** Mobile-first approach
- **No Dependencies:** Pure HTML/CSS/JS - no frameworks required

## 🎯 Features

### Navigation
- Sticky top navigation bar
- Active page highlighting
- Mobile hamburger menu
- Smooth scrolling

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Form validation
- Mobile menu toggle

### Performance
- Minimal CSS (single stylesheet)
- No external JS dependencies
- Optimized images
- Fast page loads

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy
- Color contrast compliance
- Responsive text sizing

## 📱 Mobile Responsiveness

The website is fully responsive across all device sizes:
- Desktop browsers
- Tablets (iPad, etc.)
- Mobile phones
- Small screens (< 480px)

Navigation menu automatically converts to hamburger on mobile devices.

## 🎨 Customization

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-green: #2d8659;
    --light-green: #4a9d6f;
    /* ... other colors ... */
}
```

### Modifying Content
Edit HTML files in the root and `pages/` directory. Update:
- Text content
- Links
- Contact information
- Company details

### Adding New Pages
1. Create new `.html` file in `pages/` directory
2. Copy template structure from existing page
3. Update navigation menu in all pages
4. Add links to footer

## 🔒 Data Protection

- No user data is collected beyond form submissions
- Minimal tracking or analytics
- No third-party cookies
- GDPR-compliant data handling

## 📧 Contact Form

The contact form on the Contact page includes:
- Name (required)
- Email (required)
- Phone (optional)
- Organization (optional)
- Subject (required)
- Message (required)

Form validation is performed client-side before submission.

## 📝 Content Sources

All content has been carefully transcribed from the original website, including:
- Company information
- Service descriptions
- Project details
- Client listings
- Publication information
- Contact details

## 🔗 Links

- **Original Website:** https://www.kueng-biotech.ch
- **Email:** info@kueng-biotech.ch
- **Address:** Pappelweg 9a, CH-3084 Wabern, Switzerland

## 📄 License

This redesigned website maintains the same ownership and copyright as the original Küng Biotech & Umwelt website. All content is proprietary to Küng Biotech & Umwelt.

## 🤝 Contributing

For suggestions, improvements, or bug reports, please contact Küng Biotech & Umwelt directly at info@kueng-biotech.ch.

## 🌐 Deployment

This website is designed to be deployed on:
- GitHub Pages
- Traditional web hosting
- Any static file server

Simply copy the entire `kueng-biotech` folder to your hosting provider.

## ✅ Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📅 Last Updated

December 2025

---

Built with ❤️ for Küng Biotech & Umwelt
