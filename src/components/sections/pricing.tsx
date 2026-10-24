import { Check } from "lucide-react";

import { plans, pricingIntro, pricingNote } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="preise" tone="white" labelledBy="preise-title">
      <SectionHeading intro={pricingIntro} headingId="preise-title" align="center" />

      <ul className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal as="li" key={plan.name} delay={index * 0.08} className="flex">
            <div
              className={cn(
                "relative flex w-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                plan.highlighted
                  ? "on-dark border-brand-700 bg-brand-700 text-white shadow-lg"
                  : "border-border bg-neutral-50 text-neutral-900 hover:border-brand-500/40",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold text-brand-900">
                  Empfohlen
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", plan.highlighted ? "text-white/80" : "text-neutral-600")}>
                {plan.tagline}
              </p>
              <p className="mt-6 text-3xl font-bold tracking-tight">{plan.price}</p>
              <p className={cn("text-sm", plan.highlighted ? "text-white/80" : "text-neutral-600")}>{plan.priceNote}</p>

              <ul
                className={cn(
                  "mt-6 flex-1 space-y-3 border-t pt-6",
                  plan.highlighted ? "border-white/15" : "border-border",
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check
                      className={cn("mt-0.5 size-4 shrink-0", plan.highlighted ? "text-accent-400" : "text-brand-500")}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={plan.highlighted ? "accent" : "default"} className="mt-8 w-full">
                <a href={plan.cta.href}>{plan.cta.label}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm text-neutral-600">{pricingNote}</p>
    </Section>
  );
}
