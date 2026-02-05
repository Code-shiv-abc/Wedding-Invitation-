'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

// Easing curves - consistent with Apple's physics-based motion
const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]; // Custom cubic-bezier

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  fullWidth?: boolean;
  once?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  duration = 0.8,
  fullWidth = false,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      className={className}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "", delay = 0, staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASING } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  // Split text into words
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
