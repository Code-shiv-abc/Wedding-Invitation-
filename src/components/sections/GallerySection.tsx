import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';

export function GallerySection() {
  return (
    <SectionWrapper background="ivory" id="gallery">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl text-primary-dark mb-4">Captured Moments</h2>
        <GoldDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Placeholders for a grid layout */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="aspect-[3/4] bg-primary-dark/5 flex items-center justify-center border border-primary-dark/10">
                <span className="text-primary-dark/30 font-serif italic text-lg">Coming Soon</span>
             </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
