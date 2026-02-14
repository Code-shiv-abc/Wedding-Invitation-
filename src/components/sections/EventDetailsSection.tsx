'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';
import { MouseEvent } from 'react';

function EventCard({ event }: { event: typeof WEDDING_DATA['events'][0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Parse Date
  const dateParts = event.date.replace(/,/g, '').split(' ');
  const month = dateParts[0]?.substring(0, 3).toUpperCase() || '';
  const day = dateParts[1] || '';
  const year = dateParts[2] || '';

  return (
    <motion.div
      variants={fadeUpCardVariants}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-colors duration-700 hover:border-accent-gold/30 hover:bg-white/[0.04]"
    >
      {/* Spotlight Effect - Gold Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Row: Date & Time */}
        <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6 group-hover:border-accent-gold/20 transition-colors duration-700">
            <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif text-ivory-light group-hover:text-accent-gold transition-colors duration-500">
                    {day}
                </span>
                <span className="text-xs tracking-[0.3em] uppercase text-accent-gold-soft/80 mt-1">
                    {month} {year}
                </span>
            </div>
            <div className="text-right flex flex-col items-end">
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">Time</span>
                <span className="font-sans text-sm text-ivory-light/90 tracking-wide">{event.time}</span>
            </div>
        </div>

        {/* Middle: Title */}
        <div className="flex-grow flex flex-col justify-center py-2">
             <h3 className="text-3xl md:text-4xl font-serif text-ivory-light mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                {event.title}
            </h3>
            <div className="w-12 h-[1px] bg-accent-gold/40 group-hover:w-24 group-hover:bg-accent-gold transition-all duration-700" />
        </div>

        {/* Bottom: Venue & Desc */}
        <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-accent-gold/20 transition-colors duration-700">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
                <div className="flex flex-col">
                    <span className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">Venue</span>
                     <span className="text-sm md:text-base font-medium text-ivory-light/90">
                        {event.venue}
                     </span>
                </div>
                <p className="text-sm text-white/50 italic font-serif max-w-xs md:text-right leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    &ldquo;{event.description}&rdquo;
                </p>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export function EventDetailsSection() {
  const { events } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" id="events" className="py-24 md:py-32 overflow-hidden">
      {/* Ambient Background Glow - Preserved but refined */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl text-ivory-light mb-8 tracking-tighter font-serif">
              The <span className="text-accent-gold italic">Celebrations</span>
            </h2>
            <GoldDivider className="opacity-60 mx-auto w-32" />
          </motion.div>
        </div>

        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
