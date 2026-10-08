import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress
 * Minimalist top progress bar tracking total page scroll using useScroll & useSpring.
 * Hardware-accelerated scaleX transform with glowing accent gradient.
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Smooth physics spring damping for fluid scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-600 via-purple-500 to-cyan-400 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(99,102,241,0.6)]"
      aria-hidden="true"
    />
  );
};
