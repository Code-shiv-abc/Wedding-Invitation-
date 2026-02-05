import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function HeroSection() {
  const { couple, hero, details } = WEDDING_DATA;

  return (
    <section className="relative h-screen w-full bg-primary-dark flex items-center justify-center text-center overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Sanskrit Invocation */}
        <div className="mb-12 text-accent-gold/80 text-sm tracking-[0.3em] font-serif">
          || Shree Ganeshay Namah ||
        </div>

        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-ivory-light/70 mb-8 animate-fade-in-up">
          {hero.intro}
        </p>

        <h1 className="font-serif text-ivory-light mb-6 leading-tight">
          <span className="block text-[clamp(3rem,8vw,6rem)]">{couple.groom}</span>
          <span className="block text-accent-gold text-4xl md:text-5xl my-2">&</span>
          <span className="block text-[clamp(3rem,8vw,6rem)]">{couple.bride}</span>
        </h1>

        <GoldDivider className="my-12" />

        <p className="font-sans text-base md:text-lg tracking-widest uppercase mb-16 text-ivory-light/90">
            {details.date} • {details.location}
        </p>

        <PrimaryButton>
          {hero.cta}
        </PrimaryButton>
      </Container>
    </section>
  );
}
