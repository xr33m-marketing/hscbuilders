# HSC Builders - Professional Landscaping & Building Services

A modern, responsive website for HSC Builders, showcasing professional landscaping, hardscaping, groundskeeping, and masonry services across Greater Glasgow and surrounding areas.

## 🌟 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Pages**: Detailed pages for each service offering
- **Area-Specific Pages**: Localized content for different service areas
- **Project Gallery**: Showcase of recent work with before/after comparisons
- **Contact Forms**: Multiple contact forms with Formspree integration
- **SEO Optimized**: Structured data and meta tags for search engines

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for build tooling
- **Formspree** for form handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xr33m/hscbuilders.git
cd hscbuilders
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main pages
│   ├── areas/          # Location-specific pages
│   └── services/       # Service-specific pages
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Key Components

- **HeroSection**: Dynamic hero with contact forms
- **ServicesPreview**: Interactive service showcase
- **ProjectCard**: Before/after project displays
- **TestimonialsSection**: Customer review carousel
- **MovingBorderButton**: Animated CTA buttons

## 📱 Pages

### Main Pages
- Home
- About
- Services
- Areas
- Gallery
- Reviews
- FAQ
- Contact

### Service Pages
- Landscaping
- Hardscaping
- Groundskeeping
- Masonry & Brickwork

### Area Pages
Each service has dedicated pages for:
- Jackton
- Bothwell
- Hamilton
- Newton Farm

## 🔧 Configuration

### Forms
Forms are configured to use Formspree (endpoint: `xvgqzbeo`). Update the form action URLs in components as needed.

### Images
All images are stored in the `public/` directory and referenced with absolute paths.

### Styling
The project uses a custom Tailwind configuration with:
- Custom color palette
- Typography scales
- Animation utilities

## 📈 SEO Features

- Structured data (JSON-LD) for local business
- Dynamic meta descriptions
- Optimized page titles
- Image alt tags
- Semantic HTML structure

## 🚀 Deployment

The site is configured for deployment on Netlify with:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects configured for SPA routing

## 📞 Contact Information

- **Phone**: 07490 738 974
- **Email**: hscbuildersglasgow@gmail.com
- **Address**: 10 Balmoral Gardens, Blantyre, South Lanarkshire. G72 9NP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by HSC Builders.

---

Built with ❤️ for HSC Builders - Professional Landscaping & Building Services in Glasgow