import { nutzungsbedingungen } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { LegalPageView } from "@/components/legal-page";

export const metadata = pageMetadata({
  title: nutzungsbedingungen.title,
  description: nutzungsbedingungen.description,
  path: "/nutzungsbedingungen",
});

export default function NutzungsbedingungenPage() {
  return <LegalPageView page={nutzungsbedingungen} />;
}
