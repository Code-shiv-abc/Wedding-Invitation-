import type { Metadata } from "next";
import { Cinzel_Decorative, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Eternal Union: Himanshu & Anjali",
    template: "%s | Himanshu & Anjali"
  },
  description: "We cordially invite you to celebrate the wedding of Himanshu & Anjali. April 26, 2026, Royal Palace, Jaipur.",
  keywords: ["wedding", "Himanshu", "Anjali", "Jaipur", "Royal Wedding"],
  authors: [{ name: "Himanshu & Anjali" }],
  openGraph: {
    title: "The Eternal Union: Himanshu & Anjali",
    description: "Join us in celebrating the sacred union of Himanshu & Anjali.",
    url: 'https://himanshu-anjali-wedding.com',
    siteName: 'Himanshu & Anjali Wedding',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://himanshu-anjali-wedding.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himanshu & Anjali Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Eternal Union: Himanshu & Anjali",
    description: "Join us in celebrating the sacred union.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
