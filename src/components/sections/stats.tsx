"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

import { stats, statsIntro, type Stat } from "@/content/stats";
import { formatNumber } from "@/lib/format";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, stat.value]);

  const finalText = `${stat.prefix ?? ""}${formatNumber(stat.value)}${stat.suffix ?? ""}`;

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {stat.prefix && <span className="mr-1 text-2xl font-semibold text-white/80 md:text-3xl">{stat.prefix}</span>}
        {formatNumber(display)}
        {stat.suffix}
      </span>
      <span className="sr-only">{finalText}</span>
    </>
  );
}

export function Stats() {
  return (
    <Section id="kennzahlen" tone="dark" labelledBy="kennzahlen-title">
      <SectionHeading intro={statsIntro} headingId="kennzahlen-title" tone="dark" align="center" />
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal as="li" key={index} delay={index * 0.08}>
            <div className="flex h-full flex-col-reverse items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center transition-colors duration-300 hover:border-accent-400/50 hover:bg-white/10">
              <p className="mt-3 font-medium text-white/85">
                {stat.label}
                {stat.note && <span className="mt-2 block text-sm text-accent-400">{stat.note}</span>}
              </p>
              <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                <Counter stat={stat} />
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
