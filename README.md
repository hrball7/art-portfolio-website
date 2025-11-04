# Art Portfolio Website

A modern, responsive art portfolio website for Helaina-Rose Ball, built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Bold, minimalist aesthetic using black, white, and blue color scheme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Gallery Pages**: Individual galleries for oil paintings, watercolors, drawings, and digital art
- **Artist Information**: Comprehensive about page with artist statement and process
- **Contact Integration**: Contact page with Google Form integration
- **Navigation**: Clean, intuitive navigation with mobile menu

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── GalleryGrid.tsx # Gallery display component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── galleries/      # Gallery pages
│       ├── OilGallery.tsx
│       ├── WatercolorGallery.tsx
│       ├── DrawingGallery.tsx
│       └── DigitalGallery.tsx
├── App.tsx             # Main app component with routing
├── index.tsx           # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Adding Your Artwork

1. **Replace placeholder images:**
   - Add your artwork images to the `public/images/` directory
   - Update the `imageUrl` properties in each gallery component
   - Recommended image sizes: 800x800px minimum for square images

2. **Update artwork information:**
   - Edit the `artworks` arrays in each gallery component
   - Include title, year, medium, dimensions, and description
   - Add or remove artworks as needed

### Customizing Content

1. **Artist Information:**
   - Update the About page (`src/pages/About.tsx`) with your artist statement
   - Replace placeholder text with your actual bio and process

2. **Contact Information:**
   - Update contact details in `src/pages/Contact.tsx`
   - Replace the Google Form iframe with your actual form URL
   - Update email, social media, and location information

3. **Homepage:**
   - Replace hero image placeholder in `src/pages/Home.tsx`
   - Update featured work descriptions
   - Customize the artist preview section

### Styling Customization

The website uses Tailwind CSS with a custom color palette:

- **Primary Colors**: Black (#000000) and White (#ffffff)
- **Accent Color**: Art Blue (custom blue palette)
- **Typography**: Inter (sans-serif) and Playfair Display (serif)

To modify colors, update the `tailwind.config.js` file.

## Google Form Integration

To integrate your Google Form:

1. Create a form in Google Forms
2. Click "Send" and select the embed option
3. Copy the iframe src URL
4. Replace the placeholder URL in `src/pages/Contact.tsx`

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the setup prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:
- Lazy loading for images
- Optimized bundle size
- Responsive images
- Fast loading times

## License

© 2025 Helaina-Rose Ball. All rights reserved.

## Support

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).