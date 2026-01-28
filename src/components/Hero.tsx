'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useGuestRecognition } from '@/utils/guest';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const guestName = useGuestRecognition();
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-primary-canvas">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-typography-gold opacity-10 rounded-full blur-3xl translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-typography-gold opacity-10 rounded-full blur-3xl translate-x-[50%] translate-y-[50%]" />

        {/* Animated Mandala with Morphing */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20 text-typography-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
           <motion.path
             d="M50 5 L65 35 L95 50 L65 65 L50 95 L35 65 L5 50 L35 35 Z"
             fill="none"
             stroke="currentColor"
             strokeWidth="0.2"
             initial={{ pathLength: 0 }}
             animate={{
               pathLength: 1,
               d: "M50 0 L85 15 L100 50 L85 85 L50 100 L15 85 L0 50 L15 15 Z"
             }}
             transition={{
               pathLength: { duration: 3, ease: "easeInOut" },
               d: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
             }}
           />
           <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.1" fill="none" />
           <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.1" fill="none" />
        </motion.svg>
      </div>

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="z-10 text-center space-y-8 px-6 max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-lg md:text-xl tracking-[0.3em] uppercase text-secondary-ivory/80 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Wedding Celebration of
        </motion.h2>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-typography-gold drop-shadow-2xl font-serif">
          Himanshu <br className="md:hidden" /> <span className="text-4xl md:text-6xl align-middle">&</span> Anjali
        </h1>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-typography-gold to-transparent mx-auto my-6" />

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <p className="text-xl md:text-3xl text-secondary-ivory font-light italic">
            Inviting {guestName}
            </p>
        </motion.div>

        <p className="text-sm md:text-lg mt-8 tracking-[0.2em] font-sans text-secondary-ivory/70 uppercase">
          Sunday, April 26th, 2026
        </p>
      </motion.div>

       <motion.div
        className="absolute bottom-12 text-typography-gold/80 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
