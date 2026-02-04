export const WEDDING_DATA = {
  groom: {
    name: "Sujeet Kumar",
    title: "Chi. Sujeet Kumar",
    parents: "Son of Siyaram Yadav, Grandson of Jaylal Yadav",
  },
  bride: {
    name: "Sonali",
    title: "Ayu. Sonali",
    parents: "Daughter of Late Surya Swarup",
  },
  weddingDate: "Wednesday, February 11, 2026",
  venues: {
    residence: {
      name: "Residence",
      address: "594Gha/230 A, Durgapuri, Nilmatha, Lucknow",
      mapQuery: "594Gha/230 A, Durgapuri, Nilmatha, Lucknow",
    },
    wedding: {
      name: "Rajni Marriage Lawn",
      address: "Rajni Marriage Lawn, Ranjeet Nagar, Sector 6 B, Vrindavan, Nilmatha Road, Telibagh, Lucknow",
      mapQuery: "Rajni Marriage Lawn, Ranjeet Nagar, Sector 6 B, Vrindavan, Nilmatha Road, Telibagh, Lucknow",
    },
  },
  events: [
    {
      title: "Tel Pujan",
      date: "Monday, February 9, 2026",
      isoDate: "2026-02-09",
      locationType: "residence", // key to look up in venues
    },
    {
      title: "Matru Pujan",
      date: "Tuesday, February 10, 2026",
      isoDate: "2026-02-10",
      locationType: "residence",
    },
    {
      title: "Wedding Ceremony",
      date: "Wednesday, February 11, 2026",
      isoDate: "2026-02-11",
      locationType: "wedding",
      details: "Baarat Departure: 5:00 PM from Residence",
      startTime: "17:00", // 5 PM for Calendar
    },
    {
      title: "Arrival of Bride (Bahu Aagaman)",
      date: "Thursday, February 12, 2026",
      isoDate: "2026-02-12",
      locationType: "residence",
    },
  ],
  contact: {
    sender: "Siyaram Yadav",
    address: "594Gha/230 A, Durgapuri, Nilmatha, Lucknow",
    phones: ["8318389194", "9918681839", "6306323644"],
  },
};
