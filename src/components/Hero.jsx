import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMousePosition } from '../hooks/useMousePosition';

const Hero = () => {
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax effect (subtle)
  const springConfig = { stiffness: 150, damping: 30 };
  const x = useSpring(useTransform(() => (mouseX - window.innerWidth / 2) * 0.02), springConfig);
  const y = useSpring(useTransform(() => (mouseY - window.innerHeight / 2) * 0.02), springConfig);

  // Split text into characters for animation
  const text = "Building Your Vision Into Reality";
  const words = text.split(' ');

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden -mt-0"
    >
      {/* Multi-layer Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="/assets/2.jpg"
          alt="Construction Site"
          className="w-full h-full object-cover scale-110"
        />
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(211,47,47,0.3) 100%)',
              'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(211,47,47,0.4) 100%)',
              'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(211,47,47,0.3) 100%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          style={{ x, y }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/20 rounded-lg transform rotate-45"
        />
        <motion.div
          style={{ x: useTransform(x, v => v * -1), y: useTransform(y, v => v * -1) }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-40 left-20 w-24 h-24 border-4 border-accent/20 rounded-full"
        />
        <motion.div
          style={{ x: useTransform(x, v => v * 0.5), y: useTransform(y, v => v * 0.5) }}
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0]
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-red-gold opacity-10 rounded-sm transform rotate-12"
        />
      </div>

      {/* Content with Parallax */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        {/* Subtitle with stagger animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 text-accent"
        >
          Welcome to Skimac Investments
        </motion.h2>

        {/* Main headline with word animation */}
        <div className="mb-8">
          <div className="overflow-hidden">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + wordIndex * 0.1,
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="inline-block mr-4 md:mr-6"
              >
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight drop-shadow-2xl">
                  {wordIndex === 4 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          From concept to completion, we transform your vision into reality with excellence and precision.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className="inline-block px-10 py-4 bg-primary text-white rounded-full font-bold text-base md:text-lg hover:bg-red-700 transition-all shadow-2xl hover:shadow-red/50 group"
            >
              <span className="inline-flex items-center gap-2">
                View Our Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-secondary transition-all shadow-2xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.p className="text-white/70 text-xs uppercase tracking-widest mb-2">
            Scroll
          </motion.p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
