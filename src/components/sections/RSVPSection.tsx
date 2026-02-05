'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/MotionWrappers';
import { motion, AnimatePresence } from 'framer-motion';

export function RSVPSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState('success');
  };

  return (
    <Section className="bg-primary-canvas relative" id="rsvp">
       <div className="max-w-xl mx-auto text-center">
          <FadeIn>
             <h2 className="text-display-l text-gold-300 font-serif mb-6">RSVP</h2>
             <p className="text-gold-200/60 font-sans mb-12">
               We would be honored by your presence. Please let us know if you can make it.
             </p>
          </FadeIn>

          <div className="relative p-1">
             {/* Border Gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-gold-500/20 rounded-lg p-[1px]" />

             <div className="relative bg-primary-surface p-8 md:p-12 rounded-lg border border-gold-900/20 overflow-hidden">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center min-h-[300px]"
                    >
                       <div className="text-4xl mb-4">✨</div>
                       <h3 className="text-2xl text-gold-300 font-serif mb-2">Thank You!</h3>
                       <p className="text-gold-100/70">We look forward to celebrating with you.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 text-left"
                    >
                       <div className="space-y-2">
                         <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500">Full Name</label>
                         <input
                           type="text"
                           id="name"
                           required
                           className="w-full bg-primary-canvas border-b border-gold-900 focus:border-gold-500 text-gold-100 p-3 outline-none transition-colors"
                           placeholder="Enter your name"
                         />
                       </div>

                       <div className="space-y-2">
                         <label htmlFor="guests" className="text-xs uppercase tracking-widest text-gold-500">Number of Guests</label>
                         <select
                           id="guests"
                           className="w-full bg-primary-canvas border-b border-gold-900 focus:border-gold-500 text-gold-100 p-3 outline-none transition-colors appearance-none"
                         >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                         </select>
                       </div>

                       <div className="pt-6">
                         <Button
                           type="submit"
                           className="w-full"
                           isLoading={formState === 'submitting'}
                         >
                           Confirm Attendance
                         </Button>
                       </div>
                    </motion.form>
                  )}
                </AnimatePresence>
             </div>
          </div>
       </div>
    </Section>
  );
}
