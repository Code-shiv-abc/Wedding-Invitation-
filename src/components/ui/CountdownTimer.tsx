'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TARGET_DATE = new Date("2026-04-26T10:00:00").getTime();

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    // Only set up the interval in the effect.
    // The initial render will be null (loading state), and the first tick will populate it.
    // If we want immediate population without waiting 1s, we can call it inside a timeout of 0 or requestAnimationFrame
    // to break the synchronous cycle, or just accept the tiny delay.

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
    };

    // Initial paint
    const initialTimer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 0);

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
        clearTimeout(initialTimer);
        clearInterval(interval);
    };
  }, []);

  if (!timeLeft) return <div className="h-24 w-full" />;

  return (
    <div className="flex flex-row items-center justify-center gap-6 md:gap-12 mt-12 mb-16 px-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="h-8 w-[1px] bg-ivory-light/10 hidden md:block" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="h-8 w-[1px] bg-ivory-light/10 hidden md:block" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="h-8 w-[1px] bg-ivory-light/10 hidden md:block" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[50px] md:min-w-[80px]">
      <div className="relative h-10 md:h-14 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
            <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute font-serif text-3xl md:text-5xl text-accent-gold italic tabular-nums leading-none"
            >
            {value.toString().padStart(2, '0')}
            </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ivory-light/40 font-sans mt-2 md:mt-3">
        {label}
      </span>
    </div>
  );
}
