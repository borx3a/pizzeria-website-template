import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: `${site.name} — Restaurant Website Template`,
  description: site.description,
  keywords: ["pizza", "pizzeria", "restaurant", "website template", "next.js"],
  openGraph: {
    title: `${site.name} — Restaurant Website Template`,
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [
      { url: "/images/pizza-margherita.jpg", width: 1600, height: 1600 },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f4e3",
};

/**
 * Restaurant structured data, filled in from `data/site.ts`.
 * Add `telephone`, `openingHours` and `sameAs` here once the real details
 * are known — search engines use them for the local business card.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
  name: site.fullName,
  servesCuisine: ["Pizza", "Italian"],
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: site.countryCode,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${grotesk.variable} ${caveat.variable} bg-cream text-ink`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
