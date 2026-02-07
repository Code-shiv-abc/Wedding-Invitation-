import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'ivory' | 'charcoal';
}

export function SectionWrapper({ children, className, id, background = 'dark' }: SectionWrapperProps) {
  const bgClasses = {
    dark: 'bg-primary-dark text-ivory-light',
    ivory: 'bg-ivory-light text-text-dark',
    charcoal: 'bg-primary-charcoal text-ivory-light', // For subtle alternation in dark mode
  };

  return (
    <section
      id={id}
      className={cn(
        // STRICT SPACING RULE:
        // Mobile: 64px (py-16)
        // Desktop: 96px (md:py-24)
        "w-full py-16 md:py-24",
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
