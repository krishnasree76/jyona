import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ThumbnailCarousel.css';

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 4;
const MARGIN_PX = 4;

function Thumbnails({ items, index, setIndex }) {
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="carousel-thumbnails-wrapper"
    >
      <div className="carousel-thumbnails-flex">
        {items.map((item, i) => (
          <motion.button
            key={item.id || i}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
                opacity: 1,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
                opacity: 0.6,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`thumbnail-button ${i === index ? 'active' : ''}`}
          >
            <img
              src={item.src}
              alt={item.title || `Gallery image ${i + 1}`}
              className="thumbnail-img"
              draggable={false}
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  if (!items || items.length === 0) return null;

  return (
    <div className="carousel-main-wrapper text-center">
      <div className="carousel-flex-column">
        {/* Main Carousel */}
        <div className="carousel-screen" ref={containerRef}>
          <motion.div
            className="carousel-slider"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item, i) => (
              <div key={item.id || i} className="carousel-slide-item">
                <img
                  src={item.src}
                  alt={item.title || `Gallery slider image ${i + 1}`}
                  className="carousel-slide-img"
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`carousel-nav-btn prev ${index === 0 ? 'disabled' : ''}`}
            aria-label="Previous image"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`carousel-nav-btn next ${index === items.length - 1 ? 'disabled' : ''}`}
            aria-label="Next image"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Image Counter */}
          <div className="carousel-counter">
            {index + 1} / {items.length}
          </div>
        </div>

        <Thumbnails items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
