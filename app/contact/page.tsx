import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import AvailabilityBadge from "@/components/contact/AvailabilityBadge";
import ContactSection from "@/components/contact/ContactSection";
import LocationMap from "@/components/contact/LocationMap";
import "./contact.css";

export const metadata: Metadata = {
  title:
    "Contact - Md Raihan Hasan | Full-Stack Web Developer & Server Specialist",
  description:
    "Get in touch with Md Raihan Hasan – Full-Stack Web Developer & Server Specialist. Available for full-stack development, backend API, cloud infrastructure, and database optimization projects.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Get in Touch" crumb="Contact" />
      <AvailabilityBadge />
      <ContactSection />
      <LocationMap />
    </>
  );
}
