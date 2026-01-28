'use client';
import { MapPin, MessageCircle } from 'lucide-react';
import { triggerHaptic } from '@/utils/interactions';

export default function LogisticsSection() {
    const mapLink = "https://www.google.com/maps/search/?api=1&query=The+Grand+Venue,+India";
    const whatsappLink = "https://wa.me/?text=Excited+for+the+wedding+of+Himanshu+and+Anjali!";

    return (
        <section className="py-24 bg-secondary-ivory text-primary-canvas px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center space-y-6">
                    <MapPin className="w-12 h-12 mx-auto text-primary-canvas" />
                    <h3 className="text-2xl font-serif text-primary-canvas">The Venue</h3>
                    <p className="font-sans text-lg">
                        The Grand Venue<br/>
                        New Delhi, India
                    </p>
                    <a
                        href={mapLink}
                        onClick={() => triggerHaptic()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 border border-primary-canvas text-primary-canvas hover:bg-primary-canvas hover:text-secondary-ivory transition-colors uppercase tracking-widest text-sm font-sans"
                    >
                        Get Directions
                    </a>
                </div>

                 <div className="text-center space-y-6">
                    <MessageCircle className="w-12 h-12 mx-auto text-primary-canvas" />
                    <h3 className="text-2xl font-serif text-primary-canvas">RSVP & Support</h3>
                    <p className="font-sans text-lg">
                        Have questions or need assistance?<br/>
                        Reach out to our wedding concierge.
                    </p>
                    <a
                        href={whatsappLink}
                        onClick={() => triggerHaptic()}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="inline-block px-6 py-2 border border-primary-canvas text-primary-canvas hover:bg-primary-canvas hover:text-secondary-ivory transition-colors uppercase tracking-widest text-sm font-sans"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
