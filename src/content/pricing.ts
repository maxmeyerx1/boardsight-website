import type { SectionIntro } from "./types";

export const pricingIntro: SectionIntro = {
  eyebrow: "Preise",
  title: "Drei Abos, abgerechnet pro Nutzer",
  lead: "Die Kosten richten sich nach der Anzahl Nutzerinnen und Nutzer. Gerne erstellen wir Ihnen eine Offerte, die zu Ihrem Unternehmen passt.",
};

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

// Vorschlag von Claude: Abo-Namen, Abgrenzung und Leistungen vor dem Livegang prüfen.
export const plans: Plan[] = [
  {
    name: "Essential",
    tagline: "Für Unternehmen, die ihr Board-Reporting automatisieren wollen.",
    price: "Auf Anfrage",
    priceNote: "pro Nutzer und Monat",
    features: [
      "Anbindung Ihrer Buchhaltung",
      "12 Kennzahlen, täglich aktualisiert",
      "Board-Ansicht für den Verwaltungsrat",
      "KI-Zusammenfassungen mit Freigabe durch den CFO",
      "Hosting in der Schweiz",
      "Support per E-Mail",
    ],
    cta: { label: "Offerte anfragen", href: "#kontakt" },
  },
  {
    name: "Professional",
    tagline: "Für Verwaltungsräte, die tiefer in die Zahlen einsteigen.",
    price: "Auf Anfrage",
    priceNote: "pro Nutzer und Monat",
    features: [
      "Alles aus Essential",
      "Board-Chat für Verwaltungsräte",
      "Individuelle Kontenzuordnung der Kennzahlen",
      "Mehrere Gesellschaften in einem Zugang",
      "Einrichtung durch BoardSight",
      "Priorisierter Support",
    ],
    cta: { label: "Offerte anfragen", href: "#kontakt" },
    highlighted: true,
  },
  {
    name: "Mandat",
    tagline: "Für Unternehmen, die das Board-Reporting ganz abgeben möchten.",
    price: "Auf Anfrage",
    priceNote: "pro Nutzer und Monat, zuzüglich Mandat",
    features: [
      "Alles aus Professional",
      "BoardSight als Schnittstelle zwischen Geschäftsleitung, Reporting und Verwaltungsrat",
      "Vorbereitung der Verwaltungsratssitzungen",
      "Kommentierung der Zahlen für den Verwaltungsrat",
      "Persönliche Ansprechperson",
    ],
    cta: { label: "Gespräch vereinbaren", href: "#kontakt" },
  },
];

export const pricingNote = "Alle Preise in CHF, zuzüglich MWST. Konditionen auf Anfrage.";
