import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artist Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Helaina-Rose Ball</h3>
            <p className="text-gray-300 leading-relaxed">
              Artist specializing in oil paintings, acrylics, watercolors, drawings, and digital art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Galleries</h4>
            <ul className="space-y-2">
              <li>
                <a href="/gallery/oil" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Oil Paintings
                </a>
              </li>
              <li>
                <a href="/gallery/watercolor" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Watercolors
                </a>
              </li>
              <li>
                <a href="/gallery/drawing" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Drawings
                </a>
              </li>
              <li>
                <a href="/gallery/digital" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Digital Art
                </a>
              </li>
              <li>
                <a href="/gallery/acrylic" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Acrylic Paintings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Helaina-Rose Ball. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
