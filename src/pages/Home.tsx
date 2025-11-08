import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-art-blue-50 to-art-blue-100 py-20 lg:py-32">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-display font-bold text-blue-600 mb-6 leading-tight">
                HELAINA-ROSE BALL
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary text-center">
                  About
                </Link>
                <Link to="/gallery/oil" className="btn-secondary text-center">
                  View Gallery
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-art-blue-200 to-art-blue-400 rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="/Images/oil/Still Alive.jpeg" 
                  alt="Helaina-Rose Ball - Artist Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of recent pieces across different mediums
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Oil Painting */}
            <Link to="/gallery/oil" className="group">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src="/Images/oil/Valencia.jpg" 
                  alt="Oil Paintings"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 group-hover:text-art-blue-600 transition-colors duration-300">
                Oil Paintings
              </h3>
            </Link>

            {/* Watercolor */}
            <Link to="/gallery/watercolor" className="group">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src="/Images/watercolor/Horses.jpg" 
                  alt="Watercolors"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 group-hover:text-art-blue-600 transition-colors duration-300">
                Watercolors
              </h3>
            </Link>

            {/* Drawing */}
            <Link to="/gallery/drawing" className="group">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src="/Images/drawing/girl.jpg" 
                  alt="Drawings"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 group-hover:text-art-blue-600 transition-colors duration-300">
                Drawings
              </h3>
            </Link>

            {/* Digital */}
            <Link to="/gallery/digital" className="group">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src="/Images/Digital/audrey22-01.png" 
                  alt="Digital Art"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 group-hover:text-art-blue-600 transition-colors duration-300">
                Digital Art
              </h3>
            </Link>

            {/* Acrylic */}
            <Link to="/gallery/acrylic" className="group">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex items-center justify-center h-full text-white text-lg font-medium">
                 <img 
                  src="/Images/acrylic/seville.jpg" 
                  alt="Digital Art"
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 group-hover:text-art-blue-600 transition-colors duration-300">
                Acrylic Paintings
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-art-blue-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">
                About the Artist
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Helaina-Rose Ball is a contemporary visual artist pursuing dual B.A.s in Studio Arts and
                Computer Science at the University of North Carolina at Chapel Hill.
              </p>
              <Link to="/about" className="btn-primary">
                Read More
              </Link>
            </div>
            
            {/* Artist Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-art-blue-300 to-art-blue-500 rounded-lg shadow-2xl">
                {/* TODO: Replace with actual artist photo */}
                <div className="flex items-center justify-center h-full text-white text-xl font-medium">
                  <img 
                      src="/Images/P1070921.JPG" 
                      alt="Helaina-Rose Ball - Artist Portfolio"
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
