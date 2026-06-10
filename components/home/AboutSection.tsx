import BgLines from "@/components/ui/BgLines";

const highlights = [
  "PHP & Laravel",
  "React & Next.js",
  "MySQL & PostgreSQL",
  "AWS & Google Cloud",
];

export default function AboutSection() {
  return (
    <section className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>Hi, I&rsquo;m Md Raihan Hasan</h2>
                  <p>
                    I specialize in building scalable web applications and managing cloud
                    infrastructure. My expertise spans full-stack development, backend
                    architecture, cloud deployment, and database optimization using modern
                    technologies like PHP, Laravel, React, Next.js, AWS, and Google Cloud.
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope"></i>
                    <div className="content">
                      <span>Email Us</span>
                      <br />
                      <a href="mailto:contact@ryn.bd">contact@ryn.bd</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone"></i>
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="mailto:contact@ryn.bd">Contact Me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="/assets/images/about/about.jpg" alt="About Me" />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="/assets/images/about/btn-image1.png" alt="Image" />
                  <h6>10+ Years Experience</h6>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img src="/assets/images/about/btn-image2.png" alt="Image" />
                  <h6>350+ Projects</h6>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="dot-shape">
                  <img src="/assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
