/**
 * Animation variants and spring configurations for Framer Motion.
 * Optimized for hardware-accelerated transforms (transform, opacity).
 */

export const TRANSITION_EASE = [0.16, 1, 0.3, 1]; // Smooth Apple/Linear cubic-bezier

export const fadeIn = (direction = 'up', delay = 0, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
    x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay,
      ease: TRANSITION_EASE,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleUp = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: TRANSITION_EASE,
    },
  },
});
