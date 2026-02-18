import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Optimize Playfair Display: Subset 'latin', Use 'swap', Preload Critical Weights Only
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"], // Explicit weights
});

// Optimize Inter: Subset 'latin', Use 'swap', Preload Critical Weights Only
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"], // Explicit weights (Light, Regular, Medium)
});

export const metadata: Metadata = {
  title: "The Eternal Union: Himanshu & Anjali",
  description: "With the blessings of the divine, Himanshu and Anjali invite you to celebrate their sacred union. April 26, 2026 - Royal Palace, Jaipur.",
  applicationName: "Himanshu & Anjali Wedding",
  keywords: ["Himanshu", "Anjali", "Wedding", "Jaipur", "Royal Palace", "Invitation"],
  authors: [{ name: "Himanshu & Anjali" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himanshuanjali.com", // Placeholder canonical
    title: "Himanshu & Anjali | The Eternal Union",
    description: "Join us in celebrating our sacred matrimony. April 26, 2026, Jaipur.",
    siteName: "Himanshu & Anjali Wedding",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Himanshu & Anjali Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu & Anjali | The Eternal Union",
    description: "Join us in celebrating our sacred matrimony. April 26, 2026, Jaipur.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // Assuming default or will generate
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://himanshuanjali.com"), // Base URL for OG images
};

// JSON-LD Structured Data for Event
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Wedding of Himanshu & Anjali",
  "startDate": "2026-04-26T10:00",
  "endDate": "2026-04-26T23:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Royal Palace",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    }
  },
  "image": [
    "https://himanshuanjali.com/opengraph-image.png"
  ],
  "description": "With the blessings of the divine, Himanshu and Anjali invite you to celebrate their sacred union.",
  "organizer": {
    "@type": "Person",
    "name": "Himanshu & Anjali"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-primary-dark text-ivory-light`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
