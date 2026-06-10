import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

type PricingPlan = {
  title: string;
  savePercent: string;
  price: string;
  description: string;
  features: { label: string; unable?: boolean; style?: React.CSSProperties }[];
  delay: string;
};

const plans: PricingPlan[] = [
  {
    title: "Starter",
    savePercent: "Perfect for small projects",
    price: "99",
    description: "Essential development and deployment services to get your project online.",
    features: [
      { label: "Web Development" },
      { label: "Basic Cloud Hosting Setup" },
      { label: "SSL & DNS Configuration" },
      { label: "Email Setup" },
      { label: "CI/CD Pipeline", unable: true },
      { label: "Monitoring & Alerts", unable: true },
    ],
    delay: "delay-0-2s",
  },
  {
    title: "Professional",
    savePercent: "Best for growing businesses",
    price: "199",
    description: "Complete full-stack development with cloud infrastructure and automation.",
    features: [
      { label: "Full-Stack Development" },
      { label: "AWS / Google Cloud Setup" },
      { label: "CI/CD Pipeline" },
      { label: "Database Optimization" },
      { label: "Monitoring & Logging" },
      { label: "Kubernetes Orchestration", unable: true },
    ],
    delay: "delay-0-4s",
  },
  {
    title: "Enterprise",
    savePercent: "For large-scale systems",
    price: "399",
    description:
      "Advanced DevOps and architecture for high-traffic, enterprise-grade applications.",
    features: [
      { label: "Custom System Architecture" },
      { label: "Kubernetes & Container Orchestration", style: { fontSize: "16px" } },
      { label: "Advanced Security & Firewall" },
      { label: "Auto-Scaling & Load Balancing" },
      { label: "24/7 Monitoring & Alerts" },
      { label: "Performance Optimization" },
    ],
    delay: "delay-0-6s",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Pricing Package</span>
              <h2>
                Simple &amp; <span>Transparent Pricing</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {plans.map((plan) => (
            <div className="col-lg-4 col-md-6" key={plan.title}>
              <div className={`pricing-item wow fadeInUp ${plan.delay}`}>
                <div className="pricing-header">
                  <h4 className="title">{plan.title}</h4>
                  <p className="save-percent">{plan.savePercent}</p>
                  <span className="price">{plan.price}</span>
                </div>
                <div className="pricing-details">
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={feature.unable ? "unable" : undefined}
                        style={feature.style}
                      >
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="theme-btn">
                    Choose Package <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BgLines />
    </section>
  );
}
