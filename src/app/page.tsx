import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Boardlens } from "@/components/sections/boardlens";
import { Audiences } from "@/components/sections/audiences";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Pricing } from "@/components/sections/pricing";
import { Sovereignty } from "@/components/sections/sovereignty";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Boardlens />
      <Sovereignty />
      <Audiences />
      <Stats />
      <Pricing />
      <About />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
