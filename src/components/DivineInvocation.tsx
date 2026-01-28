'use client';

import { motion } from 'framer-motion';

const GaneshaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Stylized Ganesha - simplified vector representation */}
    <path d="M50 20 C60 20 70 25 75 35 C80 45 75 55 65 60 C70 65 75 70 80 80 L70 85 C65 75 60 70 50 70 C40 70 35 75 30 85 L20 80 C25 70 30 65 35 60 C25 55 20 45 25 35 C30 25 40 20 50 20 Z" opacity="0.8" />
    <circle cx="50" cy="35" r="5" />
    <path d="M35 35 C30 35 25 30 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M65 35 C70 35 75 30 75 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 45 Q 55 60 65 55" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function DivineInvocation() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 text-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-typography-gold mb-6"
      >
        <GaneshaIcon className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="space-y-4 px-4"
      >
        <h2 className="text-3xl md:text-4xl text-typography-gold font-tiro leading-relaxed">
          ॥ श्री गणेशाय नमः ॥
        </h2>
        <p className="text-lg md:text-xl text-secondary-ivory/80 font-tiro max-w-2xl mx-auto leading-loose">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>
      </motion.div>
    </section>
  );
}
