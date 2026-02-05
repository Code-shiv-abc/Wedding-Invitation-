export const WEDDING_DETAILS = {
  title: "The Eternal Union: Himanshu & Anjali",
  description: "We cordially invite you to celebrate the wedding of Himanshu & Anjali. Your presence will add to our joy.",
  location: "Royal Palace, Jaipur",
  startTime: "20260426T100000",
  endTime: "20260426T140000",
};

export function generateICS() {
  const { title, description, location, startTime, endTime } = WEDDING_DETAILS;

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//HimanshuAnjali//Wedding//EN
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
DESCRIPTION:Wedding Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`.trim();
}

export function getGoogleCalendarUrl() {
   const { title, description, location, startTime, endTime } = WEDDING_DETAILS;
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
