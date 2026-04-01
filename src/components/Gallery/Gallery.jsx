import React from 'react';
import ThumbnailCarousel from '../ui/ThumbnailCarousel';
import './Gallery.css';

// Import images
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';

const galleryData = [
  { id: 1, src: img1, title: 'Luxury Venue Setup' },
  { id: 2, src: img2, title: 'Elegant Floral Arch' },
  { id: 3, src: img3, title: 'Bespoke Lighting Arrangement' },
  { id: 4, src: img4, title: 'Premium Table Centerpieces' },
  { id: 5, src: img5, title: 'Intimate Ceremony Decor' },
  { id: 6, src: img6, title: 'Grand Stage Detailing' },
  { id: 7, src: img7, title: 'Golden Aesthetic Layout' },
  { id: 8, src: img8, title: 'Atmospheric Event Space' },
  { id: 9, src: img9, title: 'Exquisite Drapery Elements' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Event <span className="text-gold">Gallery</span></h2>
          <p className="section-subtitle">Swipe through a glimpse of our most magical luxury setups and exquisite designs.</p>
        </div>

        {/* New Animated Thumbnail Carousel */}
        <ThumbnailCarousel items={galleryData} />
        
        <div className="gallery-action text-center" style={{ marginTop: '4rem' }}>
          <a href="#contact" className="btn-outline">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
