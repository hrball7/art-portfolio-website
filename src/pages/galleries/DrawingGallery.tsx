import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const DrawingGallery: React.FC = () => {
  // TODO: Replace with actual artwork data
  const artworks = [
    {
      id: '1',
      title: 'Sample Drawing 1',
      year: 2024,
      medium: 'Graphite on Paper',
      dimensions: '11" x 14"',
      description: 'Detailed study of form and texture.',
      imageUrl: '/images/drawing-1.jpg' // TODO: Replace with actual image URL
    },
    {
      id: '2',
      title: 'Sample Drawing 2',
      year: 2024,
      medium: 'Charcoal on Paper',
      dimensions: '14" x 18"',
      description: 'Bold exploration of value and contrast.',
      imageUrl: '/images/drawing-2.jpg' // TODO: Replace with actual image URL
    },
    {
      id: '3',
      title: 'Sample Drawing 3',
      year: 2023,
      medium: 'Ink on Paper',
      dimensions: '8" x 10"',
      description: 'Intimate study of line and gesture.',
      imageUrl: '/images/drawing-3.jpg' // TODO: Replace with actual image URL
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Drawings"
      description="Intimate studies exploring line, value, and form through various drawing mediums including graphite, charcoal, and ink."
      galleryPath="/gallery/drawing"
    />
  );
};

export default DrawingGallery;
