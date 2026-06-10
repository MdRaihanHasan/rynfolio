import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesSection() {
  return (
    <section className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1">
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">What I Offer</span>
              <h2>Services I Provide</h2>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
          {services.map((service, index) => (
            <div className="service-item-two wow fadeInUp delay-0-2s" key={service.title}>
              <div className="icon">
                <img src={service.icon} alt="Icon" />
              </div>
              <h5 className="title">
                <Link href="/services">
                  {String(index + 1).padStart(2, "0")}. {service.title}
                </Link>
              </h5>
              <div className="text">{service.description}</div>
              <ul className="list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="/services" className="details-btn">
                <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link href="/services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
}
