import { cn } from "@/lib/utils";

interface SectionBlenderProps {
  // Tailwind gradient classes, e.g. "from-primary-charcoal to-transparent"
  gradient: string;
  position?: 'top' | 'bottom';
  height?: string; // Tailwind height class (e.g., 'h-32')
  className?: string;
}

export function SectionBlender({
  gradient,
  position = 'top',
  height = 'h-32 md:h-48',
  className
}: SectionBlenderProps) {

  return (
    <div
      className={cn(
        "absolute left-0 w-full pointer-events-none z-20",
        position === 'top' ? 'top-0' : 'bottom-0',
        height,
        "bg-gradient-to-b",
        gradient,
        className
      )}
      aria-hidden="true"
    />
  );
}
