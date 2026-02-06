import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function HeroSection() {
  const { couple, hero, details } = WEDDING_DATA;

  return (
    <section className="relative h-screen w-full bg-sacred-gradient flex items-center justify-center text-center overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center justify-center h-full max-w-[1400px]">

        {/* Intro - Reduced opacity for hierarchy */}
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-ivory-light/60 mb-12 font-medium">
          {hero.intro}
        </p>

        {/* Names - Grand Scale */}
        <h1 className="font-serif text-ivory-light mb-8 leading-[0.9]">
          <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.groom}</span>
          <span className="block text-accent-gold text-3xl md:text-4xl my-6 font-serif italic">&</span>
          <span className="block text-[clamp(4rem,10vw,8.5rem)] tracking-tight">{couple.bride}</span>
        </h1>

        {/* Refined Divider */}
        <div className="my-10 opacity-60">
             <GoldDivider className="w-16" />
        </div>

        {/* Date & Location - Elegant Clarity */}
        <div className="font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-16 text-ivory-light/80 flex flex-col gap-2">
            <span>{details.date}</span>
            <span className="text-xs opacity-60">{details.location}</span>
        </div>

        {/* CTA - Calm Confidence */}
        <PrimaryButton className="border-accent-gold/40 hover:border-accent-gold hover:bg-transparent text-accent-gold/80 hover:text-accent-gold tracking-[0.2em] px-10 py-4 text-[10px]">
          {hero.cta}
        </PrimaryButton>
      </Container>
    </section>
  );
}
