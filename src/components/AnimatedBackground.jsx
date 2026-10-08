import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * AnimatedBackground
 * Combines:
 * 1. Hardware-accelerated dynamic Aurora / Radial Mesh Gradients with mouse parallax.
 * 2. High-performance HTML5 Canvas interactive Particle Constellation / Mesh with:
 *    - Magnetic repel/attract organic physics within 120px of cursor.
 *    - Connecting vector lines between proximity nodes and the active cursor.
 *    - Retina/High-DPI resolution auto-scaling.
 *    - Visibility API background tab throttling.
 *    - Full @media (prefers-reduced-motion: reduce) accessibility support.
 */
export const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  // Lazy initialization for prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Parallax motion values for Aurora blobs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 120, mass: 0.8 };
  const smoothParallaxX = useSpring(mouseX, springConfig);
  const smoothParallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = 0;
    let height = 0;
    let particles = [];
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
      radius: 120, // 120px interaction radius as specified
    };

    // Calculate theme status
    const isDark = () => document.documentElement.classList.contains('dark');

    // Handle high DPI resizing
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      // Responsive particle density (capped for 60-120fps efficiency)
      const count = Math.min(
        Math.max(Math.floor((width * height) / 22000), 28),
        68
      );

      particles = [];
      for (let i = 0; i < count; i++) {
        const speed = 0.4 + Math.random() * 0.4;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.4 + 1.2,
          alpha: Math.random() * 0.5 + 0.3,
          colorSeed: Math.random(),
        });
      }
    };

    // Pointer move listener
    const onPointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Parallax update for aurora blobs (normalized -25px to +25px)
      const normX = (e.clientX / window.innerWidth - 0.5) * 50;
      const normY = (e.clientY / window.innerHeight - 0.5) * 50;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    const onPointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    resizeCanvas();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      const darkMode = isDark();

      // Theme-dependent color tokens
      const nodeCyan = darkMode ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
      const nodeIndigo = darkMode ? 'rgba(129, 140, 248, ' : 'rgba(99, 102, 241, ';
      const lineIndigo = darkMode ? 'rgba(99, 102, 241, ' : 'rgba(99, 102, 241, ';
      const maxConnectDist = 125;
      const maxConnectDistSq = maxConnectDist * maxConnectDist;
      const mouseRadiusSq = mouse.radius * mouse.radius;

      // Update and draw particles
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Organic drift
          p.x += p.vx;
          p.y += p.vy;

          // Screen boundaries wrap-around
          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;

          // Organic magnetic repel effect within 120px radius
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseRadiusSq && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              // Smooth repulsion with slight tangential spin
              p.x += Math.cos(angle) * force * 3.5;
              p.y += Math.sin(angle) * force * 3.5;
            }
          }
        }

        // Connecting lines between proximity nodes
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxConnectDist) * (darkMode ? 0.22 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineIndigo}${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connecting line to cursor if within 120px
        if (mouse.active) {
          const dxM = p.x - mouse.x;
          const dyM = p.y - mouse.y;
          const distMSq = dxM * dxM + dyM * dyM;

          if (distMSq < mouseRadiusSq) {
            const distM = Math.sqrt(distMSq);
            const cursorLineAlpha = (1 - distM / mouse.radius) * (darkMode ? 0.38 : 0.2);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${nodeCyan}${cursorLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw particle node with ambient glow
        const nodeColor = p.colorSeed > 0.5 ? nodeCyan : nodeIndigo;
        const currentAlpha = darkMode ? p.alpha : p.alpha * 0.7;

        // Glowing node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${currentAlpha})`;
        ctx.fill();

        // Node soft outer halo
        if (darkMode) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${nodeColor}${currentAlpha * 0.22})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Pause RAF when document is hidden (Visibility API)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        if (!animationFrameId && !prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial render
    render();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* Dynamic Aurora / Radial Mesh Gradient Underlay (Option B) */}
      <motion.div
        style={{
          x: smoothParallaxX,
          y: smoothParallaxY,
        }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {/* Blob 1: Deep Indigo Nebula (Top Right) */}
        <div
          className="absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-brand-600/25 via-indigo-700/20 to-transparent blur-[110px] dark:opacity-40 opacity-25 animate-pulse-slow"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />

        {/* Blob 2: Vibrant Cyan Glow (Bottom Left) */}
        <div
          className="absolute top-[45%] -left-[12%] w-[50vw] h-[50vw] max-w-[680px] max-h-[680px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-600/15 to-transparent blur-[120px] dark:opacity-35 opacity-20 animate-pulse-slow"
          style={{
            animationDelay: '3s',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Blob 3: Violet / Purple Ambient Center (Center-Bottom) */}
        <div
          className="absolute -bottom-[20%] right-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-purple-600/20 via-brand-500/15 to-transparent blur-[100px] dark:opacity-30 opacity-15 animate-pulse-slow"
          style={{
            animationDelay: '5s',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </motion.div>

      {/* Interactive Particle Constellation Canvas Overlay (Option A) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
