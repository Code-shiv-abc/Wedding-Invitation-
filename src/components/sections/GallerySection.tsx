import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';

export function GallerySection() {
  return (
    <SectionWrapper background="dark" id="gallery">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl text-ivory-light mb-8">Captured Moments</h2>
        <GoldDivider className="opacity-40" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
          {[1, 2, 3].map((i) => (
             <div key={i} className="aspect-[3/4] bg-primary-charcoal border border-ivory-light/5 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500">
                <span className="text-ivory-light/20 font-serif italic text-lg tracking-widest">Photograph {i}</span>
             </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
