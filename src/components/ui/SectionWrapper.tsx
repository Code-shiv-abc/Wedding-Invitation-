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
        "w-full py-24 md:py-32", // Increased vertical padding (96px / 128px)
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
