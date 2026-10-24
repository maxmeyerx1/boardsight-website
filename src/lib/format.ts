const LOCALE = "de-CH";

const numberFormatter = new Intl.NumberFormat(LOCALE);

const chfFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "CHF",
  maximumFractionDigits: 0,
});

const oneDecimalFormatter = new Intl.NumberFormat(LOCALE, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const percentFormatter = new Intl.NumberFormat(LOCALE, {
  style: "percent",
  maximumFractionDigits: 1,
});

export const formatNumber = (value: number) => numberFormatter.format(value);
export const formatCHF = (value: number) => chfFormatter.format(value);
/**
 * Kurzform für Beträge ab 1 Mio. Bewusst ohne `notation: "compact"`, weil Node und
 * Browser dort je nach ICU-Version unterschiedlich formatieren (Hydration-Fehler).
 */
export const formatCHFCompact = (value: number) =>
  Math.abs(value) >= 1_000_000 ? `CHF ${oneDecimalFormatter.format(value / 1_000_000)} Mio.` : formatCHF(value);
/** Erwartet einen Anteil, z. B. 0.42 für 42 %. */
export const formatPercent = (value: number) => percentFormatter.format(value);
