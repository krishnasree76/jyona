import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="JYONA Decorations & Events Logo" className="footer-logo-img" />
              <h2 className="footer-logo-text">
                <span className="text-gold">JYONA</span><br />Decorations & Events
              </h2>
            </div>
            <p className="footer-desc">
              Transforming your special moments into everlasting luxury memories. Based in Winsford, Cheshire.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Our Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><FacebookIcon /></a>
              <a href="#" className="social-icon"><InstagramIcon /></a>
              <a href="#" className="social-icon"><TwitterIcon /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JYONA Decorations & Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
