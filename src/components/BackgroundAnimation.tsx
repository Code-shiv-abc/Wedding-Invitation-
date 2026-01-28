'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const Mandala = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <circle cx="50" cy="50" r="48" />
    <circle cx="50" cy="50" r="40" />
    <path d="M50 10 L60 30 L80 30 L65 45 L75 65 L50 55 L25 65 L35 45 L20 30 L40 30 Z" />
    <circle cx="50" cy="50" r="10" />
    <path d="M50 2 L52 8 M50 98 L52 92 M2 50 L8 52 M98 50 L92 52" strokeWidth="1" />
  </svg>
);

const Swastika = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 20 V50 H50 V20 H80 M80 80 V50 H50 V80 H20" />
    <circle cx="35" cy="35" r="2" fill="currentColor" stroke="none" />
    <circle cx="65" cy="35" r="2" fill="currentColor" stroke="none" />
    <circle cx="35" cy="65" r="2" fill="currentColor" stroke="none" />
    <circle cx="65" cy="65" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);

  const spinTransition = {
    duration: 60,
    repeat: Infinity,
    ease: "linear" as const,
  };

  const pulseTransition = {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };

  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary-canvas">
        <div className="absolute top-10 left-10 w-96 h-96 text-typography-gold opacity-[0.03]">
          <Mandala className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64 text-typography-gold opacity-[0.03]">
          <Swastika className="w-full h-full" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary-canvas">
      {/* Gentle Rotation & Parallax - Top Left */}
      <motion.div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] text-typography-gold opacity-[0.03]"
        style={{ y: y1, rotate: rotate1 }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <Mandala className="w-full h-full" />
      </motion.div>

      {/* Subtle Pulsing - Center Right */}
      <motion.div
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] text-typography-gold opacity-[0.03]"
        style={{ y: y2 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.04, 0.03] }}
        transition={pulseTransition}
      >
        <Mandala className="w-full h-full" />
      </motion.div>

      {/* Counter Rotation - Bottom Left */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] text-typography-gold opacity-[0.03]"
        style={{ y: y1, rotate: rotate2 }}
        animate={{ rotate: -360 }}
        transition={spinTransition}
      >
        <Swastika className="w-full h-full" />
      </motion.div>

       {/* Floating - Bottom Right */}
      <motion.div
         className="absolute bottom-20 right-20 w-[300px] h-[300px] text-typography-gold opacity-[0.03]"
         style={{ y: y2 }}
         animate={{ y: [0, -20, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Swastika className="w-full h-full" />
      </motion.div>
    </div>
  );
}
