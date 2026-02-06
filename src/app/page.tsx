import { HeroSection } from '@/components/sections/HeroSection';
import { SacredMantraSection } from '@/components/sections/SacredMantraSection';
import { LoveStorySection } from '@/components/sections/LoveStorySection';
import { EventDetailsSection } from '@/components/sections/EventDetailsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { BlessingsSection } from '@/components/sections/BlessingsSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full selection:bg-accent-gold selection:text-primary-dark">
      <HeroSection />
      <SacredMantraSection />
      <LoveStorySection />
      <EventDetailsSection />
      <GallerySection />
      <RSVPSection />
      <BlessingsSection />
      <Footer />
    </main>
  );
}
