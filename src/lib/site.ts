// Single source of truth for business details used across the site
// (components, JSON-LD, privacy page). Edit here, not in components.

export const SITE_URL = "https://www.limitless-gym-mk.com";

// Shared by page metadata, Open Graph/Twitter, JSON-LD and the web manifest.
// Keep the description to claims made on the page (equipment, amenities, parking).
export const SITE_NAME = "Limitless Gym MK";
export const SITE_TITLE = `${SITE_NAME} | Gym near Milton Keynes`;
export const SITE_DESCRIPTION =
  "Weights, cardio and functional gym near Milton Keynes. Dumbbells up to 80kg, air conditioning, changing rooms and free parking. Everyone welcome.";

// Clubwise signup. Facebook click-id (`fbclid`) tracking params stripped.
export const JOIN_URL = "https://secure11.clubwise.com/limitlessgymmk/pos.asp";

export const PHONE = {
  display: "07711 240929",
  tel: "+447711240929",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/limitless_gym_mk/",
  instagramHandle: "@limitless_gym_mk",
  facebook: "https://www.facebook.com/korecovery",
  whatsapp: "https://wa.me/447711240929",
};

export const ADDRESS = {
  lines: ["Unit 8, The Homestead", "Watling Street, Paulerspury", "Northants, NN12 6LH"],
  streetAddress: "Unit 8, The Homestead, Watling Street",
  locality: "Paulerspury",
  region: "Northants",
  postalCode: "NN12 6LH",
  country: "GB",
};

// Drives the map embed, directions link and JSON-LD.
export const GEO = { latitude: 52.096594, longitude: -0.923767 };

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=17&output=embed`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${GEO.latitude},${GEO.longitude}`;

// Section anchors in page order. Used by Navbar and Footer.
export const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Inside", href: "/#inside" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

// `days` use JS getDay() numbering (0 = Sunday). `open`/`close` are 24h whole hours.
export const HOURS = [
  { label: "Monday – Friday", short: "Mon–Fri", days: [1, 2, 3, 4, 5], open: 7, close: 21 },
  { label: "Saturday", short: "Sat", days: [6], open: 9, close: 20 },
  { label: "Sunday", short: "Sun", days: [0], open: 9, close: 17 },
];

/** 7 -> "7am", 21 -> "9pm" */
export function formatHour(hour: number) {
  return `${hour % 12 || 12}${hour < 12 ? "am" : "pm"}`;
}

/** 24h "HH:00" for schema.org */
export function formatHourIso(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}
