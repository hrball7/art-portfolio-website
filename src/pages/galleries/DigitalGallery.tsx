import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const DigitalGallery: React.FC = () => {
  // TODO: Replace with actual artwork data
  const artworks = [
    {
      id: '1',
      title: 'Chapel Hill Crosswords Graphic',
      year: 2024,
      medium: 'Digital Painting',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/graphic 3-01.png' // The old well
    },
    {
      id: '2',
      title: 'Little Shop of Horrors Graphic',
      year: 2024,
      medium: 'Digital Illustration',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/audrey22-01.png' // Little shop of horrors
    },
    {
      id: '3',
      title: 'Board of Trustees Graphic',
      year: 2025,
      medium: 'Digital Mixed Media',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/botgraphic2-01.png' // BOT hand/board game graphic
    },
    {
      id: '1',
      title: 'DOGE Graphic',
      year: 2025,
      medium: 'Digital Painting',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/doge2-01.png' //uncle same?
    },
    {
      id: '1',
      title: 'Plan B Distribution Graphic',
      year: 2025,
      medium: 'Digital Painting',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/planB2-01.png' // plan b graphic
    },
    {
      id: '1',
      title: 'UNC Basketball Graphic',
      year: 2025,
      medium: 'Digital Painting',
      dimensions: '2000 x 1333 pixels',
      description: 'Graphic for the Daily Tarheel Student Newspaper',
      imageUrl: '/Images/Digital/basketball6-01.png' // womens backcourt basketball graphic
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Digital Art"
      description="Graphic illustrations made using Adobe Illustrator and Adobe Photoshop"
      galleryPath="/gallery/digital"
      nextGalleryPath="/gallery/acrylic"
    />
  );
};

export default DigitalGallery;
