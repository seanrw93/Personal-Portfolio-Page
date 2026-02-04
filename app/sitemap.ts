import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://srw-dev.vercel.app";

  const routes = [
    "",
    "/en",
    "/fr",
    "/about",
    "/projects",
    "/contact",
    "/experience",
    "/skills"
  ];

  const locales = ["en", "fr"];

  const sitemapEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    }))
  );

  return sitemapEntries;
}
