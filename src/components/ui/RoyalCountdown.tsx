'use client';

import { useEffect, useState, memo } from 'react';
import { cn } from '@/lib/utils';

// Constants
const TARGET_DATE = new Date("2026-04-26T00:00:00Z").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const NumberBlock = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="relative">
      <span
        className="font-serif text-3xl md:text-5xl font-light tabular-nums tracking-tight
                   bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600
                   text-transparent bg-clip-text drop-shadow-sm"
      >
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="mt-1 md:mt-2 text-[10px] md:text-xs uppercase tracking-widest text-white/70 font-sans font-medium">
      {label}
    </span>
  </div>
));

NumberBlock.displayName = 'NumberBlock';

const Separator = () => (
  <div className="hidden md:flex flex-col justify-start h-full pt-2 md:pt-4">
    <span className="text-yellow-500/40 text-2xl font-serif">:</span>
  </div>
);

export function RoyalCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Return null or a skeleton on server to avoid hydration mismatch,
  // but keeping the container dimensions is crucial for CLS.
  // We'll render the container with 00s if not mounted to preserve space.
  const displayTime = isMounted ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div
      className={cn(
        "relative z-20 mx-auto", // Positioning
        "mt-6 md:mt-8 mb-8 md:mb-10", // Spacing from prompt
        "w-fit max-w-[90vw]" // Constraints
      )}
      aria-label="Countdown to the Wedding"
    >
      {/* Glassmorphism Container */}
      <div className={cn(
        "flex items-center justify-center",
        "bg-black/20 backdrop-blur-lg",
        "border border-white/10",
        "rounded-2xl shadow-xl",
        "px-4 py-4 md:px-8 md:py-6",
        "transition-all duration-500 ease-out",
        !isMounted && "opacity-0" // Hide content until mounted but keep space? No, better to show 00s to avoid pop-in
      )}>
        <NumberBlock value={displayTime.days} label="Days" />
        <Separator />
        <NumberBlock value={displayTime.hours} label="Hours" />
        <Separator />
        <NumberBlock value={displayTime.minutes} label="Mins" />
        <Separator />
        <NumberBlock value={displayTime.seconds} label="Secs" />
      </div>
    </div>
  );
}
