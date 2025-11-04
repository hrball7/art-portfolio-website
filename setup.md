# Quick Setup Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Start Development Server
```bash
npm start
```

## 3. Customize Your Content

### Replace Placeholder Images
- Add your artwork images to `public/images/` directory
- Update image URLs in gallery components:
  - `src/pages/galleries/OilGallery.tsx`
  - `src/pages/galleries/WatercolorGallery.tsx`
  - `src/pages/galleries/DrawingGallery.tsx`
  - `src/pages/galleries/DigitalGallery.tsx`

### Update Contact Information
- Edit `src/pages/Contact.tsx`:
  - Replace Google Form iframe URL
  - Update email, social media, and location
  - Customize FAQ section

### Customize About Page
- Edit `src/pages/About.tsx`:
  - Replace artist statement with your own
  - Update process description
  - Add your photo

### Update Homepage
- Edit `src/pages/Home.tsx`:
  - Replace hero image
  - Update featured work descriptions
  - Customize artist preview

## 4. Build for Production
```bash
npm run build
```

## 5. Deploy
- Upload `build` folder contents to your web hosting service
- Or use services like Netlify, Vercel, or GitHub Pages

## Image Recommendations
- **Format**: JPG or PNG
- **Size**: 800x800px minimum for square images
- **Quality**: High resolution for best display
- **Naming**: Use descriptive names (e.g., `oil-painting-1.jpg`)
