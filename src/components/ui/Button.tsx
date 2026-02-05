'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

    const variants = {
      primary: "bg-gold-500 text-primary-canvas hover:bg-gold-400 border border-transparent shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]",
      secondary: "bg-primary-surface text-gold-200 border border-gold-900 hover:border-gold-500 hover:text-gold-400",
      outline: "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10",
      ghost: "bg-transparent text-gold-400 hover:text-gold-300 hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wider",
      md: "h-12 px-8 text-sm tracking-widest",
      lg: "h-14 px-10 text-base tracking-widest",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-none uppercase font-serif transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Shimmer effect for primary buttons */}
        {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}

        {isLoading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : null}

        <span className="relative z-10 flex items-center gap-2">
            {children}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
