import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { BrandLogo, BrandSymbol } from "@/components/brand/logo";

/** Logo mit Link zur Startseite, für dunkle Flächen (Header, Footer). */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center rounded-md text-white", className)}
      aria-label={`${siteConfig.name} – zur Startseite`}
    >
      {/* Auf sehr schmalen Displays nur das Symbol, damit der Header nicht überläuft */}
      <BrandSymbol className="h-7 min-[360px]:hidden" />
      <BrandLogo title="" className="hidden h-6 min-[360px]:block sm:h-7 md:h-8" />
    </Link>
  );
}
