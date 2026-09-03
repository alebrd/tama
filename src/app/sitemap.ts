import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tamaklub.pl";
  const lastModified = new Date();

  const routes = [
    "",
    "/en",
    "/tama",
    "/en/tama",
    "/przestrzen",
    "/en/spaces",
    "/oferta",
    "/en/offer",
    "/kontakt",
    "/en/contact",
    "/merch",
    "/en/merch",
    "/praca",
    "/en/jobs",
    "/slowclub",
    "/en/slowclub",
    "/slowclub/kontakt",
    "/en/slowclub/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route.includes("kontakt") || route.includes("contact") ? "monthly" : "weekly") as "monthly" | "weekly",
    priority: route === "" || route === "/en" ? 1.0 : route === "/slowclub" || route === "/tama" ? 0.9 : 0.8,
  }));
}
