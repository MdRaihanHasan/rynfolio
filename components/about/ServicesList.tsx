import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

const services = [
  {
    number: "01.",
    title: "Full-Stack Web Development",
    text: "Building complete web applications from backend to frontend using Laravel, React, and Next.js with modern development best practices",
    delay: "delay-0-2s",
  },
  {
    number: "02.",
    title: "Backend API Development",
    text: "Creating robust RESTful APIs and GraphQL endpoints with Laravel, Node.js, and cloud-native services for seamless data integration",
    delay: "delay-0-4s",
  },
  {
    number: "03.",
    title: "Database Architecture",
    text: "Designing scalable database systems with MySQL, PostgreSQL, and Redis optimization for high-performance web applications",
    delay: "delay-0-2s",
  },
  {
    number: "04.",
    title: "Cloud Infrastructure & DevOps",
    text: "Deploying and managing scalable infrastructure on AWS and Google Cloud with Docker, Kubernetes, and CI/CD pipelines",
    delay: "delay-0-4s",
  },
  {
    number: "05.",
    title: "Performance Optimization",
    text: "Enhancing web application performance through code optimization, caching strategies, and Web Vitals improvement",
    delay: "delay-0-2s",
  },
  {
    number: "06.",
    title: "System Architecture & Consulting",
    text: "Providing expert technical consultation for application architecture, technology stack selection, and system scalability planning",
    delay: "delay-0-4s",
  },
];

export default function ServicesList() {
  return (
    <section className="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">What I do</span>
              <h2>Services I Provide</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.number}>
              <div className={`service-item wow fadeInUp ${service.delay}`}>
                <div className="number">{service.number}</div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link href="/services" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BgLines />
    </section>
  );
}
