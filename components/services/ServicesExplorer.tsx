"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

type ServiceDetail = {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryIcon: string;
  shortDescription: string;
  description: string;
  features: string[];
  technologies: string[];
  startingFrom: string;
  delay: string;
};

const SERVICES: ServiceDetail[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Full-Stack Web Development",
    category: "Full Stack",
    categoryIcon: "far fa-layer-group",
    shortDescription:
      "Building complete web applications from backend to frontend using Laravel, React, and Next.js with modern development best practices.",
    description:
      "I build complete, production-ready web applications from the ground up. From initial architecture to final deployment, I handle every layer of the stack to deliver cohesive, maintainable systems that scale with your business.",
    features: [
      "Custom web application architecture",
      "Frontend with React / Next.js",
      "Backend API with Laravel / Node.js",
      "Database design and integration",
      "Authentication & authorization",
      "Testing and quality assurance",
    ],
    technologies: [
      "Laravel",
      "React",
      "Next.js",
      "PHP",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
    ],
    startingFrom: "$2,500",
    delay: "delay-0-2s",
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Development",
    category: "Frontend",
    categoryIcon: "far fa-palette",
    shortDescription:
      "Modern, responsive user interfaces with React and Next.js, focused on performance, accessibility, and exceptional user experience.",
    description:
      "Pixel-perfect, performant user interfaces built with modern frontend frameworks. I focus on accessibility, responsiveness, and delivering exceptional user experiences across all devices and screen sizes.",
    features: [
      "React / Next.js application development",
      "Responsive design implementation",
      "State management (Redux, Zustand)",
      "Performance optimization",
      "Accessibility (WCAG compliance)",
      "SEO optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
    startingFrom: "$1,500",
    delay: "delay-0-4s",
  },
  {
    id: "backend",
    number: "03",
    title: "Backend API Development",
    category: "Backend",
    categoryIcon: "far fa-server",
    shortDescription:
      "Creating robust RESTful APIs and GraphQL endpoints with Laravel, Node.js, and cloud-native services for seamless data integration.",
    description:
      "Robust, secure, and well-documented backend APIs that power your applications. I design and implement APIs that handle authentication, validation, business logic, and third-party integrations with reliability and performance in mind.",
    features: [
      "RESTful and GraphQL API design",
      "Authentication (OAuth2, JWT, Sanctum)",
      "API documentation (OpenAPI / Swagger)",
      "Third-party API integration",
      "Rate limiting and caching",
      "Comprehensive automated testing",
    ],
    technologies: ["Laravel", "Node.js", "PHP", "Python", "GraphQL", "Redis", "REST"],
    startingFrom: "$1,800",
    delay: "delay-0-2s",
  },
  {
    id: "database",
    number: "04",
    title: "Database Architecture",
    category: "Database",
    categoryIcon: "far fa-database",
    shortDescription:
      "Designing scalable database systems with MySQL, PostgreSQL, and Redis optimization for high-performance web applications.",
    description:
      "Scalable, performant database architectures designed for high-traffic web applications. I handle schema design, query optimization, indexing, replication, and backup strategies to keep your data fast, safe, and always available.",
    features: [
      "Schema design and normalization",
      "Query optimization and indexing",
      "Replication and sharding",
      "Backup and disaster recovery",
      "Zero-downtime migration strategies",
      "Performance monitoring and tuning",
    ],
    technologies: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "SQL"],
    startingFrom: "$1,200",
    delay: "delay-0-4s",
  },
  {
    id: "devops",
    number: "05",
    title: "Cloud Infrastructure & DevOps",
    category: "DevOps",
    categoryIcon: "far fa-cloud",
    shortDescription:
      "Deploying and managing scalable infrastructure on AWS and Google Cloud with Docker, Kubernetes, and CI/CD pipelines.",
    description:
      "Production-grade cloud infrastructure with automated deployment pipelines. I design and implement cloud architectures that scale automatically, recover from failures, and deploy code with confidence using modern DevOps practices.",
    features: [
      "AWS and Google Cloud architecture",
      "Docker and Kubernetes setup",
      "CI/CD pipeline configuration",
      "Infrastructure as Code (Terraform)",
      "Centralized monitoring and logging",
      "Auto-scaling and load balancing",
    ],
    technologies: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
    ],
    startingFrom: "$2,000",
    delay: "delay-0-2s",
  },
  {
    id: "consulting",
    number: "06",
    title: "System Architecture & Consulting",
    category: "Consulting",
    categoryIcon: "far fa-lightbulb-on",
    shortDescription:
      "Expert technical consultation for application architecture, technology stack selection, and system scalability planning.",
    description:
      "Strategic technical consulting to help you make the right technology decisions. Whether you are starting a new project, scaling an existing system, or planning a major migration, I provide expert guidance backed by 10+ years of hands-on experience.",
    features: [
      "Technology stack selection",
      "Architecture review and planning",
      "Scalability assessment",
      "Code review and audit",
      "Security assessment",
      "Migration strategy and planning",
    ],
    technologies: [
      "Architecture",
      "Strategy",
      "Code Review",
      "Security",
      "Performance",
      "Planning",
    ],
    startingFrom: "$150/hr",
    delay: "delay-0-4s",
  },
];

