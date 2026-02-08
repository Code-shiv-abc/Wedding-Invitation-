'use client';

import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { fadeInVariants, fadeUpLargeVariants, EASING, DURATIONS, STAGGER } from '@/lib/motion';

export function HeroSection() {
  const { couple, hero, details } = WEDDING_DATA;
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Hooks
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]); // Background moves slower
  const textY = useTransform(scrollY, [0, 500], [0, 100]); // Text moves slightly

  // Refined Hero Sequence: 4 Steps Max
  // 1. Sacred Intro (Fade)
  // 2. Names Block (Fade + Rise)
  // 3. Context (Date/Loc) (Fade + Rise)
  // 4. CTA (Fade)

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.default,
        delayChildren: 0.1,
      }
    }
  };

  const activeContainerVariants = shouldReduceMotion ? {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.5 } }
  } : heroContainerVariants;

  const namesBlockVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATIONS.slow, ease: EASING }
      }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-sacred-gradient flex items-center justify-center text-center overflow-hidden">
      {/* Atmospheric Glow - Parallaxed */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/10 blur-[80px] rounded-full pointer-events-none z-0 mix-blend-screen"
        aria-hidden="true"
      />

      <Container className="relative z-10 h-full">
        <motion.div
            className="flex flex-col items-center justify-center h-full max-w-[1400px] mx-auto"
            variants={activeContainerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
        >
            {/* 1. Sacred Intro - Two Lines */}
            <motion.div
                variants={fadeInVariants}
                className="flex flex-col gap-3 mb-12 md:mb-16"
            >
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-ivory-light/60 font-medium">
                    {hero.line1}
                </p>
                <p className="text-sm md:text-base font-serif italic text-accent-gold/80 tracking-wide">
                    {hero.line2}
                </p>
            </motion.div>

            {/* 2. Names Block */}
            <motion.div variants={namesBlockVariants} className="flex flex-col items-center relative z-10">
                <h1 className="font-serif text-ivory-light leading-[0.85]">
                    <span className="block text-[clamp(4.5rem,11vw,9.5rem)] tracking-tight">{couple.groom}</span>
                    <span className="block text-accent-gold text-3xl md:text-4xl my-10 font-serif italic">&</span>
                    <span className="block text-[clamp(4.5rem,11vw,9.5rem)] tracking-tight">{couple.bride}</span>
                </h1>

                {/* Upgraded Divider: 2px height, gradient, glow */}
                <div className="my-12 flex justify-center w-full opacity-90">
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                </div>
            </motion.div>

            {/* 3. Context (Date/Location) */}
            <motion.div
                className="font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-16 text-ivory-light/80 flex flex-col gap-2"
                variants={fadeUpLargeVariants}
            >
                <span>{details.date}</span>
                <span className="text-xs opacity-60">{details.location}</span>
            </motion.div>

            {/* 4. CTA */}
            <motion.div variants={fadeInVariants}>
                <PrimaryButton className="border-accent-gold/40 hover:border-accent-gold/60 hover:bg-transparent text-accent-gold/80 hover:text-accent-gold tracking-[0.2em] px-12 py-5 text-[10px] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[3px] active:scale-[0.98]">
                {hero.cta}
                </PrimaryButton>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
