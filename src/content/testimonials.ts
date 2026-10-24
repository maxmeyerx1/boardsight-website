import type { SectionIntro } from "./types";

export const testimonialsIntro: SectionIntro = {
  eyebrow: "Referenzen",
  title: "Was unsere Kunden sagen",
  lead: "Nur echte Erfahrungsberichte mit schriftlicher Freigabe verwenden.",
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/** Leer = Abschnitt wird nicht angezeigt. Einträge erst mit Freigabe ergänzen. */
export const testimonials: Testimonial[] = [];
