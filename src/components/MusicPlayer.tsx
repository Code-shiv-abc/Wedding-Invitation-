'use client';

import { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
            console.error("Audio playback failed:", err);
            // Optional: User interaction is required for autoplay
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="auto"
      />
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-typography-gold text-primary-canvas shadow-lg border-2 border-primary-canvas/20 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
         <AnimatePresence mode='wait'>
            {isPlaying ? (
                 <motion.div
                    key="pause"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                 >
                    <Pause size={20} fill="currentColor" />
                 </motion.div>
            ) : (
                <motion.div
                    key="play"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                 >
                    <Music size={20} />
                 </motion.div>
            )}
         </AnimatePresence>

         {/* Ripple effect when playing */}
         {isPlaying && (
            <motion.div
                className="absolute inset-0 rounded-full bg-typography-gold -z-10"
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
         )}
      </motion.button>
    </>
  );
}
