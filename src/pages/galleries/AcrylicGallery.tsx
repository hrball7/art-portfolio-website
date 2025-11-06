import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const AcrylicGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Seville',
      year: 2023,
      medium: 'Acrylic on Canvas',
      Dimensions: '12 x 14',
      description: 'A vibrant exploration of color and texture.',
      imageUrl: '/Images/acrylic/seville.jpg' 
    },
    {
      id: '2',
      title: 'Let The Light In',
      year: 2024,
      medium: 'Acrylic on Canvas',
      Dimensions: '5 x 7',
      description: 'An intimate study of light and shadow.',
      imageUrl: '/Images/acrylic/Octopus.jpg' // TODO: Replace with actual image URL
    },
    {
      id: '3',
      title: 'Phatso',
      year: 2023,
      medium: 'Acrylic on Canvas',
      description: 'A large-scale exploration of form and movement.',
      imageUrl: '/Images/acrylic/placeholder.jpg' // TODO: Replace with actual image URL
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Acrylic Paintings"
      description="Bold, vibrant works exploring color relationships and texture through acrylic painting techniques."
      galleryPath="/gallery/acrylic"
      nextGalleryPath="/gallery/oil"
    />
  );
};

export default AcrylicGallery;

