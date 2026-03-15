import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanket Singh — AI Creator",
  description:
    "AI-generated films, anime, and visual worlds. Creator portfolio showcasing Ashtar, Tippo, and the Atelier creative engine.",
  openGraph: {
    title: "Sanket Singh — AI Creator",
    description:
      "AI-generated films, anime, and visual worlds.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanket Singh — AI Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Singh — AI Creator",
    description:
      "AI-generated films, anime, and visual worlds.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} ${caveat.variable} antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
