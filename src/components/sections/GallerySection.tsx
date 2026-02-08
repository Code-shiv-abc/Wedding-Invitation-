'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]", alt: "The Couple" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]", alt: "Ceremony" },
  { id: 3, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]", alt: "Henna Art" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]", alt: "Groom" },
  { id: 5, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]", alt: "Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]", alt: "Celebration" },
];

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = IMAGES.find((img) => img.id === selectedId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = IMAGES.findIndex(img => img.id === selectedId);
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setSelectedId(IMAGES[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = IMAGES.findIndex(img => img.id === selectedId);
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setSelectedId(IMAGES[prevIndex].id);
  };

  return (
    <SectionWrapper background="dark" id="gallery" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-ivory-light mb-8">Captured Moments</h2>
            <GoldDivider className="opacity-40" />
        </div>

        {/* CSS Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4 md:px-0">
          {IMAGES.map((image, index) => (
             <motion.div
                key={image.id}
                layoutId={`card-${image.id}`}
                className="relative break-inside-avoid overflow-hidden rounded-sm cursor-zoom-in group mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedId(image.id)}
             >
                <div className={`${image.aspect} w-full bg-primary-charcoal relative overflow-hidden`}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
             </motion.div>
          ))}
        </div>

        <AnimatePresence>
            {selectedId && selectedImage && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    onClick={() => setSelectedId(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-ivory-light/60 hover:text-accent-gold transition-colors z-[70] p-2"
                        onClick={() => setSelectedId(null)}
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory-light/40 hover:text-accent-gold transition-colors z-[70] hidden md:block p-4"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory-light/40 hover:text-accent-gold transition-colors z-[70] hidden md:block p-4"
                        onClick={handleNext}
                    >
                        <ChevronRight size={48} />
                    </button>

                    <motion.div
                        layoutId={`card-${selectedId}`}
                        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                         <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain shadow-2xl shadow-black/50"
                        />
                        <div className="absolute bottom-[-3rem] left-0 right-0 text-center">
                            <p className="text-ivory-light font-serif italic text-xl tracking-wide opacity-90">{selectedImage.alt}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </Container>
    </SectionWrapper>
  );
}
