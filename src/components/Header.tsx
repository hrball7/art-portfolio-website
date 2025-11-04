import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Oil', path: '/gallery/oil' },
    { name: 'Watercolor', path: '/gallery/watercolor' },
    { name: 'Drawing', path: '/gallery/drawing' },
    { name: 'Digital', path: '/gallery/digital' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-black group-hover:text-art-blue-600 transition-colors duration-300">
              Artist Portfolio
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-art-blue-600 border-b-2 border-art-blue-600'
                    : 'text-black hover:text-art-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-art-blue-600'
                      : 'text-black hover:text-art-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
