import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ResumeSection from "@/components/home/ResumeSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import BlogSection from "@/components/home/BlogSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
      <ClientLogosSection />
    </>
  );
}
