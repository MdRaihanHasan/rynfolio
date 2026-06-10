import Link from "next/link";

const categories = [
  "Web Design",
  "Mobile Apps Design",
  "Brand Identity Design",
  "Motion Graphic Design",
  "Web Development",
  "Digital Marketing",
];

const recentNews = [
  {
    title: "Tips For Conducting Studie",
    image: "/assets/images/widgets/news1.jpg",
    date: "Sep 25, 2023",
  },
  {
    title: "Usability With Participants",
    image: "/assets/images/widgets/news2.jpg",
    date: "Sep 25, 2023",
  },
  {
    title: "Online Environment Work",
    image: "/assets/images/widgets/news3.jpg",
    date: "Sep 25, 2023",
  },
];

const popularTags = [
  "Design",
  "Figma",
  "Apps",
  "Branding",
  "Development",
  "Digital",
  "Mobile Apps",
];

export default function BlogSidebar() {
  return (
    <div className="main-sidebar rmt-65">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Search</h4>
        <form className="default-search-form">
          <input type="text" placeholder="Keywords" required />
          <button type="submit" className="searchbutton far fa-search"></button>
        </form>
      </div>
      <div className="widget widget-category wow fadeInUp delay-0-4s">
        <h4 className="widget-title">Category</h4>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <i className="far fa-angle-right"></i>{" "}
              <Link href="/blog">{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Latest News</h4>
        <ul>
          {recentNews.map((news) => (
            <li key={news.title}>
              <div className="image">
                <img src={news.image} alt="News" />
              </div>
              <div className="content">
                <div className="blog-meta mb-5">
                  <a className="date" href="#">
                    <i className="far fa-calendar-alt"></i> {news.date}
                  </a>
                </div>
                <h5>
                  <Link href="/blog-details">{news.title}</Link>
                </h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Popular Tags</h4>
        <div className="tag-coulds">
          {popularTags.map((tag) => (
            <Link href="/blog" key={tag}>
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
          <h4>Looking For Creative Web Designer</h4>
          <Link href="/contact" className="theme-btn">
            Hire Me <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
