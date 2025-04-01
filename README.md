# Breefly.ai Landing Page

A modern, animated landing page for Breefly.ai - Your AI-powered trading companion.

## Project Structure

```
breefly-landing/
├── assets/
│   ├── images/
│   ├── icons/
├── css/
│   ├── reset.css
│   ├── styles.css
│   ├── animations.css
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── waitlist.js
├── index.html
├── .gitignore
└── README.md
```

## Features

- Responsive design for all device sizes
- Modern, minimalist UI with clean animations
- Interactive elements with hover effects
- Animated background elements
- Smooth scroll behavior
- Waitlist form integration
- Testimonial slider
- Demo tabs
- Loading screen
- Animations that happen on scroll

## Getting Started

### Prerequisites

- A modern web browser
- Code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/breefly-landing.git
   ```

2. Navigate to the project directory:
   ```
   cd breefly-landing
   ```

3. Open the index.html file in your browser or use a local server.

## Customization

### Colors

The color scheme can be easily customized by modifying the CSS variables in the `styles.css` file:

```css
:root {
  --primary: #5FBFB1;
  --primary-hover: #70D0C2;
  --primary-dark: #0F6F65;
  --background: #0F1621;
  /* Other variables... */
}
```

### Animations

Animation speeds and behaviors can be adjusted in the `animations.css` file.

### Content

Update the content in the `index.html` file to match your needs.

## Deployment

To deploy the website:

1. Update the API endpoint in `waitlist.js` to point to your production server.
2. Upload all files to your web hosting service.
3. Ensure your domain is properly configured to point to your hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inter font by Google Fonts
- Icons from [Feather Icons](https://feathericons.com/)