import { Variants, Easing } from 'framer-motion';

// --- Motion Tokens (Refined for "Confident Brevity") ---

export const DURATIONS = {
  fast: 0.25,
  medium: 0.45,
  slow: 0.7,
  hero: 1.1, // Max sequence constraint
};

export const EASING: Easing = [0.4, 0, 0.2, 1]; // cubic-bezier(0.4, 0, 0.2, 1)

export const STAGGER = {
  default: 0.08, // Tightened rhythm
  fast: 0.05,
  slow: 0.12, // Max limit
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -10% 0px",
};

// --- Reusable Variants ---

// 1. Fade Up (Large Sections - Love Story)
// 16px Rise
export const fadeUpLargeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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

// 2. Fade Up (Cards/Small Elements)
// 12px Rise, slightly faster
export const fadeUpCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Faster for cards
      ease: EASING
    }
  },
};

// Legacy generic fadeUp mapped to Large for backward compatibility if needed,
// but we should migrate to specific ones.
export const fadeUpVariants = fadeUpLargeVariants;


// 3. Fade In (Opacity Only - Sacred Mantra, RSVP)
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.slow, // 0.7s
      ease: EASING
    }
  },
};

// 4. Scale In (Gallery - Extremely Subtle)
// 1.03 -> 1
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.03,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.medium, // 0.45s
      ease: EASING
    }
  },
};

// 5. Stagger Container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.default,
      delayChildren: 0.05, // Minimal initial delay
    },
  },
};

// 6. Reduced Motion Fallback
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.medium }
  },
};
