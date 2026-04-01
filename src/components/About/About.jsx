import React from 'react';
import './About.css';
import aboutImg from '../../assets/1.png';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image glass">
            <img src={aboutImg} alt="JYONA Decorations Setup" />
          </div>
          <div className="about-content">
            <h2 className="section-title">
              Crafting <span className="text-gold">Luxury</span> Experiences
            </h2>
            <p className="about-text">
              Welcome to JYONA Decorations, where we turn your vision of the perfect event into a breathtaking reality. Based in the heart of Winsford, Cheshire, we specialize in high-end, customized event styling that leaves a lasting impression.
            </p>
            <p className="about-text">
              Our passion lies in the meticulous details—the perfect floral arrangement, bespoke lighting, and premium decor elements seamlessly merging to create an unforgettable ambiance for your special day.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3 className="text-gold">500+</h3>
                <p>Events Styled</p>
              </div>
              <div className="stat">
                <h3 className="text-gold">100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
