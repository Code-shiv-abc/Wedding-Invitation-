'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Story', href: '#story' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
];

export function FloatingNav() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show nav after scrolling past hero (approx 80vh = ~600px usually)
    if (latest > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <nav className="pointer-events-auto bg-primary-charcoal/80 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 shadow-2xl shadow-black/40 flex items-center gap-6 md:gap-8">

            {/* Logo / Home */}
            <a
                href="#"
                onClick={(e) => handleScrollTo(e, '#')}
                className="text-accent-gold font-serif italic text-lg hover:text-ivory-light transition-colors"
             >
                H&A
             </a>

             <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

            {/* Links */}
            <div className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-ivory-light/70 hover:text-accent-gold transition-colors duration-300"
                >
                    {link.name}
                </a>
                ))}
            </div>

            {/* CTA Button */}
            <a
                href="#rsvp"
                onClick={(e) => handleScrollTo(e, '#rsvp')}
                className="bg-accent-gold text-primary-dark px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-ivory-light transition-colors duration-300 shadow-lg shadow-accent-gold/20"
            >
                RSVP
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
