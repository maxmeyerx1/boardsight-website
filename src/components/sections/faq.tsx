import { faq, faqIntro } from "@/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Faq() {
  return (
    <Section id="faq" tone="white" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <SectionHeading intro={faqIntro} headingId="faq-title" />
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
