import Link from "next/link";
import ScrollTop from "@/components/layout/ScrollTop";
import NewsletterForm from "@/components/ui/NewsletterForm";
import BgLines from "@/components/ui/BgLines";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Navigation</h6>
                <ul>
                  {footerNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <NewsletterForm />
                <p>
                  I will never share any of your personal data. You can unsubscribe at any
                  time.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt"></i> Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>{" "}
                    <a href="mailto:contact@ryn.bd">contact@ryn.bd</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>© 2026 Md Raihan Hasan</p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <ScrollTop />
        </div>
        <BgLines />
      </div>
    </footer>
  );
}
