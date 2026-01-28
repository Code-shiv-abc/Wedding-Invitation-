import type { Metadata } from "next";
import { Cinzel_Decorative, Montserrat, Tiro_Devanagari_Hindi, Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import MusicPlayer from "@/components/MusicPlayer";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const tiro = Tiro_Devanagari_Hindi({
  weight: ["400"],
  subsets: ["devanagari"],
  variable: "--font-tiro",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Eternal Union: Himanshu & Anjali",
  description: "World-Class Luxury Digital Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} ${tiro.variable} ${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <BackgroundAnimation />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
