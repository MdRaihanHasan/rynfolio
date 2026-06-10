import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/data/posts";

/**
 * GET /api/posts
 * Query params:
 *   q        - full-text search over title/excerpt/tags
 *   tag      - filter by tag (case-insensitive)
 *   category - filter by category (case-insensitive)
 *   limit    - max number of posts returned
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

  return NextResponse.json({
    total: result.length,
    posts: result.map(({ content: _content, ...meta }) => ({
      ...meta,
      url: `/blog/${meta.slug}`,
    })),
  });
}
