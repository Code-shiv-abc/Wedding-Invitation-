'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function GallerySection() {
  const { gallery } = WEDDING_DATA;

  return (
    <SectionWrapper background="dark" id="gallery">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl text-ivory-light mb-8 font-serif">Captured Moments</h2>
        <GoldDivider className="opacity-40 mb-16" />

        {/* Asymmetrical Grid Layout */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 grid-flow-dense"
        >
          {gallery?.map((item) => (
             <motion.div
                key={item.id}
                variants={fadeUpCardVariants}
                className={cn(
                  "relative group overflow-hidden rounded-sm bg-primary-charcoal border border-ivory-light/5",
                  item.className // Controls spans and aspect ratio
                )}
             >
                {/* Image with Scale Effect */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption Reveal */}
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10">
                   <span className="text-ivory-light font-serif text-lg tracking-wide border-b border-primary-gold/50 pb-1">
                     {item.caption}
                   </span>
                </div>
             </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
