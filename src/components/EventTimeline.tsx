'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LuxuryEventCard from './LuxuryEventCard';

type Ceremony = {
  id: string;
  title: string;
  label: string;
  theme_color: string;
  symbol: string;
  background_asset: string;
  description: string;
  time: string;
};

const CEREMONIES: Ceremony[] = [
  {
    id: 'haldi',
    title: 'Haldi',
    label: 'Turmeric Ceremony',
    theme_color: '#FBBF24',
    symbol: '🌼',
    background_asset: '/haldi-pattern.svg',
    description: 'A morning of turmeric, laughter, and blessings as we prepare for the auspicious union.',
    time: 'April 25th, 10:00 AM'
  },
  {
    id: 'mehendi',
    title: 'Mehendi',
    label: 'Henna Rasam',
    theme_color: '#10B981',
    symbol: '🌿',
    background_asset: '/mehendi-pattern.svg',
    description: 'Adorning hands with henna, singing songs of love, and celebrating the beginning of the festivities.',
    time: 'April 25th, 4:00 PM'
  },
  {
    id: 'sangeet',
    title: 'Sangeet',
    label: 'Musical Night',
    theme_color: '#6366F1',
    symbol: '🎵',
    background_asset: '/sangeet-pattern.svg',
    description: 'A night of music, dance, and performances where two families come together in rhythm.',
    time: 'April 25th, 7:00 PM'
  },
  {
    id: 'wedding',
    title: 'The Wedding',
    label: 'The Main Ceremony',
    theme_color: '#D4AF37',
    symbol: '💍',
    background_asset: '/wedding-pattern.svg',
    description: 'The sacred union under the stars, witnessing the seven vows and eternal promises.',
    time: 'April 26th, 10:00 AM'
  },
];

function CeremonySection({ ceremony, index }: { ceremony: Ceremony; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center relative py-16 md:py-24"
      id={ceremony.id}
    >
      {/* Background Pattern - subtle parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
            style={{ y, opacity: 0.05 }}
            className="w-full h-[120%] absolute top-[-10%]"
        >
             <div
                className="w-full h-full"
                style={{
                    backgroundImage: `url(${ceremony.background_asset})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '120px 120px'
                }}
             />
        </motion.div>
        {/* Gradient fade to integrate with page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-canvas via-transparent to-primary-canvas" />
      </div>

      <div className="container mx-auto px-4 z-10 relative flex justify-center">
        <div className="w-full max-w-xl">
           <LuxuryEventCard
             title={ceremony.title}
             label={ceremony.label}
             time={ceremony.time}
             description={ceremony.description}
             symbol={ceremony.symbol}
             themeColor={ceremony.theme_color}
           />
        </div>
      </div>
    </section>
  );
}

export default function EventTimeline() {
  return (
    <div className="w-full relative z-10 flex flex-col gap-8 md:gap-16">
      {CEREMONIES.map((ceremony, index) => (
        <CeremonySection key={ceremony.id} ceremony={ceremony} index={index} />
      ))}
    </div>
  );
}
