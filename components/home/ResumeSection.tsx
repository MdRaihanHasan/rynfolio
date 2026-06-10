import BgLines from "@/components/ui/BgLines";

const positions = [
  {
    years: "2022 - Present",
    title: "Full-Stack Developer and DevOps Engineer",
    company: "Make Hub",
    delay: "delay-0-3s",
  },
  {
    years: "2018 - 2020",
    title: "Wordpress Developer",
    company: "RkoSoft",
    delay: "delay-0-4s",
  },
  {
    years: "2016 - 2022",
    title: "Web Developer & Full-Stack Engineer",
    company: "Independent Freelancer",
    delay: "delay-0-2s",
  },
  {
    years: "10+ Years",
    title: "Experience in full-stack web development",
    company: "Build Complete Digital Systems",
    delay: "delay-0-4s",
  },
];

export default function ResumeSection() {
  return (
    <section className="resume-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1"></i>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Work Positions</span>
                  <h2>
                    I build Scalable Web Solutions <br /> Since 2016
                  </h2>
                </div>
              </div>
            </div>
            <div className="resume-items-wrap">
              <div className="row justify-content-between">
                {positions.map((position) => (
                  <div className="col-xl-5 col-md-6" key={position.title}>
                    <div className={`resume-item wow fadeInUp ${position.delay}`}>
                      <div className="icon">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <div className="content">
                        <span className="years">{position.years}</span>
                        <h4>{position.title}</h4>
                        <span className="company">{position.company}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
