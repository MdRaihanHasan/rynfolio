import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

export default function WhatIDoSection() {
  return (
    <section className="what-i-do-area pt-25 rpt-0 pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="what-i-do-images rmb-55 wow fadeInUp delay-0-2s">
              <div className="first-image">
                <img src="/assets/images/about/what-i-do1.jpg" alt="What I do" />
              </div>
              <div className="last-image">
                <img src="/assets/images/about/what-i-do2.jpg" alt="What I do" />
              </div>
              <div className="icon first">
                <i className="flaticon-asterisk-1"></i>
              </div>
              <div className="icon last">
                <i className="flaticon-asterisk-1"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="what-i-do-content wow fadeInUp delay-0-4s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">What I Do</span>
                <h2>
                  Real <span>Problem Solutions</span> Experience
                </h2>
                <p>
                  At vero eos et accusamus etodio dignissimos ducimus praesen tium voluptat
                  corrupti quos dolores quas molestias{" "}
                </p>
              </div>
              <ul className="list-style-two pb-50">
                <li>Full-Stack Development</li>
                <li>AWS / Google Cloud Setup</li>
                <li>Kubernetes &amp; Container Orchestration</li>
                <li>Advanced Security &amp; Firewall</li>
              </ul>
              <Link href="/about" className="theme-btn">
                Learn More <i className="far fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
