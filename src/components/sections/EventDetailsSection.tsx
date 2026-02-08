'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';

function EventCard({ event }: { event: typeof WEDDING_DATA['events'][0] }) {
  // Extract day and month for dramatic date display if possible, or just use the string
  const dateParts = event.date.replace(/,/g, '').split(' ');
  const month = dateParts[0] || '';
  const day = dateParts[1] || '';
  const year = dateParts[2] || '';

  return (
    <motion.div
      variants={fadeUpCardVariants}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 transition-all duration-700 hover:border-accent-gold/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-accent-gold/5 hover:-translate-y-1"
    >
      {/* "Alive" Background Effect - Subtle moving gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.2),transparent_70%)] blur-2xl group-hover:animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        {/* Date Badge - Elite Style */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-accent-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="flex flex-col items-center justify-center border-y border-accent-gold/30 py-2 px-6 min-w-[120px]">
             <span className="text-xs uppercase tracking-[0.3em] text-accent-gold-soft mb-1">{month}</span>
             <span className="text-4xl font-serif text-ivory-light font-medium">{day}</span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">{year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl text-accent-gold font-serif mb-4 tracking-tight group-hover:text-white transition-colors duration-500">
          {event.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-accent-gold/30 my-4 group-hover:w-24 transition-all duration-700" />

        {/* Meta Info */}
        <div className="flex flex-col gap-2 mb-6 font-sans text-xs uppercase tracking-[0.25em] text-accent-gold-soft/90 group-hover:text-accent-gold transition-colors duration-500">
          <span className="flex items-center justify-center gap-2">
            <span className="opacity-70">At</span> {event.time}
          </span>
          <span className="font-medium text-ivory-light/90">{event.venue}</span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-white/60 font-serif italic leading-relaxed max-w-xs group-hover:text-white/80 transition-colors duration-500">
          &ldquo;{event.description}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export function EventDetailsSection() {
  const { events } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" id="events" className="py-24 md:py-32 overflow-hidden">
      {/* Ambient Background Glow */}
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
