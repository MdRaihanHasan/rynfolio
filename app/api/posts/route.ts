import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/data/posts";

/**
 * GET /api/posts
 * Query params:
 *   q        - full-text search over title/excerpt/tags
 *   tag      - filter by tag (case-insensitive)
 *   category - filter by category (case-insensitive)
 *   limit    - max number of posts returned
 *   page     - 1-based page number (used with perPage, default perPage 10)
 *   perPage  - page size when paginating
 * Returns post metadata (without full content); fetch /api/posts/[slug] for the body.
 */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q")?.toLowerCase().trim();
  const tag = searchParams.get("tag")?.toLowerCase();
  const category = searchParams.get("category")?.toLowerCase();
  const limit = Number(searchParams.get("limit")) || undefined;

  let result = getAllPosts();

  if (tag) {
    result = result.filter((post) => post.tags.some((t) => t.toLowerCase() === tag));
  }
  if (category) {
    result = result.filter((post) => post.category.toLowerCase() === category);
  }
  if (q) {
    result = result.filter((post) =>
      [post.title, post.excerpt, ...post.tags, post.category]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }
  if (limit) {
    result = result.slice(0, limit);
  }

  const total = result.length;
  const page = Number(searchParams.get("page")) || 0;
  const perPage = Number(searchParams.get("perPage")) || 10;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (page) {
    const current = Math.min(Math.max(page, 1), totalPages);
    result = result.slice((current - 1) * perPage, current * perPage);
  }

  return NextResponse.json({
    total,
    ...(page ? { page: Math.min(Math.max(page, 1), totalPages), perPage, totalPages } : {}),
    posts: result.map(({ content: _content, ...meta }) => ({
      ...meta,
      url: `/blog/${meta.slug}`,
    })),
  });
}
