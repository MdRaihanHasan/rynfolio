import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import HiddenSidebar from "@/components/layout/HiddenSidebar";
import Footer from "@/components/layout/Footer";
import WowInit from "@/components/ui/WowInit";

const stylesheets = [
  "/assets/css/flaticon.min.css",
  "/assets/css/fontawesome-5.14.0.min.css",
  "/assets/css/bootstrap.min.css",
  "/assets/css/nice-select.min.css",
  "/assets/css/animate.min.css",
  "/assets/css/slick.min.css",
  "/assets/css/style.css",
];

export const metadata: Metadata = {
  title:
    "Md Raihan Hasan – Full-Stack Web Developer & Server Specialist | Laravel, React, Next.js, AWS",
  description:
    "Full-Stack Web Developer & Server Specialist. Expert in Laravel, React, Next.js, PHP, AWS, Google Cloud, MySQL, PostgreSQL, Redis, and cloud infrastructure. Delivering scalable applications since 2016.",
  openGraph: {
    title:
      "Md Raihan Hasan – Full-Stack Web Developer & Server Specialist | Laravel, React, Next.js, AWS",
    description:
      "Full-Stack Web Developer & Server Specialist. Expert in Laravel, React, Next.js, PHP, AWS, Google Cloud, MySQL, PostgreSQL, Redis, and cloud infrastructure. Delivering scalable applications since 2016.",
    type: "website",
  },
  icons: {
    shortcut: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="home-one">
        {stylesheets.map((href) => (
          // React 19 hoists stylesheet links with a precedence into <head>,
          // preserving render order so style.css stays last.
          <link key={href} rel="stylesheet" href={href} precedence="default" />
        ))}
        <div className="page-wrapper">
          <Preloader />
          <Header />
          <HiddenSidebar />
          {children}
          <Footer />
        </div>
        <WowInit />
      </body>
    </html>
  );
}
