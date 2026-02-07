'use client';

import { Container } from '@/components/ui/Container';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInVariants, fadeUpLargeVariants, EASING, DURATIONS, STAGGER } from '@/lib/motion';

export function HeroSection() {
  const { couple, hero, details } = WEDDING_DATA;
  const shouldReduceMotion = useReducedMotion();

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
    <section className="relative h-screen w-full bg-sacred-gradient flex items-center justify-center text-center overflow-hidden">
      {/* Atmospheric Glow - Radial Gradient behind names */}
      {/* Controlled Radiant Glow: Low opacity (5-8%), Large blur radius, No pulsing */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sacred-glow rounded-full pointer-events-none z-0 mix-blend-screen opacity-60"
        aria-hidden="true"
      />

      <Container className="relative z-10 h-full">
        <motion.div
            className="flex flex-col items-center justify-center h-full max-w-[1400px] mx-auto"
            variants={activeContainerVariants}
            initial="hidden"
            animate="visible"
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

            {/* 2. Names Block with True Metallic Gold & Controlled Glow */}
            <motion.div variants={namesBlockVariants} className="flex flex-col items-center relative z-10">
                <h1 className="font-serif leading-[0.85]">
                    <span className="block text-[clamp(4.5rem,11vw,9.5rem)] tracking-tight text-metallic-gold glow-sacred pb-2">{couple.groom}</span>
                    <span className="block text-3xl md:text-4xl my-10 font-serif italic text-metallic-gold glow-sacred">&</span>
                    <span className="block text-[clamp(4.5rem,11vw,9.5rem)] tracking-tight text-metallic-gold glow-sacred pb-2">{couple.bride}</span>
                </h1>

                {/* Upgraded Divider: Metallic Gradient + Controlled Glow */}
                <div className="my-12 flex justify-center w-full opacity-90">
                    <div className="h-[2px] w-32 bg-metallic-gold glow-sacred rounded-full" />
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
                <PrimaryButton className="px-12 py-5 text-[10px] hover:-translate-y-[3px] active:scale-[0.98]">
                {hero.cta}
                </PrimaryButton>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
