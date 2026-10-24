import { services, servicesIntro } from "@/content/services";
import { icons } from "@/lib/icons";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Services() {
  return (
    <Section id="leistungen" tone="light" labelledBy="leistungen-title">
      <SectionHeading intro={servicesIntro} headingId="leistungen-title" tone="light" />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <Reveal as="li" key={index} delay={index * 0.06} className="flex">
              <Card className="group flex w-full flex-col">
                <span className="grid size-12 place-items-center rounded-lg bg-brand-700/10 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{service.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
