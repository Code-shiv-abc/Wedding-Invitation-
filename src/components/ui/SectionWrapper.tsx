import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'ivory';
}

export function SectionWrapper({ children, className, id, background = 'dark' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-[80px] md:py-[120px]",
        background === 'dark' ? 'bg-primary-dark text-ivory-light' : 'bg-ivory-light text-text-dark',
        className
      )}
    >
      {children}
    </section>
  );
}
