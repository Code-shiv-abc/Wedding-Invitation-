'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';

export function FamilySection() {
  const { family } = WEDDING_DATA;

  if (!family) return null;

  return (
    <SectionWrapper background="charcoal" className="text-center py-24 md:py-32">
      <Container className="max-w-3xl">
        <MotionWrapper variants={fadeInVariants}>
            <h2 className="text-2xl md:text-3xl text-accent-gold mb-8 font-serif italic tracking-tight">
            {family.title}
            </h2>
            <p className="text-ivory-light/90 text-base md:text-lg font-light leading-loose tracking-normal font-sans mb-12">
            {family.text}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 text-ivory-light font-serif text-lg md:text-xl">
                <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent-gold-soft font-sans font-medium">Groom&apos;s Family</span>
                    <span>{family.groomParents}</span>
                </div>
                <div className="flex flex-col gap-2">
                     <span className="text-xs uppercase tracking-[0.3em] text-accent-gold-soft font-sans font-medium">Bride&apos;s Family</span>
                    <span>{family.brideParents}</span>
                </div>
            </div>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
