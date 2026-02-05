import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

export function Section({ children, className, fullWidth = false, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] w-full overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-6 md:px-12",
          fullWidth ? "max-w-none px-0" : "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
