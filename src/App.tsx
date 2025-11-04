import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtworkDetail from './pages/ArtworkDetail';
import OilGallery from './pages/galleries/OilGallery';
import WatercolorGallery from './pages/galleries/WatercolorGallery';
import DrawingGallery from './pages/galleries/DrawingGallery';
import DigitalGallery from './pages/galleries/DigitalGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/oil" element={<OilGallery />} />
            <Route path="/gallery/watercolor" element={<WatercolorGallery />} />
            <Route path="/gallery/drawing" element={<DrawingGallery />} />
            <Route path="/gallery/digital" element={<DigitalGallery />} />
            <Route path="/artwork/:gallery/:id" element={<ArtworkDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
