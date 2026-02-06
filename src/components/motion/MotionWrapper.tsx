'use client';

import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';
import { VIEWPORT_CONFIG, reducedMotionVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  viewportMargin?: string;
  as?: React.ElementType;
}

export function MotionWrapper({
  children,
  variants,
  className,
  delay = 0,
  threshold,
  viewportMargin,
  as = "div",
  ...props
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  // Use a pre-defined motion component if possible to avoid render-time creation
  // For dynamic behavior without recreating component, we render motion.div and use 'as' prop if supported?
  // No, motion components don't support 'as'.
  // The workaround is to use `motion.div` generally, or `motion.section` if specified.
  // Since we only need a few semantic tags (div, section, article), we can map them.

  const Component = React.useMemo(() => {
     if (typeof as === 'string' && (as === 'section' || as === 'article' || as === 'div' || as === 'span' || as === 'p' || as === 'h1' || as === 'h2')) {
         return motion[as];
     }
     // Fallback to div for unknown string tags or custom components (which might not work with motion factory directly)
     return motion.div;
  }, [as]);


  // Override viewport config if props provided
  const viewportConfig = {
    ...VIEWPORT_CONFIG,
    amount: threshold ?? VIEWPORT_CONFIG.amount,
    margin: viewportMargin ?? VIEWPORT_CONFIG.margin,
  };

  // If reduced motion is preferred, use the simple opacity fade
  const activeVariants = shouldReduceMotion ? reducedMotionVariants : variants;

  // Clone variants to inject delay without mutating the original reference
  const variantsWithDelay = {
    ...activeVariants,
    visible: {
      ...activeVariants.visible,
      transition: {
        //@ts-expect-error - Framer motion types are complex
        ...(activeVariants.visible?.transition || {}),
        delay: delay,
      }
    }
  };

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variantsWithDelay}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
