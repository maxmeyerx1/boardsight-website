import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Liefert true, wenn ein Inhalt noch ein `[TODO: ...]`-Platzhalter ist. */
export function isTodo(value: string): boolean {
  return value.trim() === "" || value.includes("[TODO");
}
