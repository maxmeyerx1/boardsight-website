import { ArrowRight } from "lucide-react";

import { finalCta } from "@/content/cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="on-dark relative isolate overflow-hidden bg-brand-700 py-20 text-white md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-accent-400/20 blur-3xl motion-safe:animate-float" />
      </div>
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="cta-title" className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{finalCta.text}</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="accent" size="lg">
              <a href={finalCta.primary.href}>
                {finalCta.primary.label}
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href={finalCta.secondary.href}>{finalCta.secondary.label}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
