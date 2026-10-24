import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/content/types";
import { Reveal } from "@/components/reveal";

export type Tone = "white" | "light" | "dark" | "darker";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-neutral-900",
  light: "bg-neutral-50 text-neutral-900",
  dark: "on-dark bg-brand-700 text-white",
  darker: "on-dark bg-brand-900 text-white",
};

export const isDarkTone = (tone: Tone) => tone === "dark" || tone === "darker";

type SectionProps = {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, tone = "white", labelledBy, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-20 md:py-28", toneClasses[tone], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  intro: SectionIntro;
  headingId: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ intro, headingId, tone = "white", align = "left", className }: SectionHeadingProps) {
  const dark = isDarkTone(tone);
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("text-sm font-semibold uppercase tracking-[0.14em]", dark ? "text-accent-400" : "text-brand-500")}>
        {intro.eyebrow}
      </p>
      <h2 id={headingId} className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
        {intro.title}
      </h2>
      <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/80" : "text-neutral-600")}>{intro.lead}</p>
    </Reveal>
  );
}
