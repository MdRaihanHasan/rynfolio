import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

export default function ErrorContent() {
  return (
    <>
      {/* 404 Error Area Start */}
      <section className="error-area pt-185 rpt-130 pb-130 rpb-100 rel z-1 text-center">
        <div className="container">
          <div className="error-content">
            <div className="image mb-85 rmb-55 wow fadeInUp delay-0-2s">
              <img src="/assets/images/shape/404-error.png" alt="Error" />
            </div>
            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
              <h1>OPPS!</h1>
              <h2>This Page Are Can&apos;t be Found</h2>
            </div>
            <Link href="/" className="theme-btn wow fadeInUp delay-0-2s">
              Go To Homepage <i className="far fa-angle-right"></i>
            </Link>
          </div>
        </div>
        <BgLines />
      </section>
      {/* 404 Error Area End */}
    </>
  );
}
