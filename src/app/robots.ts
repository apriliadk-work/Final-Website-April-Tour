import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

/**
 * Robots configuration — allows all crawlers
 * and points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
