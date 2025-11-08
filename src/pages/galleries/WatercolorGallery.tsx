import React from 'react';
import GalleryGrid from '../../components/GalleryGrid';

const WatercolorGallery: React.FC = () => {
  const artworks = [
    {
      id: '1',
      title: 'Church',
      year: 2022,
      medium: 'Watercolor and Pen on Paper',
      dimensions: '9" x 12"',
      description: 'Commissioned Artwork of a church.',
      imageUrl: '/images/watercolor/Church.jpg'
    },
    {
      id: '2',
      title: 'Horses',
      year: 2023,
      medium: 'Watercolor and Pen on Paper',
      dimensions: '9" x 12"',
      description: 'Study of form and light featuring one of my favorite animals.',
      imageUrl: '/images/watercolor/Horses.jpg' 
    },
    {
      id: '3',
      title: 'Home',
      year: 2025,
      medium: 'Watercolor and Pen on Paper',
      dimensions: '11" x 14"',
      description: 'Commissioned piece for new home buyers.',
      imageUrl: '/images/watercolor/House.jpg' 
    },
    {
      id: '4',
      title: 'Brigit',
      year: 2024,
      medium: 'Watercolor on Paper',
      dimensions: '11" x 14"',
      description: 'Portrait of my bestfriend',
      imageUrl: '/images/watercolor/brigit.jpg' 
    },
    {
      id: '5',
      title: 'Orange Coneflowers and Common Blue',
      year: 2022,
      medium: 'Watercolor on Paper',
      dimensions: '5" x 7"',
      description: "Part of a series of flower and butterfly works for the Women's Center in Raleigh",
      imageUrl: '/images/watercolor/flower1.jpg' 
    },
        {
      id: '6',
      title: 'Cornflower and Eastern Tiger Swallowtail',
      year: 2022,
      medium: 'Watercolor on Paper',
      dimensions: '5" x 7"',
      description: "Part of a series of flower and butterfly works for the Women's Center in Raleigh",
      imageUrl: '/images/watercolor/flower11.jpg' 
    },
        {
      id: '7',
      title: 'Common Blue and Cosmos',
      year: 2022,
      medium: 'Watercolor on Paper',
      dimensions: '11" x 14"',
      description: "Part of a series of flower and butterfly works for the Women's Center in Raleigh",
      imageUrl: '/images/watercolor/flower3.jpg' 
    },
        {
      id: '8',
      title: "Black Swallowtail and Bee's Flame",
      year: 2022,
      medium: 'Watercolor on Paper',
      dimensions: '5" x 7"',
      description: "Part of a series of flower and butterfly works for the Women's Center in Raleigh",
      imageUrl: '/images/watercolor/flower4.jpg' 
    },
        {
      id: '9',
      title: 'Allium and Monarch',
      year: 2022,
      medium: 'Watercolor on Paper',
      dimensions: '5" x 7"',
      description: "Part of a series of flower and butterfly works for the Women's Center in Raleigh",
      imageUrl: '/images/watercolor/flower5.jpg' 
    }
  ];

  return (
    <GalleryGrid
      artworks={artworks}
      title="Watercolors"
      description="Watercolor works on cold press paper with pen. My most popular commissioned work."
      galleryPath="/gallery/watercolor"
      nextGalleryPath="/gallery/drawing"
    />
  );
};

export default WatercolorGallery;
