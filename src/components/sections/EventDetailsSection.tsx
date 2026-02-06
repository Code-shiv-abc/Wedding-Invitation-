import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING_DATA } from '@/utils/wedding-data';

export function EventDetailsSection() {
  const { events } = WEDDING_DATA;
  return (
    <SectionWrapper background="dark" id="events">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-ivory-light mb-4">Celebrations</h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col items-center text-center p-8 border border-accent-gold/20 rounded-sm hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl md:text-3xl text-accent-gold mb-4 font-serif">{event.title}</h3>
              <p className="text-ivory-light/90 text-sm uppercase tracking-widest mb-2 font-sans">{event.date}</p>
              <p className="text-ivory-light/70 mb-4 font-sans text-sm">{event.time}</p>
              <div className="w-12 h-[1px] bg-accent-gold/50 my-4" />
              <p className="text-lg font-medium text-ivory-light mb-2 font-serif">{event.venue}</p>
              <p className="text-sm text-ivory-light/60 max-w-xs font-sans leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
