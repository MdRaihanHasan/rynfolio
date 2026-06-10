import Link from "next/link";

export type BlogPost = {
  title: string;
  image: string;
  tags: string[];
  date: string;
};

type BlogCardProps = {
  post: BlogPost;
  delay: string;
};

export default function BlogCard({ post, delay }: BlogCardProps) {
  return (
    <div className="col-md-6 item">
      <div className={`blog-item style-two wow fadeInUp ${delay}`}>
        <div className="image">
          <img src={post.image} alt="Blog Standard" />
        </div>
        <div className="content">
          <div className="blog-meta mb-20">
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
          <div className="blog-meta mb-5">
            <a className="date" href="#">
              <i className="far fa-calendar-alt"></i> {post.date}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
