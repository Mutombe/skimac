import { useScroll, useSpring } from 'framer-motion';

/**
 * Custom hook to track scroll progress
 * Returns a smooth animated scroll progress value from 0 to 1
 */
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return { scrollYProgress, scaleX };
};

/**
 * Hook to get current scroll position
 */
export const useScrollPosition = () => {
  const { scrollY } = useScroll();
  return scrollY;
};
