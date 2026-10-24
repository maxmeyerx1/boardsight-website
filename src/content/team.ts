import type { IconCard, SectionIntro } from "./types";

export const aboutIntro: SectionIntro = {
  eyebrow: "Über uns",
  title: "BoardSight – gegründet 2026 in Zürich",
  lead: "Wir entwickeln und betreiben BoardLens selbst, in der Schweiz. Unser Ziel: Verwaltungsräte sollen jederzeit wissen, wo ihr Unternehmen steht – ohne dass die Geschäftsleitung dafür Tage investieren muss.",
};

export const values: IconCard[] = [
  {
    icon: "mountain",
    title: "Souverän",
    text: "Daten, Software und KI bleiben in der Schweiz. Sie wissen jederzeit, wo Ihre Finanzdaten liegen.",
  },
  {
    icon: "eye",
    title: "Klar",
    text: "Zahlen zuerst. Wenige, verständliche Kennzahlen statt hundertseitiger Board-Pakete.",
  },
  {
    icon: "timer",
    title: "Schnell",
    text: "Aktuelle Zahlen jeden Morgen. Die Sitzung beginnt mit Entscheidungen, nicht mit der Frage nach dem neuesten Stand.",
  },
];

export type TeamMember = {
  name: string;
  /** Initialen für den Avatar. */
  initials: string;
  role: string;
};

/** Leer = Team-Raster wird nicht angezeigt. */
export const team: TeamMember[] = [];
