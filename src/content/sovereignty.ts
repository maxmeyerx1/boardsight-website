import type { IconCard, SectionIntro } from "./types";

export const sovereigntyIntro: SectionIntro = {
  eyebrow: "Schweizer Souveränität",
  title: "Ihre Finanzdaten bleiben in der Schweiz",
  lead: "Finanzzahlen gehören zu den sensibelsten Daten eines Unternehmens. Deshalb setzen wir konsequent auf Souveränität: Software, Daten und KI – alles in der Schweiz.",
};

export const sovereigntyPillars: IconCard[] = [
  {
    icon: "server",
    title: "Hosting in der Schweiz",
    text: "BoardLens und Ihre Daten werden in der Schweiz gehostet.",
  },
  {
    icon: "brain",
    title: "Souveräne KI",
    text: "Zusammenfassungen und Board-Chat basieren auf einem in der Schweiz entwickelten, offenen Sprachmodell, betrieben in der Schweiz.",
  },
  {
    icon: "clock",
    title: "Zugriff rund um die Uhr",
    text: "Ihr Verwaltungsrat sieht die aktuellen Zahlen jederzeit – 24 Stunden am Tag, 7 Tage die Woche.",
  },
  {
    icon: "key",
    title: "Kontrolle bei Ihnen",
    text: "Verschlüsselte, nur lesende Verbindung zur Buchhaltung. Persönliche Zugänge statt öffentlicher Links, Freigabe durch den CFO.",
  },
];

/** Kurze Merkmale im Badge neben den Säulen. */
export const sovereigntyBadge = {
  title: "Swiss made Software",
  lines: ["Entwickelt in Zürich", "Gehostet in der Schweiz", "Souveräne KI"],
};
