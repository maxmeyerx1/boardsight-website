import { impressum } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { LegalPageView } from "@/components/legal-page";

export const metadata = pageMetadata({
  title: impressum.title,
  description: impressum.description,
  path: "/impressum",
});

export default function ImpressumPage() {
  return <LegalPageView page={impressum} />;
}
