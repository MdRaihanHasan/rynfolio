import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import WhatIDoSection from "@/components/services/WhatIDoSection";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import PricingSection from "@/components/services/PricingSection";
import CtaSection from "@/components/services/CtaSection";
import "./services.css";

export const metadata: Metadata = {
  title: "Services - Md Raihan Hasan | Full-Stack Web Developer & Server Specialist",
  description:
    "Services offered by Md Raihan Hasan – Full-Stack Web Development, Backend API, Database Architecture, Cloud Infrastructure & DevOps, Performance Optimization, and System Architecture Consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Popular Service" />
      <WhatIDoSection />
      <ServicesExplorer />
      <PricingSection />
      <CtaSection />
    </>
  );
}
