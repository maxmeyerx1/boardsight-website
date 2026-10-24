import { sovereigntyBadge, sovereigntyIntro, sovereigntyPillars } from "@/content/sovereignty";
import { icons } from "@/lib/icons";
import { BrandSymbol } from "@/components/brand/logo";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Sovereignty() {
  return (
    <Section id="souveraenitaet" tone="darker" labelledBy="souveraenitaet-title" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_60%)]" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading intro={sovereigntyIntro} headingId="souveraenitaet-title" tone="darker" />

          {/* Siegel: Souveränität und Verfügbarkeit auf einen Blick */}
          <Reveal delay={0.1} className="mt-10">
            <div className="relative max-w-sm overflow-hidden rounded-2xl border border-accent-400/30 bg-brand-700/60 p-6">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-accent-400/40 bg-brand-900 text-white">
                  <BrandSymbol className="h-6" />
                </span>
                <div>
                  <p className="font-bold">{sovereigntyBadge.title}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-white/80">
                    <span className="relative flex size-2.5" aria-hidden="true">
                      <span className="absolute inline-flex size-full rounded-full bg-accent-400 opacity-75 motion-safe:animate-ping" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-accent-400" />
                    </span>
                    Verfügbar 24/7
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-white/85">
                {sovereigntyBadge.lines.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {sovereigntyPillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal as="li" key={pillar.title} delay={index * 0.06} className="flex">
                <div className="group flex w-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:bg-white/10">
                  <span className="grid size-12 place-items-center rounded-lg bg-accent-400/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-brand-900">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
