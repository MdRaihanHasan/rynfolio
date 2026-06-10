import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import BlogDetailsContent from "@/components/blog-details/BlogDetailsContent";
import CommentsSection from "@/components/blog-details/CommentsSection";
import CommentForm from "@/components/blog-details/CommentForm";
import BlogSidebar from "@/components/blog-details/BlogSidebar";

export const metadata: Metadata = {
  title: "Blog Details - Md Raihan Hasan",
};

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner title="Tips For Conducting to Usability Studies With Participants" />

      {/* Blog Details Area start */}
      <section className="blog-details-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <BlogDetailsContent />
                <CommentsSection />
                <div className="content">
                  <CommentForm />
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
