import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/skills", "/experience", "/projects", "/challenge", "/contact"];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/challenge" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
