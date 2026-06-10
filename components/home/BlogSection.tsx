import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

const posts = [
  {
    title: "Essential JavaScript Libraries Every Developer Should Know in 2026",
    image: "/assets/images/blog/blog1.png",
    tags: ["Web Development", "JavaScript"],
    date: "Sep 12, 2023",
  },
  {
    title: "Designing for Accessibility: Best Practices for Inclusive Web Experiences",
    image: "/assets/images/blog/blog2.png",
    tags: ["Design", "Accessibility"],
    date: "Sep 12, 2023",
  },
];

export default function BlogSection() {
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
              <div className="col-lg-6" key={post.title}>
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={post.image} alt="Blog" />
                  </div>
                  <div className="content">
                    <div className="blog-meta mb-35">
                      {post.tags.map((tag) => (
                        <Link className="tag" href="/blog" key={tag}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <h5>
                      <Link href="/blog-details">{post.title}</Link>
                    </h5>
                    <hr />
                    <div className="blog-meta mt-35">
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt"></i> {post.date}
                      </a>
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
