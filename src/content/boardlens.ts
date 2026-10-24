import type { IconName } from "@/lib/icons";
import type { SectionIntro } from "./types";

/**
 * BoardLens-Abschnitt. Produktfakten aus der BoardLens-Spezifikation.
 * Board-Chat und weitere Buchhaltungssysteme: Verfügbarkeit vor dem Livegang bestätigen.
 */
export const boardlensIntro: SectionIntro = {
  eyebrow: "Unsere Software: BoardLens",
  title: "Der Board-Report, der sich selbst schreibt",
  lead: "BoardLens ist unsere eigene, in der Schweiz entwickelte und gehostete Software. Sie verbindet sich mit Ihrer Buchhaltung, berechnet standardisierte Kennzahlen und stellt sie dem Verwaltungsrat in einer klaren, jederzeit aktuellen Ansicht bereit.",
};

export type BoardlensFeatureId = "sync" | "kpis" | "board" | "summaries" | "chat";

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
    title: "Direkt aus Ihrer Buchhaltung",
    text: "BoardLens bezieht die Zahlen direkt aus Ihrer Buchhaltungssoftware und aktualisiert sie jeden Morgen automatisch. Kein Export, kein Copy-Paste, keine veralteten PDFs.",
    points: [
      "Anbindung an bexio, weitere Systeme wie Abacus auf Anfrage",
      "Tägliche automatische Synchronisation, zusätzlich jederzeit manuell",
      "Verschlüsselte Verbindung, BoardLens liest nur",
    ],
  },
  {
    id: "kpis",
    tab: "KPIs",
    icon: "gauge",
    title: "Standardisierte Kennzahlen, automatisch berechnet",
    text: "Aus Ihren Buchungen berechnet BoardLens einheitliche Kennzahlen, mit Trend zum Vormonat und Verlauf über zwölf Monate.",
    points: [
      "Umsatz, Bruttomarge und EBITDA",
      "Liquidität, Burn Rate und Nettoumlaufvermögen",
      "Offene Forderungen und Verbindlichkeiten",
    ],
  },
  {
    id: "board",
    tab: "Board-Ansicht",
    icon: "layoutDashboard",
    title: "Eine klare Ansicht für den Verwaltungsrat",
    text: "Der Verwaltungsrat sieht dieselben Zahlen wie der CFO: übersichtlich, lesend und bereit für die Projektion in der Sitzung. Rund um die Uhr, von überall.",
    points: [
      "Persönlicher Zugang, keine öffentlichen Links",
      "Der CFO bestimmt, welche Kennzahlen sichtbar sind",
      "Mehrere Gesellschaften in einem Zugang",
    ],
  },
  {
    id: "summaries",
    tab: "Zusammenfassungen",
    icon: "sparkles",
    title: "KI-Zusammenfassungen mit Freigabe durch den CFO",
    text: "BoardLens fasst die Entwicklung in wenigen sachlichen Sätzen zusammen, ohne Spekulationen und Prognosen. Der CFO prüft jede Zusammenfassung und gibt sie frei.",
    points: [
      "Kurz, sachlich, auf Schweizer Hochdeutsch",
      "Sichtbar für den Verwaltungsrat erst nach Freigabe",
      "Souveräne KI, betrieben in der Schweiz",
    ],
  },
  {
    id: "chat",
    tab: "Board-Chat",
    icon: "chat",
    title: "Fragen stellen statt Tabellen lesen",
    text: "Verwaltungsräte fragen BoardLens in normaler Sprache, zum Beispiel nach der Entwicklung der Marge oder den grössten offenen Forderungen, und erhalten eine verständliche Antwort auf Basis der aktuellen Zahlen.",
    points: [
      "Antworten auf Basis Ihrer Buchhaltungsdaten",
      "Daten und KI bleiben in der Schweiz",
      "Ideal zur Vorbereitung auf die nächste Sitzung",
    ],
  },
];

/**
 * Beispielwerte für das Dashboard-Mockup. Reine Platzhalter, keine echten Daten.
 * Beträge in CHF, Anteile als Dezimalzahl.
 */
export const dashboardMockup = {
  placeholderLabel: "Beispielansicht mit fiktiven Zahlen",
  companyName: "Beispiel AG",
  period: "Beispielperiode",
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
  chatQuestion: "Wie hat sich die Bruttomarge entwickelt?",
  chatAnswer: "Beispiel: Die Bruttomarge liegt bei 42 % und damit 2 Prozentpunkte über dem Vormonat.",
} as const;
