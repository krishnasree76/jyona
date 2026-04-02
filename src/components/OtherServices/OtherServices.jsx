import React from 'react';
import './OtherServices.css';

import imgCatering from '../../assets/catering.png';
import imgPhotography from '../../assets/photography.png';
import imgCake from '../../assets/cake.png';
import imgDj from '../../assets/dj.png';

const servicesData = [
  {
    title: 'Authentic Indian Catering',
    desc: 'Specializing in Godavari Vantakalu and traditional Telugu food to delight your guests with unforgettable flavours.',
    img: imgCatering
  },
  {
    title: 'Photography',
    desc: 'Capture every unforgettable moment of your special day with our professional photography services.',
    img: imgPhotography
  },
  {
    title: 'Cake',
    desc: 'Custom-designed, delicious cakes that serve as perfect centerpieces for your celebration.',
    img: imgCake
  },
  {
    title: 'DJ & Sounds',
    desc: 'Keep the party alive with top-tier DJ services and crystal-clear sound systems.',
    img: imgDj
  }
];

const equipmentData = [
  'Chair and Table Decorations with Centrepieces',
  'Stage Lights',
  'DJ Lights',
  'Smoke Effects',
  'Cold Pyro Sparks Effect',
  'LED Number Lights'
];

const OtherServices = () => {
  return (
    <section id="other-services" className="section bg-darker">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title">Other <span className="text-gold">Services</span></h2>
          <p className="section-subtitle">Beyond stunning decorations, we offer comprehensive event solutions and premium equipment rentals.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card card glass" key={index}>
              <div className="img-zoom-container service-img">
                <img src={service.img} alt={service.title} className="img-zoom" loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="equipment-section glass">
          <div className="equipment-header text-center">
            <h3>Equipment <span className="text-gold">Rentals</span></h3>
            <p>We rent high-quality equipment to elevate your event's atmosphere.</p>
          </div>
          <ul className="equipment-grid">
            {equipmentData.map((item, index) => (
              <li key={index} className="equipment-item">
                <span className="equipment-bullet">✦</span>
                <span className="equipment-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
