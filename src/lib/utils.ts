import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateGoogleCalendarLink(event: {
  title: string;
  startDate: string; // ISO format or parsable date string
  endDate: string;
  details: string;
  location: string;
}) {
    // Basic implementation for 2026-02-11 specific format as per requirements
    // In a full app, we'd parse dates properly.
    // The previous implementation in ModernUtilities was hardcoded which is fine for a static invite.
    // I will keep the hardcoded logic there or move it here.
    // Let's make this generic enough.
    const start = event.startDate.replace(/[-:]/g, '');
    const end = event.endDate.replace(/[-:]/g, '');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
}
