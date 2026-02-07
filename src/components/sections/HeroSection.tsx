'use client';

import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
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

            {/* 2. Names Block */}
            <motion.div variants={namesBlockVariants} className="flex flex-col items-center">
                <h1 className="font-serif text-ivory-light leading-[0.9]">
                    <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.groom}</span>
                    <span className="block text-accent-gold text-3xl md:text-4xl my-6 font-serif italic">&</span>
                    <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.bride}</span>
                </h1>

                <div className="my-10 opacity-60">
                    <GoldDivider className="w-16" />
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
                <PrimaryButton className="border-accent-gold/40 hover:border-accent-gold/60 hover:bg-transparent text-accent-gold/80 hover:text-accent-gold tracking-[0.2em] px-10 py-4 text-[10px] transition-all duration-150 hover:scale-[1.015] active:scale-[0.98]">
                {hero.cta}
                </PrimaryButton>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
