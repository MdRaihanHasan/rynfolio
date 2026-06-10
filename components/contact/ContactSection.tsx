import BgLines from "@/components/ui/BgLines";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let&rsquo;s Talk For your <span>Next Projects</span>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis
                </p>
              </div>
              <h6>Main Office</h6>
              <div className="widget_contact_info mb-35">
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt"></i> Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>{" "}
                    <a href="mailto:contact@ryn.bd">contact@ryn.bd</a>
                  </li>
                  <li>
                    <i className="far fa-phone"></i>{" "}
                    <a href="mailto:contact@ryn.bd">Contact Me</a>
                  </li>
                </ul>
              </div>
              <h5>Follow Me</h5>
              <div className="social-style-one mt-10">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
