import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * SpotlightCard
 * Reusable interactive 3D perspective tilt card with:
 * - Physics-damped 3D cursor tilt (rotateX, rotateY).
 * - Interactive radial spotlight overlay that tracks cursor coordinates.
 * - Dynamic illuminated border highlight matching cursor position.
 * - Touch & reduced-motion safeguards.
 */
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(99, 102, 241, 0.15)',
  spotlightSize = 320,
  tiltMax = 8,
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Lazy check to avoid cascading renders
  const [canTilt] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !isTouch && !isReducedMotion;
  });

  // Normalized cursor coordinates (-0.5 to 0.5)
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  // Pixel coordinates for radial spotlight
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // Spring physics configuration
  const springConfig = { stiffness: 260, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(normY, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(normX, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    if (canTilt) {
      const normalizedX = x / rect.width - 0.5;
      const normalizedY = y / rect.height - 0.5;
      normX.set(normalizedX);
      normY.set(normalizedY);
    }
  };

  const handlePointerEnter = (e) => {
    setIsHovered(true);
    handlePointerMove(e);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    normX.set(0);
    normY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        rotateX: canTilt ? rotateX : 0,
        rotateY: canTilt ? rotateY : 0,
      }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Interactive Radial Spotlight Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightSize}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Illuminated Border Spotlight Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightSize * 0.8}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(99, 102, 241, 0.35), transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Card Content with 3D Depth support */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
