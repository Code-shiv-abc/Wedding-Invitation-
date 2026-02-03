import SacredEntry from '@/components/SacredEntry';
import MangalikTimeline from '@/components/MangalikTimeline';
import VenueSection from '@/components/VenueSection';
import ModernUtilities from '@/components/ModernUtilities';
import Footer from '@/components/Footer';
import Mandala from '@/components/sacred/Mandala';
import { weddingData } from '@/lib/weddingData';

export default function MainInvite({ guestName }: { guestName?: string }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `Wedding Ceremony: ${weddingData.groom.name} & ${weddingData.bride.name}`,
    "startDate": "2026-02-11T19:00",
    "endDate": "2026-02-12T05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": weddingData.venue.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": weddingData.venue.address,
        "addressLocality": "Lucknow",
        "addressRegion": "UP",
        "addressCountry": "IN"
      }
    },
    "image": [
      "https://placehold.co/600x600/png"
    ],
    "description": `Join us for the sacred wedding ceremony of ${weddingData.groom.name} and ${weddingData.bride.name}.`,
    "organizer": {
      "@type": "Person",
      "name": weddingData.rsvp.contactName,
      "telephone": weddingData.rsvp.phones[0]
    },
    "performer": [
        {
            "@type": "Person",
            "name": weddingData.groom.name
        },
        {
            "@type": "Person",
            "name": weddingData.bride.name
        }
    ]
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-primary-ivory text-primary-maroon selection:bg-primary-maroon selection:text-primary-ivory">

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sacred Background Layer */}
      <div className="fixed inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Mandala className="w-[150vmax] h-[150vmax] animate-[spin_120s_linear_infinite]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <SacredEntry guestName={guestName} />
        <MangalikTimeline />
        <VenueSection />
        <ModernUtilities />
        <Footer />
      </div>

    </main>
  );
}
