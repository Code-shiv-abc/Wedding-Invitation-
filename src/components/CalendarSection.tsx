'use client';
import { generateICS, getGoogleCalendarUrl } from '@/utils/calendar';
import { triggerHaptic } from '@/utils/interactions';
import { Calendar, Download } from 'lucide-react';

export default function CalendarSection() {
  const handleDownload = () => {
    triggerHaptic();
    const icsContent = generateICS();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'himanshu-anjali-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-primary-canvas text-center px-4 relative">
       <div className="absolute inset-0 bg-secondary-ivory opacity-5 pointer-events-none" />
      <h2 className="text-3xl md:text-5xl text-typography-gold font-serif mb-12">Save the Date</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <button
            onClick={handleDownload}
            className="cursor-pointer flex items-center gap-2 px-8 py-3 border border-typography-gold text-typography-gold hover:bg-typography-gold hover:text-primary-canvas transition-colors duration-300 rounded-sm uppercase tracking-wider font-sans"
        >
            <Download size={20} />
            Apple / Outlook
        </button>
        <a
            href={getGoogleCalendarUrl()}
            onClick={() => triggerHaptic()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-typography-gold text-primary-canvas hover:bg-secondary-ivory transition-colors duration-300 rounded-sm uppercase tracking-wider font-sans"
        >
            <Calendar size={20} />
            Google Calendar
        </a>
      </div>
    </section>
  );
}
