import type { Metadata } from "next";
import { Oswald, Kumbh_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import {
  ADDRESS,
  DAY_NAMES,
  GEO,
  HOURS,
  PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL,
  formatHourIso,
} from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "gym Milton Keynes",
    "gym near Milton Keynes",
    "weights gym",
    "cardio gym",
    "functional training",
    "free weights gym",
    "air conditioned gym",
    "Limitless Gym MK",
    "gym Paulerspury",
    "gym Towcester",
    "gym Northants",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Limitless Gym MK logo over the weights floor",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Gym",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  "@id": `${SITE_URL}/#gym`,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  priceRange: "££",
  telephone: PHONE.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.streetAddress,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => DAY_NAMES[d]),
    opens: formatHourIso(h.open),
    closes: formatHourIso(h.close),
  })),
  amenityFeature: [
    "Air conditioning",
    "Changing rooms",
    "Lockers",
    "Toilets",
    "Free parking",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  sameAs: [SOCIAL.instagram, SOCIAL.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${kumbhSans.variable}`}>
      <body className="bg-neutral text-white font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <CookieBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
