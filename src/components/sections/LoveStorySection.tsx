import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function LoveStorySection() {
  const { story } = WEDDING_DATA;
  return (
    <SectionWrapper background="ivory" id="story">
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl text-primary-dark mb-6">
          {story.title}
        </h2>
        <GoldDivider />
        <p className="max-w-2xl text-text-dark/80 text-lg leading-relaxed mt-6 font-light">
          {story.text}
        </p>
      </Container>
    </SectionWrapper>
  );
}
