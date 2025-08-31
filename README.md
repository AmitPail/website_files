Breefly.ai - AI Trading Companion Website

A sophisticated, single-page application for Breefly.ai - Your AI-powered trading companion that turns market chaos into clarity.
🌐 Live Site: https://breefly.ai

What is Breefly?
Breefly is your AI trading sidekick that reads the market for you, speaks human, and delivers hyper-personalized insights. Think ChatGPT meets your smartest investing friend - with just the right amount of wit.

Project Structure
breefly-website/
├── index.html          # Complete single-file application
├── CNAME              # Domain configuration for GitHub Pages
└── README.md          # This file
Key Features
🎨 Sophisticated Design

Glassmorphism UI with advanced blur effects
Dynamic particle system with floating animations
Interactive backgrounds that respond to mouse movement
Smooth loading sequences with progress indicators

⚡ Advanced Interactions

Platform demo tabs showcasing different views
Modal system for privacy, terms, and contact
Scroll-triggered animations with staggered effects
Responsive design optimized for all devices

🔧 Functionality

Waitlist integration with API endpoint
Contact form with email client integration
Trading evolution timeline showing user journey
Real testimonials from beta users

Architecture
This is a single-file application built with:

Vanilla HTML5 with semantic structure
Advanced CSS3 with custom properties and animations
Modern JavaScript with ES6+ features
Self-contained - no external dependencies

API Integration
Waitlist Endpoint
javascriptPOST https://waitlist.breefly.ai/api/join-waitlist
Content-Type: application/json

{
  "email": "user@example.com"
}
Contact Form
Uses mailto: links to open user's email client with pre-filled content.
Local Development

Clone the repository:
bashgit clone https://github.com/yourusername/breefly-website.git
cd breefly-website

Open locally:

Simply open index.html in your browser
Or use a local server: python -m http.server 8000


View at: http://localhost:8000

Deployment
Current Setup (GoDaddy)

Upload index.html to your web root directory
Ensure CNAME file points to breefly.ai
Site automatically available at https://breefly.ai

GitHub Pages (Alternative)
Already configured - just push to main branch and enable Pages.
Customization
Brand Colors
All colors are defined as CSS custom properties:
css:root {
  --primary: #5FBFB1;          /* Breefly teal */
  --primary-light: #7DD3C7;    /* Lighter teal */
  --primary-dark: #4A9B91;     /* Darker teal */
  /* Sophisticated grays for depth */
}
Content Updates

Hero section: Update title and subtitle
Features: Modify feature cards
Testimonials: Update confession cards with real user stories
Platform demo: Customize dashboard views

Animation Controls
Adjust particle density, animation speeds, and effects:
javascriptconst particleCount = 80;  // Reduce for better performance
const animationDuration = 20s;  // Speed up/slow down
Performance Considerations

Particle system is GPU-accelerated but may impact older devices
Loading screen ensures smooth initial experience
Efficient animations using transform and opacity
Responsive images and optimized assets

Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
⚠️ IE not supported (uses modern CSS features)

Contact & Support

Website: breefly.ai
Email: Amit@breefly.ai
Company: Breefly

License
This project is proprietary to Breefly. All rights reserved.

Built with ❤️ for traders who want to level up their game.
