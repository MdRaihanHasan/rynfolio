import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import AboutIntro from "@/components/about/AboutIntro";
import MarqueeHeadline from "@/components/about/MarqueeHeadline";
import ResumeTimeline from "@/components/about/ResumeTimeline";
import ServicesList from "@/components/about/ServicesList";
import FaqSection from "@/components/about/FaqSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";

export const metadata: Metadata = {
  title: "About - Md Raihan Hasan | Full-Stack Web Developer & Server Specialist",
  description:
    "About Md Raihan Hasan – Full-Stack Web Developer & Server Specialist with 10+ years of experience in Laravel, React, Next.js, AWS, Google Cloud, and modern web technologies.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Me" />
      <AboutIntro />
      <MarqueeHeadline />
      <ResumeTimeline />
      <ServicesList />
      <FaqSection />
      <TestimonialsSection />
      <ClientLogosSection />
    </>
  );
}
