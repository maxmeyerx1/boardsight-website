import type { IconName } from "@/lib/icons";

/**
 * Laufband unter dem Hero. Solange keine freigegebenen Kunden- oder
 * Partnerlogos vorliegen, zeigt es die Grundsätze von BoardSight.
 */
export const trust = {
  label: "Gebaut für Schweizer Unternehmen und ihre Verwaltungsräte",
  items: [
    { icon: "mountain", text: "Entwickelt in Zürich" },
    { icon: "server", text: "Hosting in der Schweiz" },
    { icon: "brain", text: "Souveräne KI" },
    { icon: "clock", text: "Zugriff rund um die Uhr" },
    { icon: "refresh", text: "Tägliche Synchronisation" },
    { icon: "gauge", text: "12 Kennzahlen automatisch" },
    { icon: "shieldCheck", text: "Freigabe durch den CFO" },
    { icon: "lock", text: "Verschlüsselte Verbindung zur Buchhaltung" },
  ] satisfies { icon: IconName; text: string }[],
};
