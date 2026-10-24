import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Wird beim Build einmalig erzeugt (statischer Export).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