const FILTERS: { id: string; label: string }[] = [
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
  { id: "consulting", label: "Consulting" },
];

export default function ServicesExplorer() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selected, setSelected] = useState<ServiceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (service: ServiceDetail) => {
    setSelected(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  return (
    <>
      {/* Services Area start */}
      <section id="services" className="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">What I Offer</span>
                <h2>
                  End-to-End <span>Web Solutions</span> for Modern Businesses
                </h2>
                <p>
                  From scalable web applications to cloud infrastructure, I deliver
                  production-grade solutions across the entire stack. Click any service below
                  to see what&apos;s included, technologies, and pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="service-filter wow fadeInUp delay-0-3s" id="serviceFilter">
            <button
              type="button"
              className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              <i className="far fa-th"></i> All Services
            </button>
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-btn${activeFilter === filter.id ? " active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="row" id="serviceGrid">
            {SERVICES.map((service) => {
              const visible = activeFilter === "all" || activeFilter === service.id;
              return (
                <div
                  key={service.id}
                  className="col-lg-6"
                  style={visible ? undefined : { display: "none" }}
                >
                  <div
                    className={`service-item wow fadeInUp ${service.delay}${visible ? "" : " is-hidden"}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openModal(service)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal(service);
                      }
                    }}
                  >
                    <div className="number">{service.number}.</div>
                    <div className="content">
                      <span className="service-category">
                        <i className={service.categoryIcon}></i> &nbsp;{service.category}
                      </span>
                      <h4>{service.title}</h4>
                      <p>{service.shortDescription}</p>
                    </div>
                    <button type="button" className="details-btn" aria-label="View details">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BgLines />
      </section>
      {/* Services Area end */}

      {/* Service Detail Modal */}
      <div
        className={`service-modal${modalOpen ? " active" : ""}`}
        id="serviceModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        aria-hidden={!modalOpen}
      >
        <div className="modal-backdrop" onClick={closeModal}></div>
        <div className="modal-dialog">
          <button type="button" className="modal-close" onClick={closeModal} aria-label="Close">
            <i className="far fa-times"></i>
          </button>
          <div className="modal-header">
            <div className="modal-meta">
              <span className="modal-number" id="modalNumber">
                {selected?.number ?? "01"}
              </span>
              <span className="modal-category" id="modalCategory">
                {selected?.category ?? "Full Stack"}
              </span>
            </div>
            <h2 className="modal-title" id="modalTitle">
              {selected?.title ?? "Service Title"}
            </h2>
          </div>
          <div className="modal-body">
            <p className="modal-description" id="modalDescription">
              {selected?.description ?? "Description..."}
            </p>
            <div className="modal-section">
              <h4>What&apos;s Included</h4>
              <ul className="modal-features" id="modalFeatures">
                {selected?.features.map((feature) => (
                  <li key={feature}>
                    <i className="far fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-section">
              <h4>Technologies</h4>
              <div className="modal-techs" id="modalTechs">
                {selected?.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-price">
              <span>Starting from</span>
              <strong id="modalPrice">{selected?.startingFrom ?? "$1,500"}</strong>
            </div>
            <Link
              href={
                selected
                  ? `/contact#service=${encodeURIComponent(selected.title)}`
                  : "/contact"
              }
              className="theme-btn"
              id="modalCta"
            >
              Get Started <i className="far fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* End Service Modal */}
    </>
  );
}
