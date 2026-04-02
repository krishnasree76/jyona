import React from 'react';
import './About.css';
import aboutImg from '../../assets/stage-decorations.png';

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
              Welcome to Jyona Decorations and Events, where we bring your most special moments to life with elegance and creativity. Proudly based in Crewe, Cheshire, we specialize in bespoke decorations for weddings and birthdays that leave a lasting impression.
            </p>
            <p className="about-text">
              We understand how important these occasions are, and we believe every celebration deserves to feel magical—no matter the budget. That’s why we offer luxury-style décor at affordable prices, ensuring your event looks stunning without the stress.
            </p>
            <p className="about-text">
              From romantic wedding setups and dreamy floral arrangements to fun, vibrant birthday décor and eye-catching balloon displays, every detail is thoughtfully designed to match your vision. Our passion for personalization means we can customize everything to suit your theme, style, and preferences. If you can imagine it, we can create it.
            </p>
            <p className="about-text">
              At Jyona Decorations and Events, we don’t just decorate—we craft unforgettable memories that you and your loved ones will cherish forever.
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
