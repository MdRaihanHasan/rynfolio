import BgLines from "@/components/ui/BgLines";
import ContactForm from "@/components/ui/ContactForm";

const focusAreas = [
  "Full-Stack Development",
  "Backend & API",
  "Cloud & DevOps",
  "Database Optimization",
];

export default function ContactSection() {
  return (
    <section className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Let&apos;s Connect</span>
                <h2 style={{ fontSize: "40px" }}>
                  Let&apos;s Build Something Amazing <span>Together</span>
                </h2>
                <p>
                  Have a project in mind? Let&apos;s discuss how I can help with full-stack
                  development, backend architecture, cloud infrastructure, or database
                  optimization.
                </p>
              </div>
              <ul className="list-style-two">
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
