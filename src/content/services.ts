import type { IconCard, SectionIntro } from "./types";

export const servicesIntro: SectionIntro = {
  eyebrow: "Leistungen",
  title: "Wir machen Reporting zur Nebensache",
  lead: "Board-Reporting kostet Finanzverantwortliche heute oft mehrere Arbeitstage pro Sitzung: Daten exportieren, in Excel rechnen, in Präsentationen übertragen. Wir automatisieren diesen Weg – und senken den Aufwand um bis zu 80 %.",
};

// Hinweis: Die 80 % sind eine Aussage von BoardSight und sollten intern belegt sein.

export const services: IconCard[] = [
  {
    icon: "zap",
    title: "Laufendes Instant Reporting",
    text: "BoardLens holt die Zahlen täglich aus Ihrer Buchhaltung und berechnet die Kennzahlen automatisch. Der Report ist immer aktuell – nicht erst kurz vor der Sitzung.",
  },
  {
    icon: "sparkles",
    title: "KI-gestützte Auswertungen",
    text: "Eine KI fasst die Entwicklung der Zahlen in wenigen Sätzen zusammen. Der CFO prüft und gibt jede Zusammenfassung frei, bevor der Verwaltungsrat sie sieht.",
  },
  {
    icon: "chat",
    title: "Board-Chat für Verwaltungsräte",
    text: "Verwaltungsräte stellen Fragen zu den Zahlen in normaler Sprache und erhalten verständliche Antworten. Ohne Excel, ohne Rückfragen-Schleifen.",
  },
  {
    icon: "handshake",
    title: "Reporting-Mandat",
    text: "Auf Wunsch übernehmen wir das Mandat als Schnittstelle zwischen Geschäftsleitung, Reporting und Verwaltungsrat – von der Einrichtung bis zur Sitzungsvorbereitung.",
  },
];
