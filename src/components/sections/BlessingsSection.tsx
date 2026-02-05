import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';

export function BlessingsSection() {
  return (
    <SectionWrapper background="ivory" className="text-center py-24">
      <Container className="max-w-3xl">
         <p className="text-primary-dark/70 text-xl md:text-3xl font-serif italic leading-relaxed">
          &quot;With the blessings of our parents and the grace of the Almighty, we embark on this journey of love and togetherness.&quot;
        </p>
      </Container>
    </SectionWrapper>
  );
}
