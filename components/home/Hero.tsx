import Link from "next/link";
import Counter from "@/components/ui/Counter";
import BgLines from "@/components/ui/BgLines";

const counters = [
  { end: 10, title: "Years Of Experience", suffix: "plus" as const },
  { end: 350, title: "Project Complete", suffix: "plus" as const },
  { end: 99, title: "Client Satisfactions", suffix: "percent" as const },
  { end: 40, title: "Available Hours / Week", suffix: "plus" as const },
];

export default function Hero() {
  return (
    <section className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i&rsquo;m </span>
              <h1>
                <b>Raihan H. </b>DevOps Dev
              </h1>
              <p>
                Full-Stack Web Developer &amp; Server Specialist with 10+ years of
                experience
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="theme-btn">
                  Hire Me <i className="far fa-angle-right"></i>
                </Link>
                <Link href="/projects" className="read-more">
                  View Our Work <i className="far fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counters.map((counter) => (
                <Counter key={counter.title} {...counter} />
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <img src="/assets/images/hero/me.png" alt="Author" />
              <div className="progress-shape" style={{ opacity: 0 }}>
                <img src="/assets/images/hero/progress-shape.png" alt="Progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
