'use client';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Share2 } from 'lucide-react';
import { weddingData } from '@/lib/weddingData';

export default function ModernUtilities() {

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Wedding: Sujeet & Sonali")}&dates=20260211T123000Z/20260212T053000Z&details=${encodeURIComponent("Join us for the wedding ceremony of Sujeet & Sonali.")}&location=${encodeURIComponent(weddingData.venue.address)}`;

  const whatsappMessage = `Namaste Siyaram Ji, Badhai ho! We are delighted to confirm our presence for the wedding of Sujeet and Sonali.`;
  const whatsappUrl = `https://wa.me/${weddingData.rsvp.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Calendar */}
        <motion.a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 bg-primary-maroon text-primary-ivory py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
        >
          <Calendar size={20} />
          <span className="font-semibold">Add to Calendar</span>
        </motion.a>

        {/* RSVP */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
        >
          <MessageCircle size={20} />
          <span className="font-semibold">RSVP on WhatsApp</span>
        </motion.a>

      </div>

      {/* RSVP Text Info */}
      <div className="mt-12 text-center text-text-muted">
        <p className="font-bold text-primary-maroon uppercase tracking-widest text-sm mb-4">RSVP Contact</p>
        <p className="text-lg font-bold">{weddingData.rsvp.contactName}</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {weddingData.rsvp.phones.map(phone => (
                <a key={phone} href={`tel:${phone}`} className="hover:text-primary-maroon transition-colors">{phone}</a>
            ))}
        </div>
      </div>
    </section>
  );
}
