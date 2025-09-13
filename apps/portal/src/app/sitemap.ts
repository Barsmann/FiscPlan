import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://app.fiscplan.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
