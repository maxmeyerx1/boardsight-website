import { ArrowRight } from "lucide-react";

import { hero } from "@/content/hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-brand-900 text-white">
      {/* Dekorative Hintergrundelemente, bei reduzierter Bewegung statisch */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-32 top-[-10%] size-[28rem] rounded-full bg-brand-500/40 blur-3xl motion-safe:animate-float md:size-[36rem]" />
        <div className="absolute -right-24 bottom-[-20%] size-[24rem] rounded-full bg-accent-400/25 blur-3xl motion-safe:animate-float-slow md:size-[32rem]" />
        <div className="absolute left-1/2 top-1/3 size-64 -translate-x-1/2 rounded-full bg-brand-700/60 blur-3xl" />
      </div>

      <div className="container py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/85">
              <span className="size-2 rounded-full bg-accent-400" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="hero-title" className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80 md:text-xl">
              {hero.subline}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="accent" size="lg">
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
