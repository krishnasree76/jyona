import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Transforming Moments <br />
          <span className="text-gold">into Memories</span>
        </h1>
        <p className="hero-subtitle">
          Premium event decoration services in Winsford, Cheshire. 
          Elevate your special occasions with our luxury designs.
        </p>
        <div className="hero-buttons">
          <a href="#events" className="btn-primary">View Events</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
