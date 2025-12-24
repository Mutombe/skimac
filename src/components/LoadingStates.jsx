import React from 'react';
import { motion } from 'framer-motion';

// Page loading spinner with logo
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-4"
        >
          <div className="w-full h-full border-4 border-primary border-t-transparent rounded-full" />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-secondary font-heading font-bold text-xl"
        >
          SKIMAC
        </motion.p>
        <p className="text-gray-500 text-sm mt-2">Loading...</p>
      </div>
    </div>
  );
};

// Button loading spinner
export const ButtonLoader = ({ className = '' }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full ${className}`}
    />
  );
};

// Inline spinner
export const Spinner = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  const colors = {
    primary: 'border-primary',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizes[size]} ${colors[color]} border-t-transparent rounded-full`}
    />
  );
};

// Dots loader
export const DotsLoader = () => {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2
          }}
          className="w-3 h-3 bg-primary rounded-full"
        />
      ))}
    </div>
  );
};

export default PageLoader;
