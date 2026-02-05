'use client';

import { Section } from '@/components/ui/Section';
import { WEDDING_DATA } from '@/data/wedding';
import { FadeIn } from '@/components/motion/MotionWrappers';

export function SacredMantraSection() {
  return (
    <Section className="bg-primary-surface relative py-20 md:py-32">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900 to-transparent opacity-50" />
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900 to-transparent opacity-50" />

       <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-gold-400 leading-relaxed drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              {WEDDING_DATA.mantra.sanskrit}
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-gold-200/80 font-sans text-lg md:text-xl italic leading-relaxed px-6">
              &quot;{WEDDING_DATA.mantra.translation}&quot;
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
             <div className="w-16 h-1 bg-gold-500/30 rounded-full mt-4" />
          </FadeIn>
       </div>
    </Section>
  );
}
