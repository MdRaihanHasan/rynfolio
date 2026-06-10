import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ProjectsMasonry from "@/components/projects-masonry/ProjectsMasonry";

export const metadata: Metadata = {
  title: "Projects Masonry - Md Raihan Hasan",
};

export default function ProjectsMasonryPage() {
  return (
    <>
      <PageBanner title="Project Masonry" />
      <ProjectsMasonry />
    </>
  );
}
