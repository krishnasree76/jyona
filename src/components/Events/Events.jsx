import React from 'react';
import CircularEvents from '../ui/CircularEvents';
import './Events.css';

// Import images
import imgBirthday from '../../assets/birthday-decorations.png';
import imgTheme from '../../assets/theme-decorations.png';
import imgWedding from '../../assets/wedding-decorations.png';
import imgBusiness from '../../assets/business-opening.png';
import imgBabyShower from '../../assets/baby-shower.png';
import imgGenderReveal from '../../assets/gender-reveal.png';
import imgGraduation from '../../assets/graduation-party.png';
import imgStage from '../../assets/stage-decorations.png';
import imgEngagement from '../../assets/engagement-decorations.png';
import imgHaldi from '../../assets/haldi-decorations.png';
import imgHousewarming from '../../assets/housewarming.png';

const eventsData = [
  {
    name: 'Birthday Decorations',
    designation: 'Bespoke Design',
    description: 'Transform your birthday into an extraordinary celebration with our bespoke luxury decoration services, tailored to your exact taste.',
    src: imgBirthday,
  },
  {
    name: 'Theme Decorations',
    designation: 'Custom Setup',
    description: 'Bring your wildest imaginations to life with perfectly crafted themed environments that leave unforgettable lasting impressions.',
    src: imgTheme,
  },
  {
    name: 'Wedding Decorations',
    designation: 'Luxury Service',
    description: 'Experience the magic of an exquisitely styled luxury wedding, complete with dramatic florals, golden accents, and elegant lighting.',
    src: imgWedding,
  },
  {
    name: 'Business Opening',
    designation: 'Corporate Styling',
    description: 'Make a grand entrance into the market with professional, high-end decoration setups designed to attract and impress your very first clients.',
    src: imgBusiness,
  },
  {
    name: 'Baby Shower',
    designation: 'Elegant Setup',
    description: 'Celebrate the upcoming arrival with soft, beautiful aesthetics, elegant drapery, and enchanting warm atmospheric lighting.',
    src: imgBabyShower,
  },
  {
    name: 'Gender Reveal',
    designation: 'Surprise Decor',
    description: 'Create the perfect backdrop for your big reveal moment with stunning colors and exquisite luxury detailing.',
    src: imgGenderReveal,
  },
  {
    name: 'Graduation Parties',
    designation: 'Milestone Events',
    description: 'Honor your incredible achievements surrounded by glamorous setups, beautiful balloon arches, and premium photo areas.',
    src: imgGraduation,
  },
  {
    name: 'Stage Decorations',
    designation: 'Grand Venues',
    description: 'Command the room with breathtaking stage designs featuring premium fabrics, brilliant lighting arrays, and lush floral pieces.',
    src: imgStage,
  },
  {
    name: 'Engagement',
    designation: 'Intimate Luxury',
    description: 'Set the perfect romantic tone for your lifelong commitment with intimate, glowing, and sophisticated decoration arrangements.',
    src: imgEngagement,
  },
  {
    name: 'Haldi Decorations',
    designation: 'Traditional Fusion',
    description: 'Embrace beautiful traditions enveloped in modern luxury, featuring vibrant hues perfectly balanced with golden elegant accents.',
    src: imgHaldi,
  },
  {
    name: 'House Warming',
    designation: 'Festive Welcome',
    description: 'Welcome family and friends to your new luxury home with warm, inviting, and spectacularly detailed event styling.',
    src: imgHousewarming,
  },
];

const Events = () => {
  return (
    <section id="events" className="section events">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Our <span className="text-gold">Events</span></h2>
          <p className="section-subtitle">Discover our comprehensive range of luxury event styling services tailored for your unique celebrations.</p>
        </div>
        
        {/* Integrating the requested Circular Carousel here */}
        <CircularEvents events={eventsData} autoplay={true} />
        
      </div>
    </section>
  );
};

export default Events;
