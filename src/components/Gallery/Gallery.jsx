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
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';
import img14 from '../../assets/14.png';
import img15 from '../../assets/15.png';
import img16 from '../../assets/16.png';
import img17 from '../../assets/17.png';
import img18 from '../../assets/18.png';
import img19 from '../../assets/19.png';
import img20 from '../../assets/20.png';
import img21 from '../../assets/21.png';
import img22 from '../../assets/22.png';
import img23 from '../../assets/23.png';
import img24 from '../../assets/24.png';
import img25 from '../../assets/25.png';
import img26 from '../../assets/26.png';
import img27 from '../../assets/27.png';

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

  { id: 10, src: img10, title: 'Luxury Event Design' },
  { id: 11, src: img11, title: 'Floral Decoration Setup' },
  { id: 12, src: img12, title: 'Premium Lighting Effects' },
  { id: 13, src: img13, title: 'Wedding Stage Decor' },
  { id: 14, src: img14, title: 'Elegant Table Styling' },
  { id: 15, src: img15, title: 'Custom Theme Decoration' },
  { id: 16, src: img16, title: 'Grand Entrance Setup' },
  { id: 17, src: img17, title: 'Royal Backdrop Design' },
  { id: 18, src: img18, title: 'Luxury Indoor Setup' },

  { id: 19, src: img19, title: 'Event Ambience Design' },
  { id: 20, src: img20, title: 'Premium Decor Elements' },
  { id: 21, src: img21, title: 'Modern Event Styling' },
  { id: 22, src: img22, title: 'Floral Stage Backdrop' },
  { id: 23, src: img23, title: 'Elegant Lighting Setup' },
  { id: 24, src: img24, title: 'Luxury Seating Arrangement' },
  { id: 25, src: img25, title: 'Classic Theme Decor' },
  { id: 26, src: img26, title: 'Premium Celebration Setup' },
  { id: 27, src: img27, title: 'Grand Event Experience' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">

        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">
            Event <span className="text-gold">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Swipe through a glimpse of our most magical luxury setups and exquisite designs.
          </p>
        </div>

        {/* Carousel */}
        <ThumbnailCarousel items={galleryData} />

        <div className="gallery-action text-center" style={{ marginTop: '4rem' }}>
          <a href="#contact" className="btn-outline">Start Your Project</a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;