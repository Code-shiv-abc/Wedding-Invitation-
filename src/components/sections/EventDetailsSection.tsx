'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeUpCardVariants } from '@/lib/motion';
import { MapPin, Calendar } from 'lucide-react';
import { createGoogleCalendarUrl } from '@/lib/calendar';

function EventCard({ event }: { event: typeof WEDDING_DATA['events'][0] }) {
  // Extract day and month for dramatic date display
  const dateParts = event.date.replace(/,/g, '').split(' ');
  const month = dateParts[0] || '';
  const day = dateParts[1] || '';
  const year = dateParts[2] || '';

  const googleCalendarUrl = createGoogleCalendarUrl(event);
  const mapQuery = `${event.venue}, ${WEDDING_DATA.details.location}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <motion.div
      variants={fadeUpCardVariants}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: 0,
        scale: 1.01
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-xl p-10 transition-all duration-500 shadow-physical hover:shadow-physical-hover"
    >
      {/*
        LAYER 1: TEXTURE & BASE
        The 'texture-paper' class provides the noise overlay and charcoal base.
      */}
      <div className="absolute inset-0 texture-paper opacity-100 z-0" />

      {/*
        LAYER 2: DOUBLE BORDER (TRADITIONAL STATIONERY)
        A sophisticated double-border effect.
        Outer is implied by the card edge. Inner is this div.
      */}
      <div className="absolute inset-2 border border-accent-gold/20 rounded-lg z-10 pointer-events-none group-hover:border-gold-foil/40 transition-colors duration-700" />

      {/*
        LAYER 3: CONTENT
      */}
      <div className="relative z-20 flex flex-col items-center text-center h-full">

        {/* Date Badge - Letterpress Style */}
        <div className="mb-8 relative">
          <div className="flex flex-col items-center justify-center py-2 px-6 min-w-[120px]">
             <span className="text-xs uppercase tracking-[0.3em] text-accent-gold-soft mb-2 text-gold-foil font-bold opacity-90">{month}</span>
             <span className="text-5xl font-serif text-emboss font-medium leading-none">{day}</span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2">{year}</span>
          </div>
        </div>

        {/* Title - Embossed & Elegant */}
        <h3 className="text-3xl md:text-4xl text-accent-gold font-serif mb-5 tracking-tight text-emboss group-hover:text-gold-gradient transition-all duration-500">
          {event.title}
        </h3>

        {/* Divider - Gold Foil Line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-60 my-4 group-hover:w-32 transition-all duration-700" />

        {/* Meta Info */}
        <div className="flex flex-col gap-2 mb-8 font-sans text-xs uppercase tracking-[0.25em] text-accent-gold-soft/80 group-hover:text-accent-gold transition-colors duration-500">
          <span className="flex items-center justify-center gap-2">
            <span className="opacity-70">At</span> {event.time}
          </span>
          <span className="font-medium text-ivory-light/90">{event.venue}</span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-white/50 font-serif italic leading-relaxed max-w-xs group-hover:text-white/70 transition-colors duration-500 mb-10">
          &ldquo;{event.description}&rdquo;
        </p>

        {/* Actions Row - Minimal & Tactile */}
        <div className="mt-auto flex items-center justify-center gap-6 opacity-60 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <a
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-0 py-2 border-b border-transparent hover:border-accent-gold/50 transition-all duration-300 group/btn"
            aria-label={`View ${event.venue} on Google Maps`}
          >
            <MapPin className="w-3.5 h-3.5 text-accent-gold-soft group-hover/btn:text-accent-gold transition-colors" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-gold-soft group-hover/btn:text-accent-gold font-medium">Map</span>
          </a>

          <span className="w-1 h-1 rounded-full bg-accent-gold/30" />

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-0 py-2 border-b border-transparent hover:border-accent-gold/50 transition-all duration-300 group/btn"
            aria-label="Add to Google Calendar"
          >
            <Calendar className="w-3.5 h-3.5 text-accent-gold-soft group-hover/btn:text-accent-gold transition-colors" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-gold-soft group-hover/btn:text-accent-gold font-medium">Calendar</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function EventDetailsSection() {
  const { events } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" id="events" className="py-24 md:py-32 overflow-hidden relative">
      {/*
        Global Ambient Lighting for the Section
        Soft, deep radial gradients to set the mood without overpowering the cards.
      */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl text-ivory-light mb-6 tracking-tighter font-serif text-emboss">
              The Celebrations
            </h2>
            <p className="text-accent-gold-soft text-sm uppercase tracking-[0.3em] font-sans opacity-70">
              Honoring Tradition & Love
            </p>
            <div className="mt-8 mx-auto w-px h-16 bg-gradient-to-b from-accent-gold/0 via-accent-gold/40 to-accent-gold/0" />
          </motion.div>
        </div>

        <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto px-4 md:px-0"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
