import type { SectionIntro } from "./types";

export const statsIntro: SectionIntro = {
  eyebrow: "Kennzahlen",
  title: "[TODO: Überschrift Kennzahlen]",
  lead: "[TODO: Nur belegbare Werte eintragen. Die Zahlen unten sind Platzhalter.]",
};

export type Stat = {
  /** Platzhalterwert (100 = Dummy), wird animiert hochgezählt. Durch echten, belegbaren Wert ersetzen. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  todo: string;
};

export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "[TODO: Kennzahl 1]", todo: "[TODO: echter Wert]" },
  { value: 100, label: "[TODO: Kennzahl 2]", todo: "[TODO: echter Wert]" },
  { value: 100, suffix: " %", label: "[TODO: Kennzahl 3]", todo: "[TODO: echter Wert]" },
];
