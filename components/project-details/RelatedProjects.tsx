import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

const relatedProjects = [
  {
    image: "/assets/images/projects/related-project1.jpg",
    subTitle: "Graphics Design",
    title: "Brand Identity Design",
    delay: "delay-0-2s",
  },
  {
    image: "/assets/images/projects/related-project2.jpg",
    subTitle: "Product Design",
    title: "Mobile Apps Design",
    delay: "delay-0-4s",
  },
  {
    image: "/assets/images/projects/related-project3.jpg",
    subTitle: "Product Design",
    title: "Dashboard Development",
    delay: "delay-0-6s",
  },
];

export default function RelatedProjects() {
  return (
    <section className="related-projects-area pb-70 rpb-40 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <h2>Related Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {relatedProjects.map((project) => (
            <div className="col-xl-4 col-md-6" key={project.title}>
              <div className={`project-item style-two wow fadeInUp ${project.delay}`}>
                <div className="project-image before-after-none">
                  <img src={project.image} alt="Project" />
                </div>
                <div className="project-content">
                  <span className="sub-title">{project.subTitle}</span>
                  <h4>
                    <Link href="/project-details">{project.title}</Link>
                  </h4>
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
