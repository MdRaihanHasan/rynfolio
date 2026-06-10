import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

const logos = [
  { src: "/assets/images/client-logos/client-logo1.png", delay: "delay-0-2s" },
  { src: "/assets/images/client-logos/client-logo2.png", delay: "delay-0-3s" },
  { src: "/assets/images/client-logos/client-logo3.png", delay: "delay-0-4s" },
  { src: "/assets/images/client-logos/client-logo4.png", delay: "delay-0-5s" },
  { src: "/assets/images/client-logos/client-logo5.png", delay: "delay-0-6s" },
];

export default function ClientLogosSection() {
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h2>
                Empowering Businesses <span>Worldwide</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap">
          {logos.map((logo) => (
            <Link
              className={`client-logo-item wow fadeInUp ${logo.delay}`}
              href="/contact"
              key={logo.src}
            >
              <img src={logo.src} alt="Client Logo" />
            </Link>
          ))}
        </div>
      </div>
      <BgLines />
    </div>
  );
}
