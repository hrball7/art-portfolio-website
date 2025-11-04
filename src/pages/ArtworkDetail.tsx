import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';

interface ArtworkState {
  artwork?: {
    id: string;
    title: string;
    year: number;
    medium: string;
    dimensions?: string;
    description?: string;
    imageUrl: string;
  };
  from?: string; // galleryPath like "/gallery/oil"
}

const ArtworkDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ gallery: string; id: string }>();

  const state = (location.state || {}) as ArtworkState;
  const artwork = state.artwork;
  const fromPath = state.from || (params.gallery ? `/gallery/${params.gallery}` : '/');

  // Guard: if no state/artwork, redirect back to gallery
  useEffect(() => {
    if (!artwork) {
      navigate(fromPath, { replace: true });
    }
  }, [artwork, fromPath, navigate]);

  if (!artwork) {
    return null;
  }

  return (
    <div className="bg-white">
      <section className="section-padding py-10">
        <div className="container-max">
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="btn-secondary"
            >
              Return to Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="w-full overflow-auto">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
                {artwork.title}
              </h1>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Year:</span> {artwork.year}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Medium:</span> {artwork.medium}
              </p>
              {artwork.dimensions && (
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Dimensions:</span> {artwork.dimensions}
                </p>
              )}
              {artwork.description && (
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {artwork.description}
                </p>
              )}

              <div className="mt-8">
                <Link to={fromPath} className="btn-primary">
                  Return to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkDetail;


