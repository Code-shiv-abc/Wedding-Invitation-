import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function SacredMantraSection() {
  const { mantra } = WEDDING_DATA;
  return (
    <SectionWrapper background="dark" className="text-center py-20">
      <Container className="max-w-4xl">
        <h2 className="text-2xl md:text-4xl text-accent-gold mb-10 font-serif leading-relaxed tracking-wide">
          {mantra.sanskrit}
        </h2>
        <p className="text-ivory-light/70 text-base md:text-lg font-light leading-loose tracking-wide font-sans">
          {mantra.translation}
        </p>
      </Container>
    </SectionWrapper>
  );
}
