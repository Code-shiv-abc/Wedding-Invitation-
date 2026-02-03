'use client';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/weddingData';
import { MapPin } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="py-20 px-4 bg-primary-maroon/5 relative text-center z-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">

        {/* Baarat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border-t-4 border-accent-gold shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary-maroon mb-4">Baarat Departure</h3>
          <div className="space-y-3 text-text-muted">
             <p className="text-lg font-semibold text-accent-saffron">{weddingData.baarat.time}</p>
             <p className="leading-relaxed">{weddingData.baarat.address}</p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingData.baarat.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-primary-maroon font-bold hover:text-accent-gold transition-colors"
          >
            <MapPin size={16} />
            View Location
          </a>
        </motion.div>

        {/* Wedding Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-xl border-t-4 border-accent-gold shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary-maroon mb-4">Wedding Venue</h3>
          <div className="space-y-3 text-text-muted">
             <p className="text-lg font-bold">{weddingData.venue.name}</p>
             <p className="leading-relaxed">{weddingData.venue.address}</p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingData.venue.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-primary-maroon font-bold hover:text-accent-gold transition-colors"
          >
             <MapPin size={16} />
            View Location
          </a>
        </motion.div>

      </div>
    </section>
  );
}
