import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

export default function CtaSection() {
  return (
    <section className="cta-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="cta-block wow fadeInUp delay-0-2s">
          <h2>
            Ready to <span>Build Something</span> Great?
          </h2>
          <p>
            Let&apos;s discuss your project and find the right solution. I typically respond
            within 24 hours.
          </p>
          <Link href="/contact" className="theme-btn">
            Let&apos;s Talk <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
