'use client';
import { motion } from 'framer-motion';
import Ganesh from './sacred/Ganesh';
import { weddingData } from '@/lib/weddingData';

export default function SacredEntry({ guestName }: { guestName?: string }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden z-10">

      {/* Personalization (if present) */}
      {guestName && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-24 md:top-32 font-sacred text-xl text-primary-maroon"
        >
          Namaste, {guestName} Ji
        </motion.div>
      )}

      {/* Sacred Top Ornament */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mb-8"
      >
        <Ganesh className="w-32 h-32 text-accent-gold drop-shadow-lg" />
      </motion.div>

      {/* Shloka */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="mb-10 max-w-md"
      >
        <p className="font-sacred text-2xl md:text-3xl text-primary-maroon leading-relaxed whitespace-pre-line">
          {weddingData.shloka}
        </p>
        <p className="text-sm text-text-muted mt-2 uppercase tracking-widest opacity-80 font-sans">
          || Shree Ganeshay Namah ||
        </p>
      </motion.div>

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="flex flex-col gap-2 mb-6"
      >
        <h1 className="text-4xl md:text-6xl text-primary-maroon tracking-wide">
          {weddingData.groom.name}
        </h1>
        <span className="font-sacred text-3xl text-accent-gold">&</span>
        <h1 className="text-4xl md:text-6xl text-primary-maroon tracking-wide">
          {weddingData.bride.name}
        </h1>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-text-muted max-w-lg mx-auto"
      >
        <p className="italic text-lg mb-4">
          Together with our families, we invite you to grace our sacred union.
        </p>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center font-bold text-primary-maroon mt-4">
          <span>{weddingData.events.find(e => e.highlight)?.date}</span>
          <span className="hidden md:inline">•</span>
          <span>Lucknow</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 animate-bounce text-accent-gold"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </section>
  );
}
