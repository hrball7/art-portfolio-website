import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const WatercolorGallery: React.FC = () => {
  // TODO: Replace with actual artwork data
  const artworks = [
    {
      id: '1',
      title: 'Church',
      year: 2022,
      medium: 'Watercolor and Pen on Paper',
      dimensions: '9" x 12"',
      description: 'Commissioned Artwork of a church.',
      imageUrl: '/images/watercolor/Church.jpg' // church
    },
    {
      id: '2',
      title: 'Horses',
      year: 2023,
      medium: 'Watercolor and Pen on Paper',
      dimensions: '9" x 12"',
      description: 'Study of form and light featuring one of my favorite animals.',
      imageUrl: '/images/watercolor/Horses.jpg' // horses
    },
    {
      id: '3',
      title: 'Home',
      year: 2025,
      medium: 'Watercolor on Paper',
      dimensions: '11" x 14"',
      description: 'Commissioned piece for new home buyers.',
      imageUrl: '/images/watercolor/House.jpg' // house
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Watercolors"
      description="Fluid, transparent works capturing the ephemeral nature of light and color through watercolor techniques."
      galleryPath="/gallery/watercolor"
    />
  );
};

export default WatercolorGallery;
