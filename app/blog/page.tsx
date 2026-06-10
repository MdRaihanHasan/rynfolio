import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Pagination from "@/components/blog/Pagination";
import { getAllPosts } from "@/lib/data/posts";

const POSTS_PER_PAGE = 10;

export const metadata: Metadata = {
  title: "Blog - Md Raihan Hasan | Laravel, AWS, DevOps & Full-Stack Articles",
  description:
    "Articles on Laravel, PHP, React, Next.js, AWS, Docker, Kubernetes, MySQL, PostgreSQL, Redis and DevOps from 10+ years of full-stack experience.",
  alternates: { canonical: "/blog" },
};

type PageProps = {
  searchParams: Promise<{ q?: string; tag?: string; category?: string; page?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const { q, tag, category, page } = await searchParams;

  let posts = getAllPosts();
  if (tag) {
    posts = posts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
  }
  if (category) {
    posts = posts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (q) {
    const needle = q.toLowerCase().trim();
    posts = posts.filter((post) =>
      [post.title, post.excerpt, ...post.tags, post.category]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    );
  }

  const filterLabel = tag ?? category ?? (q ? `"${q}"` : null);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
  const pagePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <PageBanner title="Blog" />

      {/* Blog Standard Area start */}
      <section className="blog-standard-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                {filterLabel && (
                  <div className="blog-meta mb-30">
                    <span className="tag">
                      {posts.length} article{posts.length === 1 ? "" : "s"} for{" "}
                      {filterLabel}
                    </span>
                  </div>
                )}
                <div className="row">
                  {pagePosts.map((post, index) => (
                    <BlogCard
                      post={post}
                      delay={index % 2 === 0 ? "delay-0-2s" : "delay-0-4s"}
                      key={post.slug}
                    />
                  ))}
                  {posts.length === 0 && (
                    <div className="col-12">
                      <p>No articles found. Try a different keyword or tag.</p>
                    </div>
                  )}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  query={{ q, tag, category }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
        <BgLines />
      </section>
      {/* Blog Standard Area end */}
    </>
  );
}
