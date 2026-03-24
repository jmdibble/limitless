import type { Metadata } from "next";
import { Oswald, Archivo } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limitlessgymmk.co.uk"),
  title: "Limitless Gym MK | Weights Gym in Milton Keynes",
  description:
    "No gimmicks. No excuses. Just iron. Limitless Gym MK is a weights gym near Milton Keynes for serious lifters. Dumbbells up to 80kg, protein shakes on site, and a community built to train.",
  keywords: [
    "gym Milton Keynes",
    "weights gym MK",
    "powerlifting gym",
    "bodybuilding Milton Keynes",
    "Limitless Gym MK",
    "gym Paulerspury",
    "gym Towcester",
    "gym Northants",
    "free weights gym",
  ],
  openGraph: {
    title: "Limitless Gym MK | Weights Gym in Milton Keynes",
    description:
      "No machines. No nonsense. Just iron. Milton Keynes' premier weights gym.",
    siteName: "Limitless Gym MK",
    images: [
      {
        url: "/limitless_gym_mk_logo.png",
        width: 1080,
        height: 1080,
        alt: "Limitless Gym MK Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless Gym MK | Weights Gym in Milton Keynes",
    description: "No machines. No nonsense. Just iron.",
    images: ["/limitless_gym_mk_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${archivo.variable}`}>
      <body className="bg-neutral text-white font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Gym",
              name: "Limitless Gym MK",
              description:
                "Weights gym near Milton Keynes for serious lifters. Dumbbells up to 80kg, protein shakes on site, and a community built to train.",
              url: "https://www.limitlessgymmk.co.uk",
              telephone: "+447711240929",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 2, The Homestead, Watling Street",
                addressLocality: "Paulerspury",
                addressRegion: "Northants",
                postalCode: "NN12 6LH",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.1275,
                longitude: -0.9786,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/limitless_gym_mk/",
                "https://www.facebook.com/korecovery",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
