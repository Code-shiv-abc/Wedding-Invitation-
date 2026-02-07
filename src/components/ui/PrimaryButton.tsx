'use client';

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "relative group overflow-hidden",
        "px-8 py-3 rounded-md",
        "border border-accent-gold/60", // Subtle base border color
        "uppercase tracking-widest text-xs font-sans font-medium",
        "transition-all duration-500 ease-out",
        "text-metallic-gold glow-sacred", // Metallic text and sacred glow
        "hover:border-accent-gold hover:bg-accent-gold/5", // Subtle interaction
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark",
        "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Optional: subtle metallic shimmer on hover could be added here if needed */}
    </button>
  );
}
