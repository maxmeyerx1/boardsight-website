/**
 * Zentrale Konfiguration der Webseite.
 * Werte mit `[TODO: ...]` vor dem Livegang ersetzen.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export type NavItem = { label: string; href: string };

type SiteConfig = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  locale: string;
  boardPackageUrl: string;
  contact: {
    email: string;
    phone: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  nav: NavItem[];
  legalNav: NavItem[];
};

export const siteConfig: SiteConfig = {
  /** Anzeigename im Header, Footer, Titel und OG-Bild. */
  name: "BoardSight",
  /** Rechtlicher Name, z. B. für Impressum und strukturierte Daten. */
  legalName: "[TODO: Rechtlicher Firmenname, z. B. Muster AG]",
  description:
    "[TODO: Kurzbeschreibung der Firma in einem Satz, z. B. für Suchmaschinen und Social Media]",
  /** Basis-URL, wird aus NEXT_PUBLIC_SITE_URL bzw. der Vercel-Umgebung gelesen. */
  url: resolveSiteUrl(),
  locale: "de-CH",

  /**
   * Link für den Button „Board-Package“ im Header.
   * Leer = Button sichtbar, aber ohne Ziel (Hinweis „Bald verfügbar“).
   * Gesetzt = Button öffnet die URL im selben Tab.
   */
  boardPackageUrl: "",

  contact: {
    /** Leer lassen, solange keine Adresse feststeht. */
    email: "",
    phone: "",
    street: "[TODO: Strasse und Nr.]",
    postalCode: "[TODO: PLZ]",
    city: "[TODO: Ort]",
    country: "Schweiz",
  },

  nav: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Über uns", href: "/#ueber-uns" },
    { label: "BoardLens", href: "/#boardlens" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontakt", href: "/#kontakt" },
  ],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" },
  ],
};
