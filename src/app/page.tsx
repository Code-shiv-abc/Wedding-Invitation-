import { Suspense } from 'react';
import Hero from '@/components/Hero';
import CalendarSection from '@/components/CalendarSection';
import LogisticsSection from '@/components/LogisticsSection';
import DivineInvocation from '@/components/DivineInvocation';
import EventTimeline from '@/components/EventTimeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative z-0">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-typography-gold font-serif">Loading Invitation...</div>}>
        <Hero />
      </Suspense>

      <DivineInvocation />
      <EventTimeline />

      <CalendarSection />
      <Suspense fallback={null}>
        <LogisticsSection />
      </Suspense>

      <footer className="py-8 text-center text-secondary-ivory/50 text-xs tracking-widest uppercase font-sans relative z-10">
        © 2026 The Eternal Union. Designed with Love.
      </footer>
    </main>
  );
}
