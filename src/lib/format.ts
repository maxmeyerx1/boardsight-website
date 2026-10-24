const LOCALE = "de-CH";

const numberFormatter = new Intl.NumberFormat(LOCALE);

const chfFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "CHF",
  maximumFractionDigits: 0,
});

const chfCompactFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "CHF",
  notation: "compact",
  maximumFractionDigits: 1,
});

const percentFormatter = new Intl.NumberFormat(LOCALE, {
  style: "percent",
  maximumFractionDigits: 1,
});

export const formatNumber = (value: number) => numberFormatter.format(value);
export const formatCHF = (value: number) => chfFormatter.format(value);
export const formatCHFCompact = (value: number) => chfCompactFormatter.format(value);
/** Erwartet einen Anteil, z. B. 0.42 für 42 %. */
export const formatPercent = (value: number) => percentFormatter.format(value);
