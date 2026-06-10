import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import BlogCard, { type BlogPost } from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "Blog - Md Raihan Hasan",
};

const posts: BlogPost[] = [
  {
    title: "Tips For Conducting to Usability Studies With Participants",
    image: "/assets/images/blog/blog-standard1.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title:
      "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
    image: "/assets/images/blog/blog-standard2.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title: "Tips For Conducting to Usability Studies With Participants",
    image: "/assets/images/blog/blog-standard3.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title:
      "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
    image: "/assets/images/blog/blog-standard4.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title: "Tips For Conducting to Usability Studies With Participants",
    image: "/assets/images/blog/blog-standard5.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title:
      "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
    image: "/assets/images/blog/blog-standard6.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title: "Tips For Conducting to Usability Studies With Participants",
    image: "/assets/images/blog/blog-standard7.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
  {
    title:
      "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
    image: "/assets/images/blog/blog-standard8.jpg",
    tags: ["Design", "Figma"],
    date: "September 25, 2023",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog Standard" />

      {/* Blog Standard Area start */}
      <section className="blog-standard-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                <div className="row">
                  {posts.map((post, index) => (
                    <BlogCard
                      post={post}
                      delay={index % 2 === 0 ? "delay-0-2s" : "delay-0-4s"}
                      key={post.image}
                    />
                  ))}
                  <div className="col-md-6 item offset-md-6">
                    <div className="news-more-btn text-center mt-35 wow fadeInUp delay-0-2s">
                      <Link href="/blog" className="theme-btn">
                        View More Projects <i className="far fa-angle-right"></i>
                      </Link>
                    </div>
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
      {/* Blog Standard Area end */}
    </>
  );
}
