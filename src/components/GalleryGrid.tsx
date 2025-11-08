import React from 'react';
import { Link } from 'react-router-dom';
import ArtworkCard, { ArtworkCardData } from './ArtworkCard';

interface Artwork extends ArtworkCardData {}

interface GalleryGridProps {
  artworks: Artwork[];
  title: string;
  description: string;
  galleryPath: string; 
  nextGalleryPath?: string; 
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ artworks, title, description, galleryPath, nextGalleryPath }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-art-blue-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {description}
            </p>
            {nextGalleryPath && (
              <Link
                to={nextGalleryPath}
                className="inline-flex items-center gap-2 text-sm font-medium text-art-blue-600 hover:text-art-blue-700 transition-colors duration-300 border-b border-art-blue-600 hover:border-art-blue-700 pb-1"
              >
                More Works →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-max section-padding">
          {artworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} galleryPath={galleryPath} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-art-blue-200 to-art-blue-400 rounded-lg shadow-lg mb-6">
                  <div className="flex items-center justify-center h-full text-white text-lg font-medium">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  New Works Coming Soon
                </h3>
                <p className="text-gray-600">
                  I'm currently working on new pieces for this collection. 
                  Check back soon or contact me for updates.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryGrid;
