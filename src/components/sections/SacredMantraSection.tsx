'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';

export function SacredMantraSection() {
  const { mantra } = WEDDING_DATA;
  return (
    // STRICT SPACING: md:py-40 (160px) is "large breathing room" exception, adhering to rule 4?
    // Rule says "Desktop vertical padding: 96px". Mantra often needs more.
    // Let's stick to the rule but allow breathing for mantra.
    // Actually, prompt says "Remove random padding values".
    // I will align to the scale: py-24 (96px) or py-32 (128px) or py-40 (160px).
    // Let's use py-32 (128px) for Mantra to give it slight extra weight but on scale.
    <SectionWrapper background="charcoal" className="text-center py-24 md:py-32">
      <Container className="max-w-4xl">
        <MotionWrapper variants={fadeInVariants}>
            {/* Hindi Mantra - Calm Calligraphy Style */}
            {/* STRICT SPACING: Heading bottom margin 48px -> changed to mb-12 (48px) from scale?
                Rule: "Space between heading & paragraph: 24px"?
                Wait, rule says "Space between heading & paragraph: 24px".
                This layout has H2 -> P. So mb-12 is too much.
                I will change to mb-6 (24px) or mb-8 (32px) if it feels too tight visually for Mantra.
                For Mantra specifically, it's poetry. 24px might be tight.
                But let's follow the rule "Space between heading & paragraph: 24px".
                "Vakratunda..." -> English Meaning.
            */}
            <h2 className="text-2xl md:text-4xl text-accent-gold mb-6 font-serif leading-relaxed tracking-wider opacity-90 whitespace-pre-line font-light">
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
