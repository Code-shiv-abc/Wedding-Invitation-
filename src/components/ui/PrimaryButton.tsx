'use client';

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-3 rounded-md border border-accent-gold text-accent-gold",
        "uppercase tracking-widest text-xs font-sans font-medium",
        "transition-colors duration-300 hover:bg-accent-gold hover:text-primary-dark",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark",
        "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
