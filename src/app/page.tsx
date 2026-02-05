import { HeroSection } from "@/components/sections/HeroSection";
import { SacredMantraSection } from "@/components/sections/SacredMantraSection";
import { LoveStoryTimeline } from "@/components/sections/LoveStoryTimeline";
import { EventDetails } from "@/components/sections/EventDetails";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/sections/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-canvas text-gold-200 selection:bg-gold-500/30 selection:text-gold-200">
      <Suspense fallback={<div className="h-screen w-full bg-primary-canvas" />}>
        <HeroSection />
      </Suspense>
      <SacredMantraSection />
      <LoveStoryTimeline />
      <EventDetails />
      <RSVPSection />
      <Footer />
    </main>
  );
}
