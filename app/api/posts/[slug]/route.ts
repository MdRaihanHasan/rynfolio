import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/data/posts";

/** GET /api/posts/[slug] — returns the full post including content sections. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ ...post, url: `/blog/${post.slug}` });
}
