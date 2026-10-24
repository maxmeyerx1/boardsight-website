import type { SectionIntro } from "./types";

export const faqIntro: SectionIntro = {
  eyebrow: "FAQ",
  title: "Häufige Fragen",
  lead: "Ihre Frage ist nicht dabei? Schreiben Sie uns – wir antworten persönlich.",
};

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Wo werden meine Daten gehostet?",
    answer:
      "BoardLens und Ihre Daten werden in der Schweiz gehostet. Auch das KI-Modell für Zusammenfassungen und Board-Chat wird in der Schweiz betrieben.",
  },
  {
    question: "Wie gehen Sie mit dem Datenschutz um?",
    answer:
      "Wir bearbeiten Ihre Daten nach dem Schweizer Datenschutzgesetz (DSG) und nur für den Zweck, Ihr Reporting zu erstellen. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "Mit welcher Buchhaltungssoftware funktioniert BoardLens?",
    answer:
      "BoardLens ist an bexio angebunden. Für Abacus und weitere Buchhaltungslösungen sprechen Sie uns an – wir prüfen die Anbindung für Ihr Unternehmen.",
  },
  {
    question: "Wie funktioniert die Anbindung an bexio?",
    answer:
      "Sie erstellen in bexio einen persönlichen Zugangsschlüssel und hinterlegen ihn in BoardLens. Der Schlüssel wird verschlüsselt gespeichert. BoardLens liest die Daten nur und verändert nichts in Ihrer Buchhaltung. Danach werden die Zahlen jeden Morgen automatisch aktualisiert.",
  },
  {
    question: "Wer sieht die KI-Zusammenfassungen?",
    answer:
      "Zuerst nur der CFO. Er prüft jede Zusammenfassung und gibt sie frei. Erst dann wird sie für den Verwaltungsrat sichtbar. Jede Zusammenfassung ist als KI-generiert gekennzeichnet.",
  },
  {
    question: "Wie sicher sind unsere Finanzdaten?",
    answer:
      "Die Verbindung zur Buchhaltung ist verschlüsselt und nur lesend. Der Zugang zu BoardLens erfolgt über persönliche Logins – es gibt keine öffentlichen Links. Der CFO bestimmt, welche Kennzahlen der Verwaltungsrat sieht.",
  },
  {
    question: "Was kostet BoardLens?",
    answer:
      "Wir bieten drei Abos an: Essential, Professional und Mandat. Die Kosten richten sich nach der Anzahl Nutzerinnen und Nutzer. Gerne erstellen wir Ihnen eine Offerte.",
  },
  {
    question: "Wie schnell können wir starten?",
    answer:
      "Die technische Anbindung ist rasch erledigt. Nach der ersten Synchronisation sehen Sie Ihre Kennzahlen. Danach stimmen wir die Kennzahlen gemeinsam ab und laden Ihren Verwaltungsrat ein.",
  },
];
