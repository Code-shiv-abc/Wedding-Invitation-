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
    <SectionWrapper background="charcoal" className="text-center">
      <Container className="max-w-3xl">
        <MotionWrapper variants={fadeInVariants}>
            {/* Rule: Space between heading & paragraph: 24px (mb-6) */}
            <h2 className="text-2xl md:text-3xl text-accent-gold mb-6 font-serif italic tracking-wide">
            {family.title}
            </h2>
            {/* Rule: Space between stacked elements: 32px (mb-8) */}
            <p className="text-ivory-light/80 text-base md:text-lg font-light leading-loose tracking-wide font-sans mb-12"> {/* 48px to content */}
            {family.text}
            </p>

            {/* Card Internal Padding? This is a flex group.
                Let's use gap-8 (32px) or gap-12 (48px) for horizontal separation.
            */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 text-ivory-light/90 font-serif text-lg md:text-xl">
                <div className="flex flex-col gap-4"> {/* Tight text stack: 16px */}
                    <span className="text-xs uppercase tracking-widest text-ivory-light/40 font-sans">Groom&apos;s Family</span>
                    <span>{family.groomParents}</span>
                </div>
                <div className="flex flex-col gap-4">
                     <span className="text-xs uppercase tracking-widest text-ivory-light/40 font-sans">Bride&apos;s Family</span>
                    <span>{family.brideParents}</span>
                </div>
            </div>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
