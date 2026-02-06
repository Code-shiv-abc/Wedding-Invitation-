import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeUpLargeVariants } from '@/lib/motion';

export function LoveStorySection() {
  const { story } = WEDDING_DATA;
  return (
    <SectionWrapper background="dark" id="story">
      <Container className="flex flex-col items-center text-center">
        <MotionWrapper variants={fadeUpLargeVariants} className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl text-ivory-light mb-8">
            {story.title}
            </h2>
            <GoldDivider className="opacity-50" />
            <p className="max-w-xl text-ivory-light/70 text-lg md:text-xl leading-relaxed mt-8 font-light tracking-wide">
            {story.text}
            </p>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
