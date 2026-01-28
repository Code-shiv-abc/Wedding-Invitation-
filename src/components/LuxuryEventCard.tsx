'use client';

import { motion } from 'framer-motion';

export type LuxuryEventProps = {
  title: string;
  label: string;
  time: string;
  description: string;
  symbol: string;
  themeColor: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1] as const, // cubic-bezier(0.19, 1, 0.22, 1)
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

export default function LuxuryEventCard({ title, label, time, description, symbol, themeColor }: LuxuryEventProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -6,
        boxShadow: "0 28px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
      }}
      className="relative p-8 rounded-[24px] border overflow-hidden group"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        borderColor: "rgba(198,167,94,0.12)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Overlay: Radial ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${themeColor}15 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-5">

        {/* Event Icon (Small, subtle) */}
        <motion.div variants={itemVariants} className="text-3xl opacity-80 filter drop-shadow-md">
           {symbol}
        </motion.div>

        {/* Event Name (Primary Focus) */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl md:text-5xl font-serif text-secondary-ivory font-medium tracking-wide">
            {title}
          </h3>
        </motion.div>

        {/* Ceremony Label */}
        <motion.div variants={itemVariants}>
          <span className="font-cormorant text-xl md:text-2xl text-typography-gold italic tracking-wide">
            {label}
          </span>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div variants={itemVariants} className="w-16 h-[1px] bg-typography-gold/40 my-2" />

        {/* Date and Time (Metadata) */}
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="font-inter text-sm tracking-[0.15em] uppercase text-secondary-ivory/80">
            {time}
          </p>
          <p className="font-inter text-base text-secondary-ivory/60 max-w-sm mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
