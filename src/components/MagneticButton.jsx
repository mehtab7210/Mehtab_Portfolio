import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * MagneticButton
 * Applies a subtle magnetic attraction effect pulling towards the cursor within hover bounds.
 * Uses Framer Motion useMotionValue and useSpring for smooth physics restitution.
 */
export const MagneticButton = ({
  children,
  className = '',
  strength = 0.28,
  springConfig = { stiffness: 220, damping: 16, mass: 0.1 },
  as: Component = 'button',
  disabled = false,
  ...props
}) => {
  const ref = useRef(null);

  // Lazy check to avoid cascading renders
  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined' || disabled) return false;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !isTouch && !isReducedMotion;
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handlePointerMove = (e) => {
    if (!canAnimate || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullX = (e.clientX - centerX) * strength;
    const pullY = (e.clientY - centerY) * strength;

    x.set(pullX);
    y.set(pullY);
  };

  const handlePointerLeave = () => {
    if (!canAnimate) return;
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion[Component] || motion.button;

  return (
    <MotionComponent
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        x: canAnimate ? smoothX : 0,
        y: canAnimate ? smoothY : 0,
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
