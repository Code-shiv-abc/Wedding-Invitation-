'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { generateICS, getGoogleCalendarUrl, getMapUrl } from '@/utils/calendar';
import { triggerHaptic } from '@/utils/interactions';

const EventCard = ({ event, index }: { event: any, index: number }) => {
  const venueKey = event.locationType as keyof typeof WEDDING_DATA.venues;
  const venue = WEDDING_DATA.venues[venueKey];

  // Helper to generate calendar event dates
  const getEventDates = () => {
    const dateStr = event.isoDate.replace(/-/g, '');
    const timeStr = event.startTime ? event.startTime.replace(':', '') + '00' : '100000'; // Default 10 AM
    // Default duration 4 hours
    let endHour = parseInt(timeStr.substring(0, 2)) + 4;
    const endTimeStr = (endHour > 23 ? endHour - 24 : endHour).toString().padStart(2, '0') + timeStr.substring(2);

    return {
      startTime: `${dateStr}T${timeStr}`,
      endTime: `${dateStr}T${endTimeStr}`
    };
  };

  const { startTime, endTime } = getEventDates();

  const calendarEvent = {
    title: `${event.title} - ${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name}`,
    description: event.details || `Join us for the ${event.title}`,
    location: venue.address,
    startTime,
    endTime
  };

  const handleDownloadICS = () => {
    triggerHaptic();
    const content = generateICS(calendarEvent);
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.title.replace(/\s+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-secondary-surface/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-typography-gold/20 flex flex-col gap-4 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-typography-gold/50" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-typography-gold mb-2">{event.title}</h3>
          <p className="text-secondary-ivory font-sans text-lg">{event.date}</p>
          {event.details && (
             <p className="text-typography-muted text-sm mt-2 italic flex items-center gap-2">
               <Clock size={14} />
               {event.details}
             </p>
          )}
        </div>

        <div className="text-right md:text-right text-left">
           <p className="text-secondary-ivory/80 text-sm uppercase tracking-wider mb-1">Venue</p>
           <p className="text-typography-sacred font-medium">{venue.name}</p>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-typography-gold/30 to-transparent my-2" />

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={getGoogleCalendarUrl(calendarEvent)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerHaptic}
          className="flex items-center gap-2 px-4 py-2 bg-typography-gold text-primary-canvas text-sm font-sans uppercase tracking-wider rounded-sm hover:bg-secondary-ivory transition-colors"
        >
          <Calendar size={16} /> Google Calendar
        </a>

        <button
          onClick={handleDownloadICS}
          className="flex items-center gap-2 px-4 py-2 border border-typography-gold text-typography-gold text-sm font-sans uppercase tracking-wider rounded-sm hover:bg-typography-gold hover:text-primary-canvas transition-colors"
        >
          <Calendar size={16} /> iCal
        </button>

        <a
          href={getMapUrl(venue.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerHaptic}
          className="flex items-center gap-2 px-4 py-2 border border-secondary-ivory/30 text-secondary-ivory/80 text-sm font-sans uppercase tracking-wider rounded-sm hover:bg-secondary-ivory hover:text-primary-canvas transition-colors ml-auto"
        >
          <MapPin size={16} /> Map
        </a>
      </div>
    </motion.div>
  );
};

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24 bg-primary-canvas px-4 relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }}
       />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl text-typography-gold font-serif mb-4">Mangalik Karyakram</h2>
            <p className="text-secondary-ivory font-sans tracking-widest uppercase text-sm">Schedule of Events</p>
        </motion.div>

        <div className="space-y-8">
          {WEDDING_DATA.events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
