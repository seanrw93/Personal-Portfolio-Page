import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://srw-dev.vercel.app";

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
    },
  ];
}
