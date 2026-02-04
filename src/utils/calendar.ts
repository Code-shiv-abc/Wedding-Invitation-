import { WEDDING_DATA } from './wedding-data';

type EventDetails = {
  title: string;
  description: string;
  location: string;
  startTime: string; // YYYYMMDDTHHMMSS format
  endTime: string;   // YYYYMMDDTHHMMSS format
};

export function generateICS(event: EventDetails) {
  const { title, description, location, startTime, endTime } = event;

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SujeetSonali//Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${startTime}
DTEND:${endTime}
LOCATION:${location}
DESCRIPTION:${description}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT2H
DESCRIPTION:Wedding Event Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`.trim();
}

export function getGoogleCalendarUrl(event: EventDetails) {
   const { title, description, location, startTime, endTime } = event;
   const baseUrl = "https://calendar.google.com/calendar/render";
   const params = new URLSearchParams({
     action: "TEMPLATE",
     text: title,
     dates: `${startTime}/${endTime}`,
     details: description,
     location: location,
   });
   return `${baseUrl}?${params.toString()}`;
}

export function getMapUrl(query: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
