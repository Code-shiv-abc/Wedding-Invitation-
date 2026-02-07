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
        {/* Title */}
        <div className="mb-20">
            {/* Added tracking-tight explicitly although global handles it, for clarity */}
             <h2 className="text-4xl md:text-5xl text-ivory-light mb-8 tracking-tight">
            {story.title}
            </h2>
            <GoldDivider className="opacity-50" />
        </div>

        {/* 3 Micro-Chapters Grid */}
        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto"
            staggerDelay={0.15}
        >
            {story.chapters.map((chapter, index) => (
                <motion.div
                    key={index}
                    variants={fadeUpCardVariants}
                    className="flex flex-col items-center p-6 md:p-8"
                >
                    {/* Chapter Number: Softer gold, slightly more opaque but still subtle */}
                    <span className="text-accent-gold-soft/50 font-serif text-5xl mb-6 opacity-80">
                        {index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl text-ivory-light mb-4 font-serif italic tracking-tight">
                        {chapter.title}
                    </h3>
                    {/* Body Text: High contrast, normal tracking for readability */}
                    <p className="text-ivory-light/90 text-sm md:text-base leading-relaxed font-light tracking-normal max-w-xs">
                        {chapter.text}
                    </p>
                </motion.div>
            ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
