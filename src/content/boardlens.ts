import type { IconName } from "@/lib/icons";
import type { SectionIntro } from "./types";

/**
 * BoardLens-Abschnitt. Nur belegte Produktfakten verwenden:
 * - Verbindung zu bexio
 * - automatische Berechnung standardisierter KPIs
 * - Dashboard für den Verwaltungsrat
 * - AI-Zusammenfassungen, die der CFO vor der Veröffentlichung freigibt
 */
export const boardlensIntro: SectionIntro = {
  eyebrow: "Unser Werkzeug: BoardLens",
  title: "Wie wir BoardLens in unserer Arbeit einsetzen",
  lead: "BoardLens verbindet sich mit bexio, berechnet standardisierte Kennzahlen automatisch und stellt sie dem Verwaltungsrat in einem Dashboard bereit. [TODO: Satz zur Rolle von BoardLens in Ihrer Zusammenarbeit ergänzen.]",
};

export type BoardlensFeatureId = "sync" | "kpis" | "board" | "summaries";

export type BoardlensFeature = {
  id: BoardlensFeatureId;
  tab: string;
  icon: IconName;
  title: string;
  text: string;
  points: string[];
};

export const boardlensFeatures: BoardlensFeature[] = [
  {
    id: "sync",
    tab: "Daten-Sync",
    icon: "refresh",
    title: "Verbindung zu bexio",
    text: "BoardLens bezieht die Buchhaltungsdaten direkt aus bexio. [TODO: Nutzen für den Kunden in einem Satz.]",
    points: [
      "Anbindung an bexio",
      "[TODO: Wie wir die Anbindung beim Kunden einrichten]",
    ],
  },
  {
    id: "kpis",
    tab: "KPIs",
    icon: "gauge",
    title: "Standardisierte Kennzahlen, automatisch berechnet",
    text: "Aus den bexio-Daten berechnet BoardLens automatisch einheitliche Kennzahlen.",
    points: [
      "Umsatz, Bruttomarge und EBITDA",
      "Liquidität und Burn Rate",
      "Forderungen und Verbindlichkeiten",
    ],
  },
  {
    id: "board",
    tab: "Board-Ansicht",
    icon: "layoutDashboard",
    title: "Ein Dashboard für den Verwaltungsrat",
    text: "Der Verwaltungsrat sieht die Kennzahlen in einer übersichtlichen Board-Ansicht.",
    points: [
      "Dashboard für den Verwaltungsrat",
      "[TODO: Wie wir das Dashboard in Sitzungen einsetzen]",
    ],
  },
  {
    id: "summaries",
    tab: "Zusammenfassungen",
    icon: "sparkles",
    title: "AI-Zusammenfassungen mit Freigabe durch den CFO",
    text: "BoardLens erstellt AI-Zusammenfassungen der Zahlen. Der CFO prüft und gibt sie frei, bevor der Verwaltungsrat sie sieht.",
    points: [
      "AI-Zusammenfassungen der Kennzahlen",
      "Freigabe durch den CFO vor der Veröffentlichung",
    ],
  },
];

/**
 * Beispielwerte für das Dashboard-Mockup. Reine Platzhalter, keine echten Daten.
 * Beträge in CHF, Anteile als Dezimalzahl.
 */
export const dashboardMockup = {
  placeholderLabel: "Platzhalter: Beispielzahlen, keine echten Daten",
  companyName: "Beispiel AG",
  period: "[TODO: Periode]",
  kpis: [
    { label: "Umsatz", value: 1250000, kind: "chf" },
    { label: "Bruttomarge", value: 0.42, kind: "percent" },
    { label: "EBITDA", value: 180000, kind: "chf" },
    { label: "Liquidität", value: 640000, kind: "chf" },
    { label: "Burn Rate", value: 95000, kind: "chf", suffix: "/ Monat" },
    { label: "Forderungen", value: 310000, kind: "chf" },
    { label: "Verbindlichkeiten", value: 220000, kind: "chf" },
  ],
  revenueBars: [52, 61, 58, 70, 66, 78],
  summary:
    "Beispieltext: Der Umsatz liegt über der Vorperiode, die Liquidität ist stabil. Die Forderungen sind leicht gestiegen.",
} as const;
