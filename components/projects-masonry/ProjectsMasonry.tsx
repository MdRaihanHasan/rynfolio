"use client";

import { useState } from "react";
import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

type FilterKey =
  | "*"
  | "design"
  | "branding"
  | "marketing"
  | "development"
  | "apps"
  | "graphics";

type ProjectItem = {
  image: string;
  categories: Exclude<FilterKey, "*">[];
  delay: string;
  subTitle: string;
  title: string;
};

const filters: { key: FilterKey; label: string }[] = [
  { key: "*", label: "Show All" },
  { key: "design", label: "Design" },
  { key: "branding", label: "Branding" },
  { key: "marketing", label: "Marketing" },
  { key: "development", label: "Development" },
  { key: "apps", label: "Mobile Apps" },
  { key: "graphics", label: "Graphics" },
];

const projects: ProjectItem[] = [
  {
    image: "/assets/images/projects/project-masonry1.jpg",
    categories: ["branding", "development"],
    delay: "delay-0-2s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry2.jpg",
    categories: ["design", "marketing", "graphics"],
    delay: "delay-0-3s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry3.jpg",
    categories: ["branding", "marketing"],
    delay: "delay-0-4s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry4.jpg",
    categories: ["design", "development"],
    delay: "delay-0-2s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry5.jpg",
    categories: ["marketing", "apps", "design"],
    delay: "delay-0-3s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry6.jpg",
    categories: ["design", "development"],
    delay: "delay-0-4s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry7.jpg",
    categories: ["branding", "graphics"],
    delay: "delay-0-2s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry8.jpg",
    categories: ["design", "apps", "graphics"],
    delay: "delay-0-3s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
  {
    image: "/assets/images/projects/project-masonry9.jpg",
    categories: ["design", "marketing"],
    delay: "delay-0-4s",
    subTitle: "Product Design",
    title: "Mobile Application Design",
  },
];

export default function ProjectsMasonry() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("*");

  const visibleProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
      <div className="container">
        <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
          {filters.map((filter) => (
            <li
              key={filter.key}
              data-filter={filter.key === "*" ? "*" : `.${filter.key}`}
              className={activeFilter === filter.key ? "current" : ""}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </li>
          ))}
        </ul>
        <div className="row project-masonry-active">
          {visibleProjects.map((project) => (
            <div
              key={project.image}
              className={`col-xl-4 col-md-6 item ${project.categories.join(" ")}`}
            >
              <div className={`project-item style-three wow fadeInUp ${project.delay}`}>
                <div className="project-image">
                  <img src={project.image} alt="Project" />
                </div>
                <div className="project-content">
                  <Link href="/project-details" className="project-btn">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <span className="sub-title">{project.subTitle}</span>
                  <h4>
                    <Link href="/project-details">{project.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="project-btn mt-25 text-center wow fadeInUp delay-0-2s">
          <Link href="/projects" className="theme-btn">
            View More Projects <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
