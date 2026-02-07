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
    <SectionWrapper background="charcoal" id="events" className="py-24 md:py-32">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-ivory-light mb-6">Celebrations</h2>
          <GoldDivider className="opacity-40" />
        </div>

        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {events.map((event) => (
            <motion.div
                key={event.id}
                className="flex flex-col items-center text-center p-10 rounded-2xl border border-accent-gold/20 bg-white/[0.03] hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-lg hover:border-accent-gold/35 transition-all duration-500 gap-6"
                variants={fadeUpCardVariants}
            >
              <h3 className="text-2xl md:text-3xl text-accent-gold font-serif">{event.title}</h3>
              <div className="flex flex-col gap-1 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-ivory-light/60">
                 <span className="font-bold text-ivory-light/80">{event.date}</span>
                 <span className="opacity-70">{event.time}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-medium text-ivory-light font-serif">{event.venue}</p>
                <p className="text-sm text-ivory-light/50 max-w-xs font-sans leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
