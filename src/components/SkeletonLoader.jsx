import React from 'react';
import { motion } from 'framer-motion';

// Base skeleton component
export const Skeleton = ({ className = '', variant = 'rect' }) => {
  const variants = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'rounded h-4'
  };

  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`bg-gray-200 ${variants[variant]} ${className}`}
    />
  );
};

// Card skeleton
export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <Skeleton variant="rect" className="h-48 mb-4" />
      <Skeleton variant="text" className="w-3/4 mb-2" />
      <Skeleton variant="text" className="w-1/2 mb-4" />
      <Skeleton variant="text" className="w-full h-20" />
    </div>
  );
};

// Project card skeleton
export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Skeleton variant="rect" className="h-64" />
      <div className="p-4">
        <Skeleton variant="text" className="w-2/3 mb-2" />
        <Skeleton variant="text" className="w-1/3" />
      </div>
    </div>
  );
};

// Grid skeleton
export const GridSkeleton = ({ count = 6, columns = 3 }) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

// List skeleton
export const ListSkeleton = ({ count = 5 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <Skeleton variant="circle" className="w-12 h-12 flex-shrink-0" />
          <div className="flex-1">
            <Skeleton variant="text" className="w-3/4 mb-2" />
            <Skeleton variant="text" className="w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Masonry skeleton (for Projects page)
export const MasonrySkeleton = ({ count = 9 }) => {
  const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88'];

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {Array.from({ length: count }).map((_, index) => {
        const randomHeight = heights[index % heights.length];
        return (
          <div key={index} className="break-inside-avoid">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Skeleton variant="rect" className={randomHeight} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skeleton;
