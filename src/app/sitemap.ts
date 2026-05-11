import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { tourPackages } from "@/data/packages";

/**
 * Dynamic sitemap — auto-generates entries for all static pages
 * plus dynamic package detail pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/packages`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/destinations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const packageRoutes: MetadataRoute.Sitemap = tourPackages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...packageRoutes];
}
