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
        "focus:outline-none focus:ring-2 focus:ring-accent-gold/50",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
