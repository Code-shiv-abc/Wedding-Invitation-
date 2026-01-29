'use client';
import { MapPin, MessageCircle } from 'lucide-react';
import { triggerHaptic } from '@/utils/interactions';
import { useGuestRecognition } from '@/utils/guest';

export default function LogisticsSection() {
    const guestName = useGuestRecognition();
    const mapLink = "https://www.google.com/maps/search/?api=1&query=Royal+Palace,+Jaipur";

    const message = `Namaste, this is ${guestName}. I am excited for the wedding of Himanshu and Anjali!`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-24 bg-primary-canvas text-secondary-ivory px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center space-y-6 bg-secondary-surface/[0.92] p-8 rounded-2xl shadow-lg">
                    <MapPin className="w-12 h-12 mx-auto text-accent-icon" />
                    <h3 className="text-2xl font-serif text-typography-gold">The Venue</h3>
                    <p className="font-sans text-lg text-secondary-ivory">
                        Royal Palace<br/>
                        Jaipur, India
                    </p>
                    <a
                        href={mapLink}
                        onClick={() => triggerHaptic()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 border border-typography-gold text-typography-gold hover:bg-typography-gold hover:text-primary-canvas transition-colors uppercase tracking-widest text-sm font-sans"
                    >
                        Get Directions
                    </a>
                </div>

                 <div className="text-center space-y-6 bg-secondary-surface/[0.92] p-8 rounded-2xl shadow-lg">
                    <MessageCircle className="w-12 h-12 mx-auto text-accent-icon" />
                    <h3 className="text-2xl font-serif text-typography-gold">RSVP & Support</h3>
                    <p className="font-sans text-lg text-secondary-ivory">
                        Have questions or need assistance?<br/>
                        Reach out to our wedding concierge.
                    </p>
                    <a
                        href={whatsappLink}
                        onClick={() => triggerHaptic()}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="inline-block px-6 py-2 border border-typography-gold text-typography-gold hover:bg-typography-gold hover:text-primary-canvas transition-colors uppercase tracking-widest text-sm font-sans"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
