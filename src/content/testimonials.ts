import type { SectionIntro } from "./types";

export const testimonialsIntro: SectionIntro = {
  eyebrow: "Referenzen",
  title: "[TODO: Überschrift Referenzen]",
  lead: "[TODO: Nur echte Erfahrungsberichte mit schriftlicher Freigabe verwenden.]",
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "[TODO: Erfahrungsbericht 1 – Zitat einer Kundin oder eines Kunden]",
    name: "[TODO: Name]",
    role: "[TODO: Funktion]",
    company: "[TODO: Firma]",
  },
  {
    quote: "[TODO: Erfahrungsbericht 2 – Zitat einer Kundin oder eines Kunden]",
    name: "[TODO: Name]",
    role: "[TODO: Funktion]",
    company: "[TODO: Firma]",
  },
  {
    quote: "[TODO: Erfahrungsbericht 3 – Zitat einer Kundin oder eines Kunden]",
    name: "[TODO: Name]",
    role: "[TODO: Funktion]",
    company: "[TODO: Firma]",
  },
];
