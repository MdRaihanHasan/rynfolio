import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ProjectDetailsArea from "@/components/project-details/ProjectDetailsArea";
import RelatedProjects from "@/components/project-details/RelatedProjects";

export const metadata: Metadata = {
  title: "Project Details - Md Raihan Hasan",
};

export default function ProjectDetailsPage() {
  return (
    <>
      <PageBanner title="Mobile Application Design" />
      <ProjectDetailsArea />
      <RelatedProjects />
    </>
  );
}
