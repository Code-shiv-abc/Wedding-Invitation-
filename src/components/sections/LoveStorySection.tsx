'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';

export function LoveStorySection() {
  const { story } = WEDDING_DATA;
  return (
    <SectionWrapper background="dark" id="story">
      <Container className="flex flex-col items-center text-center">
        {/* Title Block Spacing: Heading -> Divider -> Grid */}
        <div className="mb-20"> {/* Standard large spacing for section group */}
             <h2 className="text-4xl md:text-5xl text-ivory-light mb-6"> {/* Spacing 24px */}
            {story.title}
            </h2>
            <GoldDivider className="opacity-50" />
        </div>

        {/* 3 Micro-Chapters Grid */}
        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto"
            staggerDelay={0.15}
        >
            {story.chapters.map((chapter, index) => (
                <motion.div
                    key={index}
                    variants={fadeUpCardVariants}
                    className="flex flex-col items-center p-10" // STRICT SPACING: Card Internal Padding 40px (p-10)
                >
                    <span className="text-accent-gold/40 font-serif text-5xl mb-6 opacity-50"> {/* 24px gap */}
                        {index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl text-ivory-light mb-6 font-serif italic"> {/* 24px gap */}
                        {chapter.title}
                    </h3>
                    <p className="text-ivory-light/70 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xs">
                        {chapter.text}
                    </p>
                </motion.div>
            ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
