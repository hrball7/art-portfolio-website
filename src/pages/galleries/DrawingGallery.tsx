import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const DrawingGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Little Girl',
      year: 2024,
      medium: 'Graphite on Paper',
      dimensions: '11" x 14"',
      description: 'Commissioned portrait of a spunky, young girl',
      imageUrl: '/images/drawing/girl.jpg' 
    },
    {
      id: '2',
      title: 'Plant',
      year: 2024,
      medium: 'Charcoal on Paper',
      dimensions: '14" x 18"',
      description: 'Quick contour study of organic forms',
      imageUrl: '/images/drawing/plantCharcoal.jpg' 
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
      description: 'Ink and Marker drawing of my hands picking apart a pomegranate.',
      imageUrl: '/images/drawing/pomegranete.jpg'
    },
    {
      id: '5',
      title: 'Chandeliers',
      year: 2023,
      medium: 'Color Pencil on Paper',
      dimensions: '8" x 10"',
      description: 'Colored pencil study of light and form, depicting a dream I had',
      imageUrl: '/images/drawing/octopuslights.jpg'
    },
    {
      id: '6',
      title: 'Christmas Time',
      year: 2022,
      medium: 'Graphite on Paper',
      dimensions: '5" x 7"',
      description: 'Drawing study of different textures, shadows, and flesh',
      imageUrl: '/images/drawing/hand.jpg'
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
