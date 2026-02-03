import type { Metadata } from "next";
import { Playfair_Display, Yatra_One, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const yatra = Yatra_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-yatra",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sacred Digital Vivah: Sujeet & Sonali",
  description: "Inviting you to the sacred union of Sujeet & Sonali. February 11, 2026.",
  openGraph: {
    title: "Sujeet & Sonali | Wedding Invitation",
    description: "Join us in celebrating our sacred union.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${yatra.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-primary-ivory text-primary-maroon font-sans">
        {children}
      </body>
    </html>
  );
}
