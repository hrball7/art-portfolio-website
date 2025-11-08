import React from 'react';
import { Link } from 'react-router-dom';

export interface ArtworkCardData {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  description?: string;
  imageUrl: string;
}

interface ArtworkCardProps {
  artwork: ArtworkCardData;
  galleryPath: string; // e.g. "/gallery/oil"
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, galleryPath }) => {
  const gallerySlug = galleryPath.split('/').filter(Boolean).pop() ?? 'gallery';

  return (
    <Link
      to={`/artwork/${encodeURIComponent(gallerySlug)}/${encodeURIComponent(artwork.id)}`}
      state={{ artwork, from: galleryPath }}
      className="group cursor-pointer block"
    >
      <div className="aspect-square rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />
        <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 items-center justify-center text-white text-lg font-medium">
          {artwork.title}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-black group-hover:text-art-blue-600 transition-colors duration-300">
          {artwork.title}
        </h3>
        <p className="text-gray-600">
          {artwork.year} • {artwork.medium}
        </p>
        {artwork.dimensions && (
          <p className="text-sm text-gray-500">{artwork.dimensions}</p>
        )}
      </div>
    </Link>
  );
};

export default ArtworkCard;


