import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In <span className="text-gold">Touch</span></h2>
          <p className="section-subtitle">Let's discuss how we can make your next event truly unforgettable.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p className="contact-desc">Reach out to us directly or view our location down below.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>07587748000</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:jyonadecorations@gmail.com">jyonadecorations@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <h4>Website</h4>
                  <a href="http://www.jyonadecorations.com" target="_blank" rel="noopener noreferrer">www.jyonadecorations.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>McLaren Street, Crewe, CW1 3SP<br />Winsford, Cheshire</p>
                  <a href="https://share.google/7UxXxp6J6HUk9sWop" className="text-gold" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form glass">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="input-gold" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="input-gold" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="input-gold textarea" placeholder="Tell us about your event..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
