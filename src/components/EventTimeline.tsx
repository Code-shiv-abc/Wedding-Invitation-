'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Ceremony = {
  id: string;
  title: string;
  theme_color: string;
  symbol: string;
  background_asset: string;
  description: string; // Added description for content
  time: string; // Added time placeholder
};

const CEREMONIES: Ceremony[] = [
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    theme_color: '#FBBF24',
    symbol: '🌼',
    background_asset: '/haldi-pattern.svg',
    description: 'A morning of turmeric, laughter, and blessings as we prepare for the auspicious union.',
    time: 'April 25th, 10:00 AM'
  },
  {
    id: 'mehendi',
    title: 'Mehendi Rasam',
    theme_color: '#10B981',
    symbol: '🌿',
    background_asset: '/mehendi-pattern.svg',
    description: 'Adorning hands with henna, singing songs of love, and celebrating the beginning of the festivities.',
    time: 'April 25th, 4:00 PM'
  },
  {
    id: 'sangeet',
    title: 'Sangeet Night',
    theme_color: '#6366F1',
    symbol: '🎵',
    background_asset: '/sangeet-pattern.svg',
    description: 'A night of music, dance, and performances where two families come together in rhythm.',
    time: 'April 25th, 7:00 PM'
  },
  {
    id: 'wedding',
    title: 'The Main Wedding',
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-24"
      id={ceremony.id}
    >
      {/* Background Pattern with Parallax */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
            style={{ y }}
            className="w-full h-[120%] absolute top-[-10%]"
        >
             <div
                className="w-full h-full"
                style={{
                    backgroundImage: `url(${ceremony.background_asset})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100px 100px'
                }}
             />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-canvas via-transparent to-primary-canvas" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>

          {/* Symbol / Image Placeholder */}
          <motion.div
            className="flex-1 flex justify-center"
            style={{ scale, opacity }}
          >
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center border-2 border-opacity-30 backdrop-blur-sm shadow-2xl"
              style={{ borderColor: ceremony.theme_color, backgroundColor: `${ceremony.theme_color}10` }}
            >
              <span className="text-6xl md:text-8xl filter drop-shadow-lg" role="img" aria-label={ceremony.title}>
                {ceremony.symbol}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6 p-8 rounded-2xl border border-secondary-ivory/10 backdrop-blur-md bg-primary-canvas/30 shadow-2xl relative overflow-hidden"
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]), opacity }}
          >
            {/* Subtle gloss effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            <h3
              className="text-4xl md:text-6xl font-serif font-bold relative z-10"
              style={{ color: ceremony.theme_color }}
            >
              {ceremony.title}
            </h3>
            <p className="text-xl md:text-2xl text-secondary-ivory/90 font-sans tracking-wide relative z-10">
              {ceremony.time}
            </p>
            <p className="text-lg text-secondary-ivory/70 leading-relaxed font-sans max-w-lg mx-auto md:mx-0 relative z-10">
              {ceremony.description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function EventTimeline() {
  return (
    <div className="w-full relative z-10">
      {CEREMONIES.map((ceremony, index) => (
        <CeremonySection key={ceremony.id} ceremony={ceremony} index={index} />
      ))}
    </div>
  );
}
