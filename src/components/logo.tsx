import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Logo-Platzhalter. Durch echtes Logo (z. B. SVG in /public) ersetzen. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 rounded-md", className)} aria-label={`${siteConfig.name} – zur Startseite`}>
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-400 text-xs font-bold text-brand-900"
      >
        Logo
      </span>
      <span className="truncate text-base font-bold tracking-tight text-white">{siteConfig.name}</span>
    </Link>
  );
}
