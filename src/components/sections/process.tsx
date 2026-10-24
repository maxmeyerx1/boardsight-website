"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

import { processIntro, processSteps } from "@/content/process";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";

const tabId = (index: number) => `process-tab-${index}`;
const panelId = "process-panel";

export function Process() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const total = processSteps.length;
  const step = processSteps[active];

  const select = (index: number, focus = false) => {
    const next = (index + total) % total;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  // Tastatursteuerung nach WAI-ARIA Tabs-Muster
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyMap: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: total - 1,
    };
    const target = keyMap[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target, true);
  };

  if (!step) return null;

  return (
    <Section id="vorgehen" tone="darker" labelledBy="vorgehen-title">
      <SectionHeading intro={processIntro} headingId="vorgehen-title" tone="darker" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <div
          role="tablist"
          aria-label="Schritte der Zusammenarbeit"
          aria-orientation="vertical"
          className="grid gap-2 lg:flex lg:flex-col"
          style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
        >
          {processSteps.map((item, index) => {
            const selected = index === active;
            const done = index < active;
            return (
              <button
                key={index}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={tabId(index)}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                aria-label={`Schritt ${index + 1}: ${item.title}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={onKeyDown}
                className={cn(
                  "group flex items-center justify-center gap-4 rounded-lg border p-2 text-left transition-all duration-200 lg:justify-start lg:p-4",
                  selected
                    ? "border-accent-400/60 bg-white/10"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors",
                    selected && "bg-accent-400 text-brand-900",
                    done && "bg-brand-500 text-white",
                    !selected && !done && "bg-white/10 text-white/85",
                  )}
                >
                  {done ? <Check className="size-4" /> : index + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn("hidden font-semibold lg:block", selected ? "text-white" : "text-white/80")}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabId(active)}
          tabIndex={0}
          className="relative overflow-hidden rounded-2xl bg-white p-6 text-neutral-900 shadow-xl md:p-10"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-brand-500">
              Schritt {active + 1} / {total}
            </p>
            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-neutral-100" aria-hidden="true">
              <motion.div
                className="h-full rounded-full bg-brand-500"
                animate={{ width: `${((active + 1) / total) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="min-h-[220px]"
            >
              <h3 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-neutral-600">{step.text}</p>
              <ul className="mt-6 space-y-3">
                {step.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
            <Button variant="outline" size="sm" onClick={() => select(active - 1)} disabled={active === 0}>
              <ChevronLeft aria-hidden="true" />
              Zurück
            </Button>
            <Button size="sm" onClick={() => select(active + 1)} disabled={active === total - 1}>
              Weiter
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
