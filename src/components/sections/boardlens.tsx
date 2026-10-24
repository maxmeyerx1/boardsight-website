"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

import { boardlensFeatures, boardlensIntro, type BoardlensFeatureId } from "@/content/boardlens";
import { icons } from "@/lib/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { DashboardMockup } from "./dashboard-mockup";

const isFeatureId = (value: string): value is BoardlensFeatureId =>
  boardlensFeatures.some((feature) => feature.id === value);

export function Boardlens() {
  const [active, setActive] = useState<BoardlensFeatureId>("sync");

  return (
    <Section id="boardlens" tone="white" labelledBy="boardlens-title">
      <SectionHeading intro={boardlensIntro} headingId="boardlens-title" />

      <Reveal className="mt-12">
        <Tabs value={active} onValueChange={(value) => isFeatureId(value) && setActive(value)}>
          <TabsList
            aria-label="Funktionen von BoardLens"
            className="grid grid-cols-2 gap-2 rounded-2xl bg-neutral-50 p-1.5 sm:inline-flex sm:rounded-full"
          >
            {boardlensFeatures.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-[13px] font-semibold text-neutral-600 sm:gap-2 sm:px-4 sm:text-sm hover:text-brand-700 data-[state=active]:bg-brand-700 data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {feature.tab}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div className="lg:pt-4">
              {boardlensFeatures.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{feature.title}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-neutral-600">{feature.text}</p>
                      <ul className="mt-6 space-y-3">
                        {feature.points.map((point, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                              <Check className="size-3" aria-hidden="true" />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>
              ))}
            </div>

            <DashboardMockup active={active} />
          </div>
        </Tabs>
      </Reveal>
    </Section>
  );
}
