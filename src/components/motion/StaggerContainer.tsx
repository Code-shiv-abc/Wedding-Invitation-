'use client';

import { motion, useReducedMotion, HTMLMotionProps } from 'framer-motion';
import { staggerContainerVariants, reducedMotionVariants, VIEWPORT_CONFIG } from '@/lib/motion';
import { cn } from '@/lib/utils';
import React from 'react';

// Use a union type for supported elements to avoid generic HTMLMotionProps issues
type SupportedElement = "div" | "section" | "article" | "ul";

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "as"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: SupportedElement;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerDelay,
  as = "div",
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Explicit mapping
  const Component = motion[as] || motion.div;

  const activeVariants = shouldReduceMotion
    ? reducedMotionVariants
    : staggerContainerVariants;

  // Customize stagger delay if needed
  const variantsWithCustomStagger = {
      ...activeVariants,
      visible: {
          ...activeVariants.visible,
          transition: {
               //@ts-expect-error - Safe transition override
              ...(activeVariants.visible?.transition || {}),
              staggerChildren: staggerDelay ?? (activeVariants.visible as { transition?: { staggerChildren?: number } })?.transition?.staggerChildren,
              delayChildren: delay,
          }
      }
  };

  return (
    // @ts-expect-error - motion component polymorphism type complexity
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={variantsWithCustomStagger}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
