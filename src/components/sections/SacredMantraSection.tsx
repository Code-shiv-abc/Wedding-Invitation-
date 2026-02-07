'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';

export function SacredMantraSection() {
  const { mantra } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" className="text-center py-32 md:py-40">
      <Container className="max-w-4xl">
        <MotionWrapper variants={fadeInVariants}>
            {/* Hindi Mantra - Calm Calligraphy Style */}
            <h2 className="text-2xl md:text-4xl text-accent-gold mb-12 font-serif leading-relaxed tracking-wider opacity-90 whitespace-pre-line font-light">
            {mantra.sanskrit}
            </h2>

            {/* English Meaning - Concise & Grounded */}
            <p className="text-ivory-light/60 text-sm md:text-base font-light leading-loose tracking-wide font-sans max-w-xl mx-auto italic">
            {mantra.translation}
            </p>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
