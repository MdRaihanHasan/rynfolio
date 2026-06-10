import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

const skills = [
  {
    name: "PHP &\nLaravel",
    percent: "90%",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    delay: "delay-0-2s",
  },
  {
    name: "React &\nNext.js",
    percent: "85%",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    delay: "delay-0-3s",
  },
  {
    name: "MySQL &\nPostgreSQL",
    percent: "95%",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    delay: "delay-0-4s",
  },
  {
    name: "AWS &\nGoogle Cloud",
    percent: "90%",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    delay: "delay-0-5s",
  },
  {
    name: "Docker &\nKubernetes",
    percent: "90%",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    delay: "delay-0-2s",
  },
  {
    name: "Redis &\nQueues",
    percent: "85%",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    delay: "delay-0-3s",
  },
  {
    name: "Full-Stack\nDevelopment",
    percent: "90%",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    delay: "delay-0-4s",
  },
  {
    name: "Cloud &\nDevOps",
    percent: "90%",
    image: "/assets/images/skills/skill8.png",
    delay: "delay-0-5s",
  },
];

export default function SkillsSection() {
  return (
    <section className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let&rsquo;s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    I&rsquo;m proficient in modern web technologies and cloud platforms,
                    enabling me to build robust, scalable applications from backend to
                    frontend deployment.
                  </p>
                </div>
                <Link href="/about" className="theme-btn">
                  Learn More <i className="far fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {skills.map((skill) => {
                    const [line1, line2] = skill.name.split("\n");
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                        key={skill.name}
                      >
                        <div className={`skill-item wow fadeInUp ${skill.delay}`}>
                          <img src={skill.image} alt={line1} />
                          <h5>
                            {line1} <br /> {line2}
                          </h5>
                          <span className="percent">{skill.percent}</span>
                        </div>
                      </div>
                    );
                  })}
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
