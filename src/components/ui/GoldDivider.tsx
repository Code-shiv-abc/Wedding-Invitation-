import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("h-[1px] w-24 bg-metallic-gold glow-sacred rounded-full mx-auto my-8 opacity-80", className)} />
  );
}
