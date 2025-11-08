import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const AcrylicGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Seville',
      year: 2023,
      medium: 'Acrylic on Canvas',
      Dimensions: '12" x 14"',
      description: 'A favorite place and memory of mine in Seville, Spain',
      imageUrl: '/Images/acrylic/seville.jpg' 
    },
    {
      id: '2',
      title: 'Let The Light In',
      year: 2024,
      medium: 'Acrylic on Canvas',
      dimensions: '5" x 7"',
      description: 'A gift for my partner, and one of my favorite recurring dreams',
      imageUrl: '/Images/acrylic/Octopus.jpg'
    },
    {
      id: '3',
      title: 'Phatso',
      year: 2024,
      medium: 'Acrylic on Wood',
      dimensions: '8" diameter',
      description: 'A pet commission of Jack Russel Terrier, Phatso',
      imageUrl: '/Images/acrylic/phatso.jpg' 
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Acrylic Paintings"
      description="A collection of my acrylic paintings done on canvas or wood."
      galleryPath="/gallery/acrylic"
      nextGalleryPath="/gallery/oil"
    />
  );
};

export default AcrylicGallery;

