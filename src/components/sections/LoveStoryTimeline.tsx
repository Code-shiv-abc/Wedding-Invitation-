'use client';

import { Section } from '@/components/ui/Section';
import { WEDDING_DATA } from '@/data/wedding';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrappers';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LoveStoryTimeline() {
  return (
    <Section className="bg-primary-canvas relative">
      <div className="text-center mb-16 md:mb-24">
        <FadeIn>
           <h2 className="text-display-l text-gold-300 font-serif mb-4">Our Story</h2>
           <p className="text-gold-200/60 font-sans tracking-widest uppercase text-sm">A Journey of Love</p>
        </FadeIn>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent md:-translate-x-1/2" />

        <StaggerContainer className="space-y-12 md:space-y-24">
          {WEDDING_DATA.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerItem key={index} className={cn(
                "relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center",
                isEven ? "md:flex-row-reverse" : ""
              )}>
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 text-left">
                   <div className={cn("flex flex-col gap-2", isEven ? "md:text-left" : "md:text-right")}>
                      <span className="text-gold-500 font-serif text-5xl md:text-6xl opacity-20 absolute -top-4 md:-top-8 left-12 md:left-auto md:relative">
                        {item.year}
                      </span>
                      <h3 className="text-xl md:text-2xl text-gold-200 font-serif relative z-10">{item.title}</h3>
                      <p className="text-gold-100/70 font-sans leading-relaxed relative z-10">{item.description}</p>
                   </div>
                </div>

                {/* Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary-canvas border border-gold-500 z-20 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                   <Heart className="w-3 h-3 text-gold-500 fill-gold-500" />
                </div>

                {/* Empty Side for Desktop Balance */}
                <div className="hidden md:block w-1/2" />
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="h-24 md:h-32" /> {/* Bottom spacing */}
      </div>
    </Section>
  );
}
