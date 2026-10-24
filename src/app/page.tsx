import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Boardlens } from "@/components/sections/boardlens";
import { Audiences } from "@/components/sections/audiences";
import { Stats } from "@/components/sections/stats";
import { Team } from "@/components/sections/team";
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
      <Audiences />
      <Stats />
      <Team />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
