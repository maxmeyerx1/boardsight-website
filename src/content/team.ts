import type { SectionIntro } from "./types";

export const teamIntro: SectionIntro = {
  eyebrow: "Über uns",
  title: "[TODO: Überschrift Über uns]",
  lead: "[TODO: Zwei bis drei Sätze zur Firma: Gründung, Standort, Haltung.]",
};

export type TeamMember = {
  name: string;
  /** Initialen für den Avatar. */
  initials: string;
  role: string;
};

export const team: TeamMember[] = [
  { name: "[TODO: Name]", initials: "P1", role: "[TODO: Rolle]" },
  { name: "[TODO: Name]", initials: "P2", role: "[TODO: Rolle]" },
  { name: "[TODO: Name]", initials: "P3", role: "[TODO: Rolle]" },
  { name: "[TODO: Name]", initials: "P4", role: "[TODO: Rolle]" },
];
