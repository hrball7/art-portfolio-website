import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (path: string) => location.pathname === path;
  const isGalleryActive = () => {
    return location.pathname.startsWith('/gallery/');
  };

  const galleries = [
    { name: 'Oil', path: '/gallery/oil' },
    { name: 'Watercolor', path: '/gallery/watercolor' },
    { name: 'Drawing', path: '/gallery/drawing' },
    { name: 'Digital', path: '/gallery/digital' },
    { name: 'Acrylic', path: '/gallery/acrylic' },
  ];

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle dropdown with 3 second delay
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsGalleryDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsGalleryDropdownOpen(false);
    }, 3000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-black group-hover:text-art-blue-600 transition-colors duration-300">
              Helaina's Portfolio
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'text-art-blue-600 border-b-2 border-art-blue-600'
                  : 'text-black hover:text-art-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-300 ${
                isActive('/about')
                  ? 'text-art-blue-600 border-b-2 border-art-blue-600'
                  : 'text-black hover:text-art-blue-600'
              }`}
            >
              About
            </Link>
            
            {/* Gallery Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`font-medium transition-colors duration-300 ${
                  isGalleryActive()
                    ? 'text-art-blue-600 border-b-2 border-art-blue-600'
                    : 'text-black hover:text-art-blue-600'
                }`}
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
              >
                Gallery
              </button>
              
              {isGalleryDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-black shadow-lg rounded-lg overflow-hidden z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {galleries.map((gallery) => (
                    <Link
                      key={gallery.name}
                      to={gallery.path}
                      className={`block px-4 py-3 font-medium transition-colors duration-300 ${
                        isActive(gallery.path)
                          ? 'bg-art-blue-50 text-art-blue-600'
                          : 'text-black hover:bg-art-blue-50 hover:text-art-blue-600'
                      }`}
                      onClick={() => setIsGalleryDropdownOpen(false)}
                    >
                      {gallery.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-art-blue-600 border-b-2 border-art-blue-600'
                  : 'text-black hover:text-art-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t-2 border-black bg-white">
            <nav className="py-4 space-y-4">
              <Link
                to="/"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/')
                    ? 'text-art-blue-600'
                    : 'text-black hover:text-art-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/about')
                    ? 'text-art-blue-600'
                    : 'text-black hover:text-art-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Gallery Section */}
              <div className="pt-2">
                <div className="font-medium text-black mb-2">Gallery</div>
                <div className="pl-4 space-y-2">
                  {galleries.map((gallery) => (
                    <Link
                      key={gallery.name}
                      to={gallery.path}
                      className={`block font-medium transition-colors duration-300 ${
                        isActive(gallery.path)
                          ? 'text-art-blue-600'
                          : 'text-gray-700 hover:text-art-blue-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {gallery.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/contact')
                    ? 'text-art-blue-600'
                    : 'text-black hover:text-art-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
