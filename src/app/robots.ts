import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.limitless-gym-mk.com/sitemap.xml",
    host: "https://www.limitless-gym-mk.com",
  };
}
