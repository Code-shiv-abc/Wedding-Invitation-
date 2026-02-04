'use client';
import { MapPin, Phone, User, Home } from 'lucide-react';
import { triggerHaptic } from '@/utils/interactions';
import { WEDDING_DATA } from '@/utils/wedding-data';
import { getMapUrl } from '@/utils/calendar';

export default function LogisticsSection() {
    const venue = WEDDING_DATA.venues.wedding;
    const mapLink = getMapUrl(venue.mapQuery);

    return (
        <section className="py-24 bg-primary-canvas text-secondary-ivory px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Venue Card */}
                <div className="text-center space-y-6 bg-secondary-surface/[0.92] p-8 rounded-2xl shadow-lg flex flex-col items-center">
                    <MapPin className="w-12 h-12 mx-auto text-accent-icon" />
                    <h3 className="text-2xl font-serif text-typography-gold">The Venue</h3>
                    <div className="font-sans text-lg text-secondary-ivory space-y-2">
                        <p className="font-medium text-xl">{venue.name}</p>
                        <p className="text-sm opacity-90 max-w-[250px] mx-auto">{venue.address}</p>
                    </div>
                    <a
                        href={mapLink}
                        onClick={() => triggerHaptic()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block px-6 py-2 border border-typography-gold text-typography-gold hover:bg-typography-gold hover:text-primary-canvas transition-colors uppercase tracking-widest text-sm font-sans rounded-sm"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Contact Card */}
                 <div className="text-center space-y-6 bg-secondary-surface/[0.92] p-8 rounded-2xl shadow-lg flex flex-col items-center">
                    <User className="w-12 h-12 mx-auto text-accent-icon" />
                    <h3 className="text-2xl font-serif text-typography-gold">Contact & RSVP</h3>

                    <div className="font-sans text-secondary-ivory space-y-4 w-full">
                        <div>
                            <p className="text-typography-muted text-xs uppercase tracking-widest mb-1">Sender</p>
                            <p className="text-lg font-medium">{WEDDING_DATA.contact.sender}</p>
                        </div>

                        <div>
                            <p className="text-typography-muted text-xs uppercase tracking-widest mb-1">Residence</p>
                            <p className="text-sm opacity-90 max-w-[250px] mx-auto flex items-center justify-center gap-2">
                                <Home size={14} className="shrink-0" />
                                {WEDDING_DATA.contact.address}
                            </p>
                        </div>

                        <div className="pt-4 space-y-2">
                            {WEDDING_DATA.contact.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:+91${phone}`}
                                    onClick={() => triggerHaptic()}
                                    className="flex items-center justify-center gap-2 text-typography-gold hover:text-white transition-colors"
                                >
                                    <Phone size={16} />
                                    <span className="text-lg tracking-wider">{phone}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
