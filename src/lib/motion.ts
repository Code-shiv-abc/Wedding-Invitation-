import { Variants, Easing } from 'framer-motion';

// --- Motion Tokens ---

export const DURATIONS = {
  fast: 0.3,
  medium: 0.6, // "Slower is more premium" - aiming for calm 600ms default
  slow: 0.9,
  hero: 1.2, // Total sequence constraint
};

export const EASING: Easing = [0.4, 0, 0.2, 1]; // cubic-bezier(0.4, 0, 0.2, 1)

export const STAGGER = {
  default: 0.1,
  fast: 0.05,
  slow: 0.15,
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3, // Trigger when 30% of element is visible
  margin: "0px 0px -10% 0px", // Slight offset to ensure it doesn't trigger too early at bottom
};

// --- Reusable Variants ---

// 1. Fade Up (Standard Narrative)
// Used for: Love Story, Timeline, Headlines
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Subtle 20px rise
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING
    }
  },
};

// 2. Fade In (Opacity Only)
// Used for: Sacred Mantra, RSVP, delicate elements
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING
    }
  },
};

// 3. Scale In (Subtle)
// Used for: Gallery Images (1.02 -> 1)
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05, // Start slightly larger
  },
  visible: {
    opacity: 1,
    scale: 1, // Settle to natural size
    transition: {
      duration: DURATIONS.medium,
      ease: EASING
    }
  },
};

// 4. Stagger Container
// Used for: Grids, Lists, Hero Text
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.default,
      delayChildren: 0.1,
    },
  },
};

// 5. Reduced Motion Fallback
// Helper to override transform-based animations if needed
// (Though typically we handle this by swapping variants or using useReducedMotion hook)
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.medium }
  },
};
