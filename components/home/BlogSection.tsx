import Link from "next/link";
import BgLines from "@/components/ui/BgLines";
import { formatPostDate, getAllPosts } from "@/lib/data/posts";

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <section className="blog-area rel z-1">
      <div className="for-bgc-black pt-130 pb-100 rpt-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">News &amp; Blog</span>
                <h2>
                  Latest News &amp; <span>Blog</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-6" key={post.slug}>
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.image} alt={post.imageAlt} loading="lazy" />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="blog-meta tags mb-15">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Link
                          className="tag"
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          key={tag}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <h5>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <div className="blog-footer-meta">
                      <span className="date">
                        <i className="far fa-calendar-alt"></i>{" "}
                        {formatPostDate(post.date)}
                      </span>
                      <Link className="read-more" href={`/blog/${post.slug}`}>
                        Read More <i className="far fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
