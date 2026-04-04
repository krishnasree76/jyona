import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-bg"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <div className="hero-overlay"></div>

      {/* Decorative floating elements */}
      <motion.div
        className="floating-orb orb-1"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-orb orb-2"
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Transforming Moments <br />
          <span className="text-gold">into Memories</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Premium event decoration services in Crewe, Cheshire.
          Elevate your special occasions with our luxury designs.
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#events" className="btn-primary">View Events</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="scroll-icon" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
