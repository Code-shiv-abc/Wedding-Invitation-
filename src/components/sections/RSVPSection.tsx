'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingInput, CustomRadio } from '@/components/ui/FormElements';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function RSVPSection() {
    const { rsvp } = WEDDING_DATA;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [attending, setAttending] = useState<'accept' | 'decline' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <SectionWrapper background="charcoal" id="rsvp" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none z-0" />

            <Container className="relative z-10 text-center max-w-2xl">
                <MotionWrapper variants={fadeInVariants}>
                    <h2 className="text-4xl md:text-5xl text-ivory-light mb-6">Join Us</h2>
                    <GoldDivider className="opacity-40" />
                    <p className="text-ivory-light/60 text-sm md:text-base mb-16 font-sans font-light tracking-wide mt-8">
                        We would be honored by your presence. Please respond by {rsvp.deadline}.
                    </p>

                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                                className="flex flex-col gap-10 text-left bg-white/[0.02] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <FloatingInput label="First Name" required />
                                    </div>
                                    <div className="group relative">
                                        <FloatingInput label="Last Name" required />
                                    </div>
                                </div>

                                <div className="group relative">
                                    <FloatingInput label="Email Address" type="email" required />
                                </div>

                                <div className="flex flex-col gap-6 mt-4 items-center">
                                    <p className="text-ivory-light/40 text-[10px] uppercase tracking-widest mb-2">Will you be attending?</p>
                                    <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
                                        <CustomRadio
                                            label="Joyfully Accept"
                                            name="attending"
                                            value="accept"
                                            checked={attending === 'accept'}
                                            onChange={() => setAttending('accept')}
                                        />
                                        <CustomRadio
                                            label="Regretfully Decline"
                                            name="attending"
                                            value="decline"
                                            checked={attending === 'decline'}
                                            onChange={() => setAttending('decline')}
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 text-center flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !attending}
                                        className={cn(
                                            "w-full md:w-auto px-12 py-4 text-[10px] md:text-xs tracking-[0.25em] font-sans font-medium uppercase rounded-md border border-accent-gold text-accent-gold transition-all duration-300",
                                            "hover:bg-accent-gold hover:text-primary-dark hover:-translate-y-1 active:scale-[0.98]",
                                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-accent-gold disabled:hover:translate-y-0",
                                            "flex items-center justify-center gap-3 min-w-[200px]"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" size={16} />
                                                Sending...
                                            </>
                                        ) : (
                                            "Confirm Attendance"
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="bg-white/[0.03] p-12 rounded-2xl border border-accent-gold/20 flex flex-col items-center justify-center gap-6 shadow-2xl shadow-accent-gold/5 backdrop-blur-sm"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="w-20 h-20 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold text-accent-gold mb-2"
                                >
                                    <Check size={40} strokeWidth={1.5} />
                                </motion.div>
                                <h3 className="text-3xl font-serif text-ivory-light italic">Thank You</h3>
                                <p className="text-ivory-light/60 font-sans font-light max-w-xs leading-relaxed text-sm tracking-wide">
                                    Your response has been received. We look forward to celebrating with you.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MotionWrapper>
            </Container>
        </SectionWrapper>
    );
}
