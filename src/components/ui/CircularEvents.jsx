import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import './CircularEvents.css';

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const CircularEvents = ({
  events = [],
  autoplay = true,
  colors = {},
  fontSizes = {},
}) => {
  // Color & font config defaults styled to fit the dark gold theme
  const colorName = colors.name ?? "var(--primary-gold)";
  const colorDesignation = colors.designation ?? "var(--text-muted)";
  const colorDescription = colors.description ?? "var(--text-cream)";
  const colorArrowBg = colors.arrowBackground ?? "rgba(198, 161, 91, 0.1)";
  const colorArrowFg = colors.arrowForeground ?? "var(--primary-gold)";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "var(--primary-gold)";
  const colorArrowHoverFg = colors.arrowHoverForeground ?? "var(--bg-dark)";
  
  const fontSizeName = fontSizes.name ?? "2.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "1rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const eventsLength = useMemo(() => events.length, [events]);
  const activeEvent = useMemo(
    () => events[activeIndex],
    [activeIndex, events]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay && eventsLength > 0) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % eventsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, eventsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, eventsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % eventsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [eventsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + eventsLength) % eventsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [eventsLength]);

  // Compute transforms for each image
  function getImageStyle(index) {
    if (eventsLength === 0) return {};
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + eventsLength) % eventsLength === index;
    const isRight = (activeIndex + 1) % eventsLength === index;
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!activeEvent) return null;

  return (
    <div className="circular-container">
      <div className="circular-grid">
        {/* Images */}
        <div className="circular-image-container" ref={imageContainerRef}>
          {events.map((event, index) => (
            <img
              key={index}
              src={event.src}
              alt={event.name}
              className="circular-image"
              data-index={index}
              style={getImageStyle(index)}
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="circular-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="circular-name"
                style={{ color: colorName, fontSize: fontSizeName, fontFamily: 'var(--font-heading)' }}
              >
                {activeEvent.name}
              </h3>
              <p
                className="circular-designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeEvent.designation}
              </p>
              <motion.p
                className="circular-quote"
                style={{ color: colorDescription, fontSize: fontSizeQuote }}
              >
                {activeEvent.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block", marginRight: "0.25rem" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="circular-arrow-buttons">
            <button
              className="circular-arrow-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                border: `1px solid ${hoverPrev ? 'transparent' : 'rgba(198, 161, 91, 0.3)'}`
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous event"
            >
              <FaArrowLeft size={20} color={hoverPrev ? colorArrowHoverFg : colorArrowFg} />
            </button>
            <button
              className="circular-arrow-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                border: `1px solid ${hoverNext ? 'transparent' : 'rgba(198, 161, 91, 0.3)'}`
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next event"
            >
              <FaArrowRight size={20} color={hoverNext ? colorArrowHoverFg : colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularEvents;
