import type { SectionIntro } from "./types";

export const faqIntro: SectionIntro = {
  eyebrow: "FAQ",
  title: "Häufige Fragen",
  lead: "[TODO: Einleitender Satz zu den häufigen Fragen.]",
};

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Wie gehen Sie mit dem Datenschutz um?",
    answer: "[TODO: Antwort zum Datenschutz, z. B. Bezug zum revidierten Datenschutzgesetz (revDSG).]",
  },
  {
    question: "Werden die Daten in der Schweiz gehostet?",
    answer: "[TODO: Antwort zum Hosting-Standort. Nur bestätigte Angaben verwenden.]",
  },
  {
    question: "Wie funktioniert die Anbindung an bexio?",
    answer: "[TODO: Antwort zur bexio-Anbindung, z. B. Ablauf der Einrichtung und benötigte Berechtigungen.]",
  },
  {
    question: "Wer sieht die AI-Zusammenfassungen?",
    answer:
      "Der CFO prüft und gibt jede AI-Zusammenfassung frei, bevor sie veröffentlicht wird. [TODO: Antwort ergänzen.]",
  },
  {
    question: "Was kostet die Zusammenarbeit?",
    answer: "[TODO: Antwort zu Kosten und Preismodell.]",
  },
  {
    question: "Wie sicher sind unsere Finanzdaten?",
    answer: "[TODO: Antwort zu Sicherheitsmassnahmen. Keine Zertifikate nennen, die nicht vorliegen.]",
  },
  {
    question: "Brauchen wir bexio, um mit Ihnen zu arbeiten?",
    answer: "[TODO: Antwort, ob die Zusammenarbeit auch ohne bexio möglich ist.]",
  },
  {
    question: "Wie schnell können wir starten?",
    answer: "[TODO: Antwort zum typischen Zeitrahmen bis zum ersten Board-Reporting.]",
  },
];
