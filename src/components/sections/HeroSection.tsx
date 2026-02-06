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
  // 1. Intro (Fade)
  // 2. Headline (Fade + 16px Rise)
  // 3. Names Block (Fade + 12px Rise) - merged Names + Ampersand + Divider
  // 4. CTA (Fade)

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.default, // 0.08s
        delayChildren: 0.05, // Faster start for LCP
      }
    }
  };

  const activeContainerVariants = shouldReduceMotion ? {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.5 } }
  } : heroContainerVariants;

  // Custom refined rise for Names (12px)
  const namesBlockVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATIONS.slow, ease: EASING } // 0.7s
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
            {/* 1. Intro - Fade Only */}
            <motion.p
                variants={fadeInVariants}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-ivory-light/60 mb-12 font-medium"
            >
            {hero.intro}
            </motion.p>

            {/* 2. Names Block (The Headline Event) - Merged */}
            <motion.div variants={namesBlockVariants} className="flex flex-col items-center">
                <h1 className="font-serif text-ivory-light leading-[0.9]">
                    <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.groom}</span>
                    <span className="block text-accent-gold text-3xl md:text-4xl my-6 font-serif italic">&</span>
                    <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.bride}</span>
                </h1>
                {/* Static Divider inside the block so it settles with the names */}
                <div className="my-10 opacity-60">
                    <GoldDivider className="w-16" />
                </div>
            </motion.div>

            {/* 3. Context (Date/Location) - Fade Up 16px */}
            <motion.div
                className="font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-16 text-ivory-light/80 flex flex-col gap-2"
                variants={fadeUpLargeVariants}
            >
                <span>{details.date}</span>
                <span className="text-xs opacity-60">{details.location}</span>
            </motion.div>

            {/* 4. CTA - Fade Only */}
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
