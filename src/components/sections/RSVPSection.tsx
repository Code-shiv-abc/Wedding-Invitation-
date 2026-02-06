'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { MotionWrapper } from '@/components/motion/MotionWrapper';
import { fadeInVariants } from '@/lib/motion';

export function RSVPSection() {
    const { rsvp } = WEDDING_DATA;
  return (
    <SectionWrapper background="charcoal" id="rsvp">
      <Container className="text-center max-w-xl">
        <MotionWrapper variants={fadeInVariants}>
            <h2 className="text-4xl md:text-5xl text-ivory-light mb-6">R.S.V.P.</h2>
            <GoldDivider className="opacity-40" />
            <p className="text-ivory-light/60 text-base mb-12 font-sans font-light tracking-wide mt-8">
                Please respond by {rsvp.deadline}
            </p>

            <form className="flex flex-col gap-10 text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group relative">
                        <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-ivory-light/20 text-ivory-light py-3 focus:outline-none focus:border-accent-gold transition-colors font-serif text-lg placeholder:text-ivory-light/20" />
                    </div>
                    <div className="group relative">
                        <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-ivory-light/20 text-ivory-light py-3 focus:outline-none focus:border-accent-gold transition-colors font-serif text-lg placeholder:text-ivory-light/20" />
                    </div>
                </div>

                <div className="group relative">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-ivory-light/20 text-ivory-light py-3 focus:outline-none focus:border-accent-gold transition-colors font-sans placeholder:text-ivory-light/20" />
                </div>

                <div className="flex flex-col gap-6 mt-4 items-center">
                    <div className="flex flex-row gap-8">
                        <label className="flex items-center gap-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                            <input type="radio" name="attending" className="accent-accent-gold w-4 h-4 cursor-pointer" />
                            <span className="text-ivory-light font-sans text-sm tracking-wide">Joyfully Accept</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                            <input type="radio" name="attending" className="accent-accent-gold w-4 h-4 cursor-pointer" />
                            <span className="text-ivory-light font-sans text-sm tracking-wide">Regretfully Decline</span>
                        </label>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <PrimaryButton type="submit" className="w-full md:w-auto px-12 py-4 text-xs tracking-[0.2em] opacity-90 hover:opacity-100 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
                        Confirm Attendance
                    </PrimaryButton>
                </div>
            </form>
        </MotionWrapper>
      </Container>
    </SectionWrapper>
  );
}
