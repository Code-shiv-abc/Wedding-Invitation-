import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("h-[1px] w-24 bg-accent-gold mx-auto my-8", className)} />
  );
}
