'use client';

import { useGuestRecognition } from '@/utils/guest';
import { WEDDING_DATA } from '@/data/wedding';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal, FadeIn } from '@/components/motion/MotionWrappers';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const guestName = useGuestRecognition();
  const { scrollY } = useScroll();

  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background with noise/gradient */}
      <div className="absolute inset-0 bg-primary-canvas z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-900)_0%,_transparent_60%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto"
      >
        {/* Ganesha Icon Placeholder - Assuming User will add /ganesha.png */}
        <FadeIn delay={0.2} duration={1}>
           {/* Fallback to text/icon if image is missing, but using img tag as requested */}
           <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 opacity-80 mix-blend-screen">
             <Image
               src="/ganesha.svg"
               alt="Lord Ganesha"
               fill
               className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
               priority
             />
           </div>
        </FadeIn>

        {/* Dynamic Guest Greeting */}
        <FadeIn delay={0.5} className="text-gold-300 font-serif tracking-widest uppercase text-sm md:text-base">
          Swagatam, {guestName}
        </FadeIn>

        {/* Main Headline */}
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-display-xl text-gold-400 font-serif tracking-tighter">
            <TextReveal text={WEDDING_DATA.couple.groom} delay={0.8} />
          </div>
          <FadeIn delay={1.2} className="text-4xl md:text-6xl text-gold-200 font-serif italic">
            &
          </FadeIn>
          <div className="text-display-xl text-gold-400 font-serif tracking-tighter">
            <TextReveal text={WEDDING_DATA.couple.bride} delay={1.4} />
          </div>
        </div>

        {/* Sub-headline/Date */}
        <FadeIn delay={2.0} className="mt-8 flex flex-col items-center gap-2">
           <span className="text-xl md:text-2xl tracking-[0.2em] text-gold-100 font-light">
             {WEDDING_DATA.details.date.split('-')[2]} . {WEDDING_DATA.details.date.split('-')[1]} . {WEDDING_DATA.details.date.split('-')[0]}
           </span>
           <span className="text-sm md:text-base tracking-widest text-gold-500/80 uppercase">
             {WEDDING_DATA.details.location}
           </span>
        </FadeIn>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gold-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
