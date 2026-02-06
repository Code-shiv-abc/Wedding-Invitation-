'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';

export function EventDetailsSection() {
  const { events } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" id="events">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-ivory-light mb-6">Celebrations</h2>
          <GoldDivider className="opacity-40" />
        </div>

        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto"
        >
          {events.map((event) => (
            <motion.div
                key={event.id}
                className="flex flex-col items-center text-center p-8 border-t border-accent-gold/10 hover:border-accent-gold/30 transition-colors duration-500"
                variants={fadeUpCardVariants}
            >
              <h3 className="text-2xl md:text-3xl text-accent-gold mb-4 font-serif">{event.title}</h3>
              <div className="flex flex-col gap-1 mb-6 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-ivory-light/60">
                 <span>{event.date}</span>
                 <span className="opacity-70">{event.time}</span>
              </div>
              <p className="text-lg font-medium text-ivory-light mb-3 font-serif">{event.venue}</p>
              <p className="text-sm text-ivory-light/50 max-w-xs font-sans leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
