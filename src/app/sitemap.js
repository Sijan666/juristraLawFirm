import { siteConfig } from "@/constants/site";
import { LAWYERS } from "@/components/lawyers/lawyersData";

/**
 * Generates dynamic sitemap for search engines
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const staticRoutes = [
    { route: "", priority: 1.0 },
    { route: "/about", priority: 0.8 },
    { route: "/lawyers", priority: 0.8 },
    { route: "/contact", priority: 0.8 },
    { route: "/services", priority: 0.8 },
    { route: "/privacy-policy", priority: 0.5 },
    { route: "/terms", priority: 0.5 },
  ].map(({ route, priority }) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));

  const lawyerRoutes = LAWYERS.map((lawyer) => ({
    url: `${siteConfig.url}/lawyers/${lawyer.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...lawyerRoutes];
}
