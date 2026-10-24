import type { SectionIntro } from "./types";

export const processIntro: SectionIntro = {
  eyebrow: "So arbeiten wir",
  title: "In wenigen Schritten zum laufenden Board-Reporting",
  lead: "Wir begleiten Sie vom ersten Gespräch bis zur Verwaltungsratssitzung und bleiben auch danach Ihr Ansprechpartner.",
};

export type ProcessStep = {
  title: string;
  text: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Erstgespräch",
    text: "Wir lernen Ihr Unternehmen, Ihr heutiges Reporting und die Erwartungen Ihres Verwaltungsrats kennen.",
    points: ["Bestandesaufnahme Ihres Reportings", "Klärung von Umfang und Abo"],
  },
  {
    title: "Buchhaltung anbinden",
    text: "BoardLens wird mit Ihrer Buchhaltungssoftware verbunden. Die Verbindung ist verschlüsselt, BoardLens liest die Daten nur aus.",
    points: ["Sichere, nur lesende Verbindung", "Erste Synchronisation Ihrer Daten"],
  },
  {
    title: "Kennzahlen festlegen",
    text: "Wir stimmen die Kennzahlen und die Kontenzuordnung auf Ihr Unternehmen ab.",
    points: ["Umsatz, Marge, EBITDA, Liquidität und mehr", "Auswahl, was der Verwaltungsrat sieht"],
  },
  {
    title: "Verwaltungsrat einladen",
    text: "Die Mitglieder Ihres Verwaltungsrats erhalten einen persönlichen Zugang zur Board-Ansicht.",
    points: ["Persönlicher Login, keine öffentlichen Links", "Nur lesender Zugriff"],
  },
  {
    title: "Laufendes Reporting",
    text: "Ab jetzt aktualisieren sich die Zahlen täglich. KI-Zusammenfassungen gehen erst nach Freigabe durch den CFO an den Verwaltungsrat.",
    points: ["Tägliche Aktualisierung", "Freigabe durch den CFO"],
  },
  {
    title: "Begleitung und Weiterentwicklung",
    text: "Wir unterstützen Sie bei der Vorbereitung der Sitzungen und entwickeln Ihr Reporting gemeinsam weiter.",
    points: ["Persönliche Ansprechperson", "Im Mandat: Sitzungsvorbereitung durch BoardSight"],
  },
];
