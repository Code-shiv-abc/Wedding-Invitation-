'use client';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/weddingData';
import Diya from './sacred/Diya';

export default function MangalikTimeline() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-primary-maroon mb-4">Shubh Vivah Karyakram</h2>
        <div className="h-1 w-24 bg-accent-gold mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-accent-gold/30 ml-4 md:ml-1/2 space-y-12">
        {weddingData.events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative pl-8 md:pl-0 flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } gap-4 items-center`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-gold border-4 border-primary-ivory shadow-sm z-10"></div>

            {/* Content Card */}
            <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-primary-maroon">{event.title}</h3>
                  <p className="text-accent-saffron font-medium">{event.date}</p>
                  <p className="text-text-muted text-sm italic">{event.description}</p>
                  {event.highlight && (
                    <div className="mt-2 flex justify-center md:justify-start">
                       <Diya className="w-8 h-8 scale-75 origin-left" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Empty space for alternate side on desktop */}
            <div className="hidden md:block flex-1"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
