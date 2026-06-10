import Counter from "@/components/ui/Counter";

const infoItems = [
  { label: "based In", value: "Bangladesh", delay: "delay-0-2s" },
  { label: "experience", value: "10+ Years", delay: "delay-0-3s" },
  { label: "available", value: "40+ Hrs / Week", delay: "delay-0-4s" },
];

export default function AboutIntro() {
  return (
    <section id="about" className="about-area-two rel z-1 pt-130 rpt-100 rpb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1"></i>Introduction of Myself
                </span>
                <h2>
                  I&apos;m a Full-Stack Web Developer &amp; <span>Server Specialist</span>{" "}
                  building scalable applications since 2016
                </h2>
              </div>
              <div className="text pb-5">
                I specialize in building scalable web applications and managing cloud
                infrastructure. My expertise spans full-stack development, backend
                architecture, cloud deployment, and database optimization using modern
                technologies like PHP, Laravel, React, Next.js, AWS, and Google Cloud.
              </div>
              <div className="row">
                {infoItems.map((item) => (
                  <div className="col-xl-3 col-sm-4 col-6" key={item.label}>
                    <div className={`about-info-item wow fadeInUp ${item.delay}`}>
                      <small>{item.label}</small>
                      <b>{item.value}</b>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={350} suffix="plus" speed={3000} title="project completed" />
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="wow fadeInDown delay-0-2s">
                    <Counter end={10} suffix="plus" speed={3000} title="years of experience" />
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="wow fadeInDown delay-0-2s">
                    <Counter end={99} suffix="percent" speed={3000} title="satisfied clients" />
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="/assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
