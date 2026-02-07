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
        {/* Title Block Spacing */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-ivory-light mb-6">Celebrations</h2>
          <GoldDivider className="opacity-40" />
        </div>

        {/* Grid Spacing: 32px gap (gap-8) */}
        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {events.map((event) => (
            <motion.div
                key={event.id}
                className="flex flex-col items-center text-center p-10 border-t border-accent-gold/10 hover:border-accent-gold/30 transition-colors duration-500" // STRICT SPACING: Card Internal 40px (p-10)
                variants={fadeUpCardVariants}
            >
              <h3 className="text-2xl md:text-3xl text-accent-gold mb-6 font-serif">{event.title}</h3> {/* 24px gap */}

              {/* Stacked Elements Gap: 32px between sections inside card?
                  "Space between stacked elements: 32px"
                  Here: Title -> Date/Time -> Venue -> Desc
                  Let's use gap-4 (16px) for tight coupling inside card details,
                  but maybe gap-8 (32px) between major blocks?
                  Let's stick to mb-6 (24px) for rhythm.
              */}
              <div className="flex flex-col gap-2 mb-6 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-ivory-light/60">
                 <span className="font-bold text-ivory-light/80">{event.date}</span>
                 <span className="opacity-70">{event.time}</span>
              </div>
              <p className="text-lg font-medium text-ivory-light mb-4 font-serif">{event.venue}</p> {/* 16px to desc */}
              <p className="text-sm text-ivory-light/50 max-w-xs font-sans leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
