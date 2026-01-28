import { Suspense } from 'react';
import Hero from '@/components/Hero';
import CalendarSection from '@/components/CalendarSection';
import LogisticsSection from '@/components/LogisticsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-canvas">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-typography-gold font-serif">Loading Invitation...</div>}>
        <Hero />
      </Suspense>
      <CalendarSection />
      <LogisticsSection />

      <footer className="py-8 text-center text-secondary-ivory/50 text-xs tracking-widest uppercase font-sans">
        © 2026 The Eternal Union. Designed with Love.
      </footer>
    </main>
  );
}
