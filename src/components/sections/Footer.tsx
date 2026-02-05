'use client';

import { WEDDING_DATA } from '@/data/wedding';
import { FadeIn } from '@/components/motion/MotionWrappers';

export function Footer() {
  return (
    <footer className="bg-primary-canvas pt-24 pb-12 border-t border-gold-900/20 text-center">
      <FadeIn>
        <div className="flex flex-col items-center gap-6">
           <h2 className="text-3xl md:text-4xl font-serif text-gold-400">
             {WEDDING_DATA.couple.hashtag}
           </h2>
           <p className="text-gold-200/50 text-sm tracking-widest uppercase">
             {WEDDING_DATA.details.date} | {WEDDING_DATA.details.location}
           </p>

           <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-900 to-transparent my-4" />

           <p className="text-gold-900/50 text-xs">
             Designed with love for the eternal union.
           </p>
        </div>
      </FadeIn>
    </footer>
  );
}
