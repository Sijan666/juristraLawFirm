import { siteConfig } from "@/constants/site";

/**
 * Generates dynamic robots.txt rules for search crawlers
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
