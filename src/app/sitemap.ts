import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Wird beim Build einmalig erzeugt (statischer Export).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/impressum", priority: 0.3 },
    { path: "/datenschutz", priority: 0.3 },
    { path: "/nutzungsbedingungen", priority: 0.3 },
  ];
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
