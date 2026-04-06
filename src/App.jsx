import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Events from './components/Events/Events';
import OtherServices from './components/OtherServices/OtherServices';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <OtherServices />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
