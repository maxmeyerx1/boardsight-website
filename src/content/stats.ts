import type { SectionIntro } from "./types";

export const statsIntro: SectionIntro = {
  eyebrow: "In Zahlen",
  title: "Weniger Aufwand, mehr Überblick",
  lead: "Was BoardLens für Ihr Board-Reporting bedeutet.",
};

export type Stat = {
  /** Wird animiert hochgezählt. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Optionale Zusatzzeile unter dem Label. */
  note?: string;
};

// Hinweis: Die 80 % sind eine Aussage von BoardSight und sollten intern belegt sein.
export const stats: Stat[] = [
  { value: 80, prefix: "bis zu ", suffix: " %", label: "weniger Aufwand für das Board-Reporting" },
  { value: 12, label: "Kennzahlen, automatisch berechnet" },
  { value: 24, suffix: "/7", label: "Zugriff auf Ihre aktuellen Zahlen" },
];
