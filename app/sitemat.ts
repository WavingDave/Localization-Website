import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://locsmith.de",
      lastModified: new Date(),
    },
  ];
}