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
  allowIndexing: boolean;
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
  legalName: "BoardSight",
  description:
    "BoardSight aus Zürich verbindet Geschäftsleitung, Reporting und Verwaltungsrat. Mit BoardLens entsteht Ihr Board-Reporting automatisch aus der Buchhaltung, KI-gestützt und in der Schweiz gehostet.",
  /** Basis-URL, wird aus NEXT_PUBLIC_SITE_URL bzw. der Vercel-Umgebung gelesen. */
  url: resolveSiteUrl(),
  /**
   * Suchmaschinen erlauben. Gesteuert über NEXT_PUBLIC_ALLOW_INDEXING=true (z. B. in Vercel).
   * Erst einschalten, wenn Impressum und Datenschutzerklärung vollständig sind.
   */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  locale: "de-CH",

  /**
   * Link für den Button „Board-Package“ im Header.
   * Leer = Button sichtbar, aber ohne Ziel (Hinweis „Bald verfügbar“).
   * Gesetzt = Button öffnet die URL im selben Tab.
   */
  boardPackageUrl: "",

  contact: {
    email: "info@boardsight.ch",
    /** Leer = Telefonzeile wird nicht angezeigt. */
    phone: "",
    street: "Zurlindenstrasse 3",
    postalCode: "8003",
    city: "Zürich",
    country: "Schweiz",
  },

  nav: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "BoardLens", href: "/#boardlens" },
    { label: "Preise", href: "/#preise" },
    { label: "Über uns", href: "/#ueber-uns" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontakt", href: "/#kontakt" },
  ],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" },
  ],
};
