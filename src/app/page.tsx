import { HeroSection } from '@/components/sections/HeroSection';
import { SacredMantraSection } from '@/components/sections/SacredMantraSection';
import { LoveStorySection } from '@/components/sections/LoveStorySection';
import { EventDetailsSection } from '@/components/sections/EventDetailsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { FamilySection } from '@/components/sections/FamilySection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full selection:bg-accent-gold selection:text-primary-dark">
      <HeroSection />
      <SacredMantraSection />
      <LoveStorySection />
      <EventDetailsSection />
      <FamilySection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
