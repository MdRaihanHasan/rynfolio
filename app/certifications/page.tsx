import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import { certifications, formatCertDate } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title:
    "Certifications - Md Raihan Hasan | Coursera Certificates in AWS, React, Laravel & Cloud",
  description:
    "Verified Coursera certifications earned by Md Raihan Hasan from Meta, Google, Amazon Web Services, Microsoft and more — covering AWS, Google Cloud, Azure, React, TypeScript, Laravel, Next.js and full-stack development.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageBanner title="Certifications" />

      {/* Certifications Area start */}
      <section className="certifications-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Verified Credentials</span>
                <h2>
                  Coursera <span>Certifications</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {certifications.map((cert, index) => (
              <div className="col-lg-4 col-md-6 item" key={cert.verifyUrl}>
                <div
                  className={`project-item style-two wow fadeInUp delay-0-${
                    (index % 3) * 2 + 2
                  }s`}
                >
                  <div className="project-image">
                    <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="details-btn"
                      aria-label={`Verify ${cert.title} on Coursera`}
                    >
                      <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">
                      {cert.issuer} &middot; {formatCertDate(cert.date)}
                    </span>
                    <h3>
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        {cert.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BgLines />
      </section>
      {/* Certifications Area end */}
    </>
  );
}
