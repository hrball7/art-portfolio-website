import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const DrawingGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Sample Drawing 1',
      year: 2024,
      medium: 'Graphite on Paper',
      dimensions: '11" x 14"',
      description: 'Detailed study of form and texture.',
      imageUrl: '/images/drawing/girl.jpg' // TODO: Replace with actual image URL
    },
    {
      id: '2',
      title: 'Sample Drawing 2',
      year: 2024,
      medium: 'Charcoal on Paper',
      dimensions: '14" x 18"',
      description: 'Bold exploration of value and contrast.',
      imageUrl: '/images/drawing/plantCharcoal.jpg' // TODO: Replace with actual image URL
    },
    {
      id: '3',
      title: 'Sacre Coeur',
      year: 2023,
      medium: 'Ink on Paper',
      dimensions: '11" x 14"',
      description: 'Pen stippling study of Monte Marte in Paris, France.',
      imageUrl: '/images/drawing/sacre coeur.jpg'
    },
    {
      id: '4',
      title: 'Hungry',
      year: 2025,
      medium: 'Ink and Marker on Paper',
      dimensions: '5" x 7"',
      description: 'Ink and Marker drawing of my hands picking a part a pomegranate.',
      imageUrl: '/images/drawing/pomegranete.jpg'
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Drawings"
      description="Studies and commissions using an array of drawing materials including pen, graphite, and charcoal."
      galleryPath="/gallery/drawing"
      nextGalleryPath="/gallery/digital"
    />
  );
};

export default DrawingGallery;
