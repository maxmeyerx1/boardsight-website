import { datenschutz } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { LegalPageView } from "@/components/legal-page";

export const metadata = pageMetadata({
  title: datenschutz.title,
  description: datenschutz.description,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return <LegalPageView page={datenschutz} />;
}
