"use client";

import { useEffect, useId, useState } from "react";
import { FileText } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const label = "Board-Package";
const hint = "Bald verfügbar";

/**
 * Kundenzugang zum Board-Package.
 * Ziel kommt aus `siteConfig.boardPackageUrl`. Leer = kein Ziel, Hinweis „Bald verfügbar“.
 */
export function BoardPackageButton({ className }: { className?: string }) {
  const url = siteConfig.boardPackageUrl;
  const hintId = useId();
  const [showHint, setShowHint] = useState(false);

  // Auf Touch-Geräten gibt es kein Hover: Hinweis nach Antippen kurz einblenden.
  useEffect(() => {
    if (!showHint) return;
    const timer = window.setTimeout(() => setShowHint(false), 2500);
    return () => window.clearTimeout(timer);
  }, [showHint]);

  const classes = cn(buttonVariants({ variant: "accent", size: "sm" }), "px-3.5 sm:px-4", className);

  if (url) {
    return (
      <a href={url} className={classes}>
        <FileText aria-hidden="true" className="hidden sm:block" />
        {label}
      </a>
    );
  }

  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-disabled="true"
        aria-describedby={hintId}
        onClick={() => setShowHint(true)}
        className={cn(classes, "cursor-not-allowed hover:translate-y-0")}
      >
        <FileText aria-hidden="true" className="hidden sm:block" />
        {label}
      </button>
      <span
        id={hintId}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-brand-900 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100",
          showHint && "opacity-100",
        )}
      >
        {hint}
      </span>
    </span>
  );
}
