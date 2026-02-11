import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { SacredMantraSection } from '@/components/sections/SacredMantraSection';
import { LoveStorySection } from '@/components/sections/LoveStorySection';
import { EventDetailsSection } from '@/components/sections/EventDetailsSection';
import { FamilySection } from '@/components/sections/FamilySection';
import { Footer } from '@/components/layout/Footer';
import { getGuestDetails } from '@/lib/guest-data';

// Dynamic Import for heavy/below-the-fold components
const GallerySection = dynamic(() => import('@/components/sections/GallerySection').then(mod => mod.GallerySection), {
  loading: () => <div className="h-96 w-full bg-primary-charcoal/20 animate-pulse" />,
  ssr: true, // Keep SSR for SEO/Structure, but JS loads later
});

const RSVPSection = dynamic(() => import('@/components/sections/RSVPSection').then(mod => mod.RSVPSection), {
  loading: () => <div className="h-96 w-full bg-primary-charcoal/20 animate-pulse" />,
  ssr: true,
});

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const n = searchParams.n;
  const guestName = Array.isArray(n) ? n[0] : n;
  const initialGuest = guestName ? await getGuestDetails(guestName) : null;

  return (
    <main className="min-h-screen w-full selection:bg-accent-gold selection:text-primary-dark">
      <HeroSection initialGuest={initialGuest} />
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
