'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useGuestRecognition } from '@/utils/guest';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const guestName = useGuestRecognition();
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-primary-canvas">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-typography-sacred opacity-5 rounded-full blur-3xl translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-typography-sacred opacity-5 rounded-full blur-3xl translate-x-[50%] translate-y-[50%]" />

        {/* Animated Mandala with Morphing */}
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-10 text-typography-sacred"
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
        className="z-10 text-center space-y-10 px-6 max-w-5xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mb-6 relative"
        >
          <div className="absolute inset-0 bg-typography-gold/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <Image
            src="/ganesha.png"
            alt="Lord Ganesha"
            width={120}
            height={200}
            className="opacity-95 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            priority
          />
        </motion.div>

        <motion.h2
          className="text-xl md:text-2xl tracking-[0.4em] uppercase text-typography-muted font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          The Wedding Celebration of
        </motion.h2>

        <motion.h1
          className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-typography-sacred drop-shadow-2xl font-serif leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          Himanshu <br className="md:hidden" /> <span className="text-5xl md:text-7xl align-middle font-light text-typography-gold">&</span> Anjali
        </motion.h1>

        <motion.div
          className="w-48 h-[2px] bg-gradient-to-r from-transparent via-accent-divider to-transparent mx-auto my-8 opacity-70"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="space-y-4"
        >
            <p className="text-2xl md:text-4xl text-secondary-ivory font-light italic font-serif tracking-wide">
            Inviting {guestName}
            </p>
        </motion.div>

        <motion.p
          className="text-base md:text-xl mt-10 tracking-[0.3em] font-sans text-secondary-ivory/90 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Sunday, April 26th, 2026
        </motion.p>
      </motion.div>

       <motion.button
        className="absolute bottom-10 text-typography-gold/80 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-typography-gold rounded-full p-4 hover:bg-white/5 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToCalendar}
        aria-label="Scroll to calendar"
      >
        <ChevronDown size={40} className="drop-shadow-lg" />
      </motion.button>
    </section>
  );
}
