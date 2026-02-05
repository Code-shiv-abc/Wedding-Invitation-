'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function RSVPSection() {
    const { rsvp } = WEDDING_DATA;
  return (
    <SectionWrapper background="dark" id="rsvp">
      <Container className="text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl text-ivory-light mb-4">R.S.V.P.</h2>
        <GoldDivider />
        <p className="text-ivory-light/80 text-lg mb-12 font-sans font-light">
            We look forward to celebrating with you.<br/>Please respond by {rsvp.deadline}
        </p>

        <form className="flex flex-col gap-8 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-accent-gold mb-2">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-accent-gold/30 text-ivory-light py-2 focus:outline-none focus:border-accent-gold transition-colors font-serif text-lg" />
                </div>
                <div className="group">
                     <label className="block text-xs uppercase tracking-widest text-accent-gold mb-2">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-accent-gold/30 text-ivory-light py-2 focus:outline-none focus:border-accent-gold transition-colors font-serif text-lg" />
                </div>
            </div>

             <div className="group">
                <label className="block text-xs uppercase tracking-widest text-accent-gold mb-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-accent-gold/30 text-ivory-light py-2 focus:outline-none focus:border-accent-gold transition-colors font-sans" />
            </div>

             <div className="flex flex-col gap-4">
                <label className="text-xs uppercase tracking-widest text-accent-gold">Will you be attending?</label>
                <div className="flex flex-col md:flex-row gap-6 mt-1">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-accent-gold rounded-full flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors">
                             <div className="w-2 h-2 bg-accent-gold rounded-full opacity-0" />
                             {/* Simplified radio for CSS-only not working without state, relying on native radio appearance for now but styled */}
                             <input type="radio" name="attending" className="hidden" />
                        </div>
                         {/* Actually let's just use standard radio but accent color */}
                         <input type="radio" name="attending" className="accent-accent-gold w-4 h-4 cursor-pointer" />
                        <span className="text-ivory-light font-sans font-light">Joyfully Accept</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="attending" className="accent-accent-gold w-4 h-4 cursor-pointer" />
                        <span className="text-ivory-light font-sans font-light">Regretfully Decline</span>
                    </label>
                </div>
            </div>

            <div className="mt-8 text-center">
                <PrimaryButton type="submit" className="w-full md:w-auto px-16">
                    Confirm
                </PrimaryButton>
            </div>
        </form>
      </Container>
    </SectionWrapper>
  );
}
