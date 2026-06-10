import type { ReactNode } from "react";
import Link from "next/link";
import BgLines from "@/components/ui/BgLines";

type TimelineEntry = {
  duration: string;
  title: ReactNode;
};

const workColumns: TimelineEntry[][] = [
  [
    {
      duration: "2022 - Present",
      title: (
        <>
          Full-Stack Developer <br /> &amp; DevOps Engineer
        </>
      ),
    },
    { duration: "2018 - 2020", title: "WordPress Developer" },
  ],
  [
    {
      duration: "2016 - 2022",
      title: (
        <>
          Web Developer &amp;
          <br /> Full-Stack Engineer
        </>
      ),
    },
    { duration: "2014 - 2016", title: "Junior Web Developer" },
  ],
];

const studyColumns: TimelineEntry[][] = [
  [
    {
      duration: "2022 - Present",
      title: (
        <>
          AWS &amp; Google <br /> Cloud Architecture
        </>
      ),
    },
    {
      duration: "2021 - 2022",
      title: (
        <>
          Advanced Laravel &amp; <br /> API Engineering
        </>
      ),
    },
  ],
  [
    {
      duration: "2019 - 2020",
      title: (
        <>
          Unity Engine &amp;
          <br /> UE4 Engine
        </>
      ),
    },
    {
      duration: "2016 - 2019",
      title: (
        <>
          PHP &amp; Wordpress <br /> Development <br />
        </>
      ),
    },
  ],
];

function ResumeColumns({ columns }: { columns: TimelineEntry[][] }) {
  return (
    <>
      {columns.map((column, columnIndex) => (
        <div className="resume-column" key={columnIndex}>
          {column.map((entry, entryIndex) => (
            <div className="timeline-item" key={entryIndex}>
              <div className="resume-content">
                <span className="duration">
                  <i className="far fa-calendar-alt"></i> {entry.duration}{" "}
                </span>
                <h5 className="title">{entry.title}</h5>
              </div>
              <a href="#" className="details-btn">
                <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default function ResumeTimeline() {
  return (
    <section id="resume" className="bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100">
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1"></i>MY Expereince resume
              </span>
              <h2>work &amp; Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link href="/contact" className="theme-btn mb-35">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-6">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down"></i>
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                <ResumeColumns columns={workColumns} />
                <div className="resume-line">
                  <span className="resume-dots"></span>
                  <span className="resume-dots"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">study</span>
                <div className="arrow">
                  <i className="far fa-arrow-down"></i>
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                <ResumeColumns columns={studyColumns} />
                <div className="resume-line">
                  <span className="resume-dots"></span>
                  <span className="resume-dots"></span>
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
