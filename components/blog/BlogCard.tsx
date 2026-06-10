import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/data/posts";

type BlogCardProps = {
  post: Post;
  delay: string;
};

export default function BlogCard({ post, delay }: BlogCardProps) {
  return (
    <div className="col-md-6 item">
      <div className={`blog-item style-two wow fadeInUp ${delay}`}>
        <div className="image">
          <Link href={`/blog/${post.slug}`}>
            <img src={post.image} alt={post.imageAlt} loading="lazy" />
          </Link>
        </div>
        <div className="content">
          <div className="blog-meta mb-20">
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
          <hr />
          <div className="blog-meta mb-5">
            <span className="date">
              <i className="far fa-calendar-alt"></i> {formatPostDate(post.date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
