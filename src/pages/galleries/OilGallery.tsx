import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const OilGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Still Life',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '18 x 24',
      description: 'My first still life featuring a deconstructed roller skate, head statue, flowers, an onion, a conch shell, glass bottles, and a brass object on cloth.',
      imageUrl: '/Images/oil/Still Alive.jpeg'
    },
    {
      id: '2',
      title: 'Ive Got Rhythm',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '18 x 24',
      description: 'An intimate study of light and shadow.',
      imageUrl: '/Images/oil/piano.jpeg'
    },
    {
      id: '3',
      title: 'Foot Supported by Boy',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '8 x 10',
      description: 'An experimental study of texture, flesh, and intamicy',
      imageUrl: '/Images/oil/Foot Supported by Boy.jpeg'
    },
    {
      id: '4',
      title: 'Best Friends',
      year: 2025,
      medium: 'Oil on Canvas',
      dimennsions: '18 x 24',
      description: 'A piece I made for my little sister featuring her younger self and our dear dog Mel.',
      imageUrl: '/Images/oil/bestFriends.jpg'
    },
    {
      id: '5',
      title: 'Sunday Night',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '8 x 10',
      description: 'Painting of my partner and beloved cat on a quiet sunday night in Wilmington, NC',
      imageUrl: '/Images/oil/Sunday night.jpg'
    }
    ,
    {
      id: '6',
      title: 'Valencia',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '12 x 12',
      description: 'A painting for a friend depicting a memory of her time studying abroad in Spain',
      imageUrl: '/Images/oil/Valencia.jpg'
    },
     {
      id: '7',
      title: 'Pug with a Human Nose',
      year: 2023,
      medium: 'Oil on Canvas',
      dimensions: '8 x 10',
      description: 'A satirical piece I did for a friend, and my first time using oil paint.',
      imageUrl: '/Images/oil/Pug.jpg'
    },
    {
      id: '8',
      title: 'Onion and His Ladies',
      year: 2024,
      medium: 'Oil on Canvas',
      dimensions: '12 x 12',
      description: 'A pet commission of the wonderful rooster, Onion, and his ladies.',
      imageUrl: '/Images/oil/chickens.jpg'
    },
    {
      id: '9',
      title: 'Sunset',
      year: 2024,
      medium: 'Oil on Canvas',
      dimensions: '12 x 12',
      description: 'Sunset tribute to my childhood dog, Mel',
      imageUrl: '/Images/oil/sunset.jpg'
    },
    {
      id: '10',
      title: 'A Self Portrait',
      year: 2025,
      medium: 'Oil on Canvas',
      dimensions: '18 x 24',
      description: 'Self Portrait inspired by Alice in Wonderland',
      imageUrl: '/Images/oil/self portrait.JPG'
    }

  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Oil Paintings"
      description="Collection of my favorite oil paintings I have done. Consisting of studies, gifts, and commissions."
      galleryPath="/gallery/oil"
      nextGalleryPath="/gallery/watercolor"
    />
  );
};

export default OilGallery;
