import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import BlogSidebar from "@/components/blog/BlogSidebar";
import ArticleBody from "@/components/blog/ArticleBody";
import {
  author,
  formatPostDate,
  getAllPosts,
  getPostBySlug,
} from "@/lib/data/posts";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Md Raihan Hasan`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [author.name],
      tags: post.tags,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === post.slug);
  const newerPost = index > 0 ? all[index - 1] : null;
  const olderPost = index < all.length - 1 ? all[index + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      jobTitle: author.jobTitle,
    },
    publisher: { "@type": "Person", name: author.name, url: author.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${author.url}/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner title={post.title} crumb={post.category} />

      {/* Blog Details Area start */}
      <section className="blog-details-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="content mt-35">
                  <div className="blog-meta mb-30 wow fadeInUp delay-0-2s">
                    {post.tags.map((tag) => (
                      <Link
                        className="tag"
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        key={tag}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="author-date-share mb-40 wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img src={author.image} alt={author.name} />
                    </div>
                    <div className="text">
                      <span>Post By</span>
                      <h5>{author.name}</h5>
                    </div>
                    <div className="text">
                      <span>Published</span>
                      <h5>{formatPostDate(post.date)}</h5>
                    </div>
                    <div className="text">
                      <span>Reading Time</span>
                      <h5>{post.readTime}</h5>
                    </div>
                  </div>
                </div>
                <div className="image mb-35 wow fadeInUp delay-0-5s">
                  <img src={post.image} alt={post.imageAlt} />
                </div>

                <ArticleBody sections={post.content} />

                <div className="tag-share mt-45 py-30 wow fadeInUp delay-0-2s">
                  <div className="item">
                    <b>Tags</b>
                    <div className="tag-coulds">
                      {post.tags.map((tag) => (
                        <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Next/Prev articles */}
                <div className="next-prev-blog pt-30 pb-45">
                  <div className="row justify-content-between">
                    {olderPost && (
                      <div className="col-md-6">
                        <div className="blog-item style-two wow fadeInUp delay-0-2s">
                          <div className="content">
                            <div className="blog-meta mb-10">
                              <span className="date">
                                <i className="far fa-calendar-alt"></i>{" "}
                                {formatPostDate(olderPost.date)}
                              </span>
                            </div>
                            <h6>
                              <Link href={`/blog/${olderPost.slug}`}>
                                {olderPost.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    )}
                    {newerPost && (
                      <div className="col-md-6">
                        <div className="blog-item style-two wow fadeInUp delay-0-4s">
                          <div className="content">
                            <div className="blog-meta mb-10">
                              <span className="date">
                                <i className="far fa-calendar-alt"></i>{" "}
                                {formatPostDate(newerPost.date)}
                              </span>
                            </div>
                            <h6>
                              <Link href={`/blog/${newerPost.slug}`}>
                                {newerPost.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
        <BgLines />
      </section>
      {/* Blog Details Area end */}
    </>
  );
}
