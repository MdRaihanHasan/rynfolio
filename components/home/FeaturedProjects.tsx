import Link from "next/link";
import BgLines from "@/components/ui/BgLines";
import { featuredProjects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Exceptional Digital <br /> Products
              </h2>
            </div>
          </div>
        </div>
        {featuredProjects.map((project, index) => (
          <div className="row align-items-center pb-25" key={project.name}>
            <div className={`col-lg-6${index % 2 === 1 ? " order-lg-2" : ""}`}>
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img
                  src={project.image}
                  alt="Project"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className={`col-xl-5 col-lg-6${index % 2 === 1 ? " ms-auto" : ""}`}>
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">{project.tagline}</span>
                <h2>
                  <Link href="/project-details">{project.name}</Link>
                </h2>
                <p>{project.description}</p>
                <Link href="/project-details" className="details-btn">
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link href="/projects" className="theme-btn">
            View More Projects <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
