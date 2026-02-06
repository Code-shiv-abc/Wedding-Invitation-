import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';

export function SacredMantraSection() {
  const { mantra } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" className="text-center">
      <Container className="max-w-4xl">
        <MotionWrapper variants={fadeInVariants}>
            <h2 className="text-3xl md:text-5xl text-accent-gold mb-12 font-serif leading-relaxed tracking-wide opacity-90 whitespace-pre-line">
            {mantra.sanskrit}
            </h2>
            <p className="text-ivory-light/60 text-base md:text-lg font-light leading-loose tracking-wide font-sans max-w-2xl mx-auto">
            {mantra.translation}
            </p>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
