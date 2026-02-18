export function createGoogleCalendarUrl(event: {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}) {
  const { title, date, time, venue, description } = event;

  // Parse Date: "April 26, 2026"
  const dateParts = date.replace(/,/g, '').split(' ');
  const monthName = dateParts[0];
  const day = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const months: { [key: string]: number } = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };
  const monthIndex = months[monthName];

  // Parse Time: "10:00 AM"
  const timeParts = time.split(' ');
  const timeValue = timeParts[0]; // "10:00"
  const meridian = timeParts[1]; // "AM"

  const [hoursStr, minutesStr] = timeValue.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (meridian === 'PM' && hours !== 12) {
    hours += 12;
  } else if (meridian === 'AM' && hours === 12) {
    hours = 0;
  }

  // Create Date objects using local time components
  // This allows correct rollover handling (e.g. April 30 + 1 day -> May 1)
  const startDate = new Date(year, monthIndex, day, hours, minutes, 0);

  // Default duration: 3 hours
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);

  // Helper to format: YYYYMMDDTHHMMSS
  const formatDateTime = (d: Date) => {
    const y = d.getFullYear();
    const m = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const h = d.getHours().toString().padStart(2, '0');
    const min = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    return `${y}${m}${day}T${h}${min}${s}`;
  };

  const startDateTime = formatDateTime(startDate);
  const endDateTime = formatDateTime(endDate);

  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startDateTime}/${endDateTime}`,
    details: description,
    location: venue,
    ctz: 'Asia/Kolkata' // Enforce IST timezone interpretation
  });

  return `${baseUrl}?${params.toString()}`;
}
