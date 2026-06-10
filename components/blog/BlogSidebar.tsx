import Link from "next/link";
import {
  formatPostDate,
  getAllCategories,
  getAllPosts,
  getAllTags,
} from "@/lib/data/posts";

export default function BlogSidebar() {
  const recentPosts = getAllPosts().slice(0, 3);
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="main-sidebar rmt-65">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Search</h4>
        <form className="default-search-form" action="/blog" method="get">
          <input type="text" name="q" placeholder="Keywords" required />
          <button type="submit" className="searchbutton far fa-search"></button>
        </form>
      </div>
      <div className="widget widget-category wow fadeInUp delay-0-4s">
        <h4 className="widget-title">Category</h4>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <i className="far fa-angle-right"></i>{" "}
              <Link href={`/blog?category=${encodeURIComponent(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Latest Articles</h4>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <div className="image">
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </div>
              <div className="content">
                <div className="blog-meta mb-5">
                  <span className="date">
                    <i className="far fa-calendar-alt"></i> {formatPostDate(post.date)}
                  </span>
                </div>
                <h5>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Popular Tags</h4>
        <div className="tag-coulds">
          {tags.map((tag) => (
            <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="widget widget-cta wow fadeInUp delay-0-2s">
        <div
          className="cta-widget"
          style={{
            backgroundImage: "url(/assets/images/widgets/widget-cta.jpg)",
          }}
        >
          <span className="sub-title">Get A Quote</span>
          <h4>Need a Full-Stack Developer?</h4>
          <Link href="/contact" className="theme-btn">
            Hire Me <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
