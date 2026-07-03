import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://locsmith.de",
      lastModified: new Date(),
    },
    {
      url: "https://locsmith.de/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://locsmith.de/#reviews",
      lastModified: new Date(),
    },
    {
      url: "https://locsmith.de/#contact",
      lastModified: new Date(),
    },
  ];
}
