"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials, testimonialsIntro } from "@/content/testimonials";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + total) % total);
  };

  if (!current) return null;

  return (
    <Section id="referenzen" tone="darker" labelledBy="referenzen-title">
      <SectionHeading intro={testimonialsIntro} headingId="referenzen-title" tone="darker" align="center" />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        {/* Kein Autoplay, damit Lesende das Tempo selbst bestimmen */}
        <div role="region" aria-roledescription="Karussell" aria-label="Erfahrungsberichte">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:min-h-[260px] md:p-10">
            <Quote className="size-10 text-accent-400" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.figure
                key={index}
                role="group"
                aria-roledescription="Folie"
                aria-label={`${index + 1} von ${total}`}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-6"
              >
                <blockquote className="text-balance text-xl font-medium leading-relaxed md:text-2xl">
                  <p>{current.quote}</p>
                </blockquote>
                <figcaption className="mt-6 text-white/80">
                  <span className="font-semibold text-white">{current.name}</span>
                  <span className="block text-sm">
                    {current.role}, {current.company}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Vorheriger Erfahrungsbericht"
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:-translate-x-0.5 hover:border-white hover:bg-white/10"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => go(dot)}
                  aria-label={`Erfahrungsbericht ${dot + 1} anzeigen`}
                  aria-current={dot === index ? "true" : undefined}
                  className="grid size-6 place-items-center rounded-full"
                >
                  <span
                    className={cn(
                      "block h-2 rounded-full transition-all duration-300",
                      dot === index ? "w-6 bg-accent-400" : "w-2 bg-white/40 hover:bg-white/70",
                    )}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Nächster Erfahrungsbericht"
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:translate-x-0.5 hover:border-white hover:bg-white/10"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            Erfahrungsbericht {index + 1} von {total}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
