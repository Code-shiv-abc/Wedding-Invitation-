'use client';

import { Section } from '@/components/ui/Section';
import { WEDDING_DATA } from '@/data/wedding';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrappers';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function EventDetails() {
  return (
    <Section className="bg-primary-surface" id="events">
      <div className="text-center mb-16 md:mb-24">
        <FadeIn>
           <h2 className="text-display-l text-gold-300 font-serif mb-4">Celebrations</h2>
           <p className="text-gold-200/60 font-sans tracking-widest uppercase text-sm">Join us in our joy</p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {WEDDING_DATA.events.map((event, index) => (
          <StaggerItem key={index} className="h-full">
            <div className="group relative h-full p-8 border border-gold-900/30 bg-primary-canvas/50 hover:bg-primary-canvas transition-colors duration-500 flex flex-col items-center text-center">
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-gold-900)_0%,_transparent_70%)]" />

              <div className="relative z-10 flex flex-col items-center gap-6 flex-grow">
                <h3 className="text-2xl text-gold-200 font-serif">{event.name}</h3>

                <div className="w-12 h-px bg-gold-500/30" />

                <div className="space-y-4 text-gold-100/80 font-sans text-sm tracking-wide">
                  <div className="flex flex-col items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <p className="text-gold-200/60 italic text-sm mt-4">{event.description}</p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-gold-900/30 w-full">
                 <Button variant="ghost" size="sm" className="w-full text-xs">
                   View Location
                 </Button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
