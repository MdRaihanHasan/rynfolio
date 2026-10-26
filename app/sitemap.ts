import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/data/posts";
import { lyraNav } from "@/lib/data/lyra";

const BASE_URL = "https://ryn.bd";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/projects-masonry`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/project-details`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/certifications`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/apps`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const lyraRoutes: MetadataRoute.Sitemap = lyraNav.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/apps/lyra-prime" ? 0.8 : 0.5,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...lyraRoutes, ...postRoutes];
}
