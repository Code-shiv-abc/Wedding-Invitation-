'use client';

import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpVariants, fadeInVariants } from '@/lib/motion';

export function HeroSection() {
  const { couple, hero, details } = WEDDING_DATA;
  const shouldReduceMotion = useReducedMotion();

  // Hero Sequence Custom Variants
  // Specific constraints:
  // - Intro Text (Fade In)
  // - Headline (Fade Up + 20px rise)
  // - Names (Fade Up, Staggered)
  // - Divider (Fade In)
  // - CTA (Fade In, delayed)

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly slower stagger for Hero grandeur
        delayChildren: 0.2,    // Initial delay after page load
      }
    }
  };

  // Custom variants for specific hero needs if global ones aren't enough,
  // but let's try to reuse global tokens where possible to ensure consistency.

  // If reduced motion is preferred, we can simplify even further (e.g. no stagger)
  const activeContainerVariants = shouldReduceMotion ? {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.5 } }
  } : heroContainerVariants;

  return (
    <section className="relative h-screen w-full bg-sacred-gradient flex items-center justify-center text-center overflow-hidden">
      <Container className="relative z-10 h-full">
        <motion.div
            className="flex flex-col items-center justify-center h-full max-w-[1400px] mx-auto"
            variants={activeContainerVariants}
            initial="hidden"
            animate="visible" // Hero animates immediately on mount
        >
            {/* 1. Intro - Reduced opacity for hierarchy - Fade In Only */}
            <motion.p
                variants={fadeInVariants}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-ivory-light/60 mb-12 font-medium"
            >
            {hero.intro}
            </motion.p>

            {/* 2. Headline & Names - Grand Scale - Fade Up */}
            <motion.h1
                className="font-serif text-ivory-light mb-8 leading-[0.9]"
                variants={fadeUpVariants}
            >
            <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.groom}</span>
            <motion.span
                className="block text-accent-gold text-3xl md:text-4xl my-6 font-serif italic"
                variants={fadeInVariants} // Ampersand just fades in gracefully
            >
                &
            </motion.span>
            <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.bride}</span>
            </motion.h1>

            {/* 3. Refined Divider - Fade In */}
            <motion.div
                className="my-10 opacity-60"
                variants={fadeInVariants}
            >
                <GoldDivider className="w-16" />
            </motion.div>

            {/* 4. Date & Location - Elegant Clarity - Fade Up */}
            <motion.div
                className="font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-16 text-ivory-light/80 flex flex-col gap-2"
                variants={fadeUpVariants}
            >
                <span>{details.date}</span>
                <span className="text-xs opacity-60">{details.location}</span>
            </motion.div>

            {/* 5. CTA - Calm Confidence - Fade In Last */}
            <motion.div variants={fadeInVariants}>
                <PrimaryButton className="border-accent-gold/40 hover:border-accent-gold hover:bg-transparent text-accent-gold/80 hover:text-accent-gold tracking-[0.2em] px-10 py-4 text-[10px]">
                {hero.cta}
                </PrimaryButton>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
