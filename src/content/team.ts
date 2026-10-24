import type { IconCard, SectionIntro } from "./types";

export const aboutIntro: SectionIntro = {
  eyebrow: "Über uns",
  title: "Eine Kombination aus Akademie und Praxis",
  lead: "Unser Team verbindet die Ausbildung an der HSG und der ETH mit eigener Erfahrung im Verwaltungsrat.",
};

/** Hintergrund des Teams, als Absätze unter der Einleitung. */
export const aboutStory: string[] = [
  "Aus unserer Tätigkeit im VR-Sekretariat wissen wir, wie viel Zeit und Geld in ein Reporting fliesst, das mühsam von Hand zusammengetragen wird, obwohl die Zahlen längst digital vorliegen. Wir kennen jeden Schritt der Sitzungsvorbereitung und wissen, wo dabei Zeit verloren geht.",
  "Unsere Ausbildung an der HSG und der ETH hat uns gelehrt, die Rolle eines Verwaltungsratsmitglieds richtig einzuschätzen: Es trägt die oberste Verantwortung, muss heute schnell und beweglich entscheiden und braucht dafür eine verlässliche Grundlage.",
  "Genau hier setzen wir an. Was heute im VR-Sekretariat aufwendig vorbereitet wird, übernimmt BoardLens automatisch. So gewinnt der Verwaltungsrat Zeit für das Wesentliche: gute Entscheidungen.",
];

export const aboutQuote = {
  text: "Der Verwaltungsrat soll entscheiden, nicht Zahlen suchen.",
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
