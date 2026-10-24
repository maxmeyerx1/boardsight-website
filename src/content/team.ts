import type { IconCard, SectionIntro } from "./types";

export const aboutIntro: SectionIntro = {
  eyebrow: "Über uns",
  title: "Gegründet 2026 in Zürich",
  lead: "Hinter BoardSight steht ein Team mit Abschlüssen der HSG und der ETH – Betriebswirtschaft und Technologie an einem Tisch.",
};

/** Gründungsgeschichte, als Absätze unter der Einleitung. */
export const aboutStory: string[] = [
  "Am Anfang stand eine Beobachtung, die wir immer wieder gemacht haben: Unternehmen investieren Monat für Monat viel Zeit und Geld in ein Reporting, das mühsam von Hand zusammengetragen wird – obwohl die Zahlen längst digital vorliegen. Mit heutiger Technologie geht das schneller, genauer und günstiger.",
  "Daraus wurde unser Ziel: das oberste Organ eines Unternehmens zu entlasten. Der Verwaltungsrat soll für jede Entscheidung eine verlässliche Grundlage haben und keine Zeit mit Aufwand verlieren, der nichts zur Entscheidung beiträgt. Was heute oft im VR-Sekretariat aufwendig vorbereitet wird, übernimmt BoardLens automatisch.",
];

export const aboutQuote = {
  text: "Der Verwaltungsrat soll entscheiden – nicht Zahlen suchen.",
  label: "Unser Anspruch",
};

export const values: IconCard[] = [
  {
    icon: "mountain",
    title: "Souverän",
    text: "Daten, Software und KI bleiben in der Schweiz. Sie wissen jederzeit, wo Ihre Finanzdaten liegen.",
  },
  {
    icon: "eye",
    title: "Klar",
    text: "Zahlen zuerst. Wenige, verständliche Kennzahlen statt hundertseitiger Board-Pakete.",
  },
  {
    icon: "timer",
    title: "Schnell",
    text: "Aktuelle Zahlen jeden Morgen. Die Sitzung beginnt mit Entscheidungen, nicht mit der Frage nach dem neuesten Stand.",
  },
];

export type TeamMember = {
  name: string;
  /** Initialen für den Avatar. */
  initials: string;
  role: string;
};

/** Leer = Team-Raster wird nicht angezeigt. */
export const team: TeamMember[] = [];
