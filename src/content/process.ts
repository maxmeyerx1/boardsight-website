import type { SectionIntro } from "./types";

export const processIntro: SectionIntro = {
  eyebrow: "So arbeiten wir",
  title: "[TODO: Überschrift zum Vorgehen]",
  lead: "[TODO: Ein Satz, wie eine Zusammenarbeit typischerweise abläuft.]",
};

export type ProcessStep = {
  title: string;
  text: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "[TODO: Schritt 1, z. B. Erstgespräch]",
    text: "[TODO: Beschreibung von Schritt 1.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
  {
    title: "[TODO: Schritt 2, z. B. Analyse]",
    text: "[TODO: Beschreibung von Schritt 2.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
  {
    title: "[TODO: Schritt 3, z. B. bexio anbinden]",
    text: "[TODO: Beschreibung von Schritt 3.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
  {
    title: "[TODO: Schritt 4, z. B. KPIs abstimmen]",
    text: "[TODO: Beschreibung von Schritt 4.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
  {
    title: "[TODO: Schritt 5, z. B. Board-Reporting]",
    text: "[TODO: Beschreibung von Schritt 5.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
  {
    title: "[TODO: Schritt 6, z. B. Laufende Begleitung]",
    text: "[TODO: Beschreibung von Schritt 6.]",
    points: ["[TODO: Ergebnis oder Detail]", "[TODO: Ergebnis oder Detail]"],
  },
];
