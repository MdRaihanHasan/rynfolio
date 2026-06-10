import type { Metadata } from "next";
import GithubRepos from "@/components/projects/GithubRepos";
import "./projects.css";

export const metadata: Metadata = {
  title:
    "Projects - Md Raihan Hasan | Full-Stack Web Developer & Server Specialist",
  description:
    "Projects by Md Raihan Hasan – Full-Stack Web Developer & Server Specialist. Featured client work and open-source GitHub repositories covering Laravel, React, Next.js, AWS, and modern web technologies.",
  openGraph: {
    title:
      "Projects - Md Raihan Hasan | Full-Stack Web Developer & Server Specialist",
    description:
      "Featured client projects and open-source GitHub repositories by Md Raihan Hasan – Full-Stack Web Developer & Server Specialist.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <GithubRepos />;
}
