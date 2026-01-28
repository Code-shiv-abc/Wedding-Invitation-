import type { Metadata } from "next";
import { Cinzel_Decorative, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Himanshu & Anjali | The Wedding Celebration',
  description: 'Join us as we celebrate our union on April 26, 2026, at the Royal Palace, Jaipur.',
  openGraph: {
    title: 'Himanshu & Anjali Wedding Invitation',
    description: 'You are cordially invited to witness our beginning.',
    url: 'https://himanshu-anjali.vercel.app',
    siteName: 'The Eternal Union',
    images: [
      {
        url: 'https://himanshu-anjali.vercel.app/og-image.jpg', // High-res preview image
        width: 1200,
        height: 630,
        alt: 'Himanshu and Anjali Wedding Invite Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu & Anjali Wedding',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
