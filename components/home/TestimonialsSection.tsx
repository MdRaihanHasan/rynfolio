"use client";

import { useRef } from "react";
import Slider from "react-slick";
import BgLines from "@/components/ui/BgLines";

const testimonials = [
  {
    name: "BernieB",
    text: "Raihan delivered a scalable backend that grew with our business. His Laravel expertise is outstanding.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/fe90a3b862397eb63f02afc8386529e6-1639633308715/429a9f0a-1a57-47e6-89d1-5dd1b5780ac9.jpg",
  },
  {
    name: "Alexcaneart",
    text: "AWS deployment cut our release time by 70%. Raihan's DevOps skills are top-tier.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/93062892c25ed3a3f3a76f7f93d2cdc5-774329211672177362600/JPEG_20221227_234241_1440577402495041740.jpg",
  },
  {
    name: "Van",
    text: "He built our multi-tenant SaaS from scratch with excellent performance and security.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/64764559481060e07d08caaf44ddc620-1592846327503/93409b47-8d00-485e-8692-8c3f7ab55e9d.jpg",
  },
  {
    name: "Steve Radley",
    text: "Raihan optimized our database and reduced query time significantly. Highly recommended.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7d71ab91f182aa28fb03d477949f6a32-1679369917733/83f6e441-c9d1-437d-a671-07f05d8bcfb4.jpeg",
  },
  {
    name: "Nathan Bowman",
    text: "His cloud architecture on AWS saved us thousands. Reliable and efficient work.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/43ced588e62fd281f65d78504dc304fc-1647529921016/fadd34e5-1d42-456e-aa3e-ae353b14f2a7.jpg",
  },
  {
    name: "abdonejam",
    text: "Raihan delivered our full-stack app ahead of schedule. Great communication and code quality.",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7bf223f420936bc678544cebbff72db6-1652732969747/8c2482af-011b-4f2f-a565-6b26e008ea8a.jpg",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);

  return (
    <section className="testimonials-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-90">
            <div className="col-lg-4">
              <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>
                    What <span>Clients Say</span>
                  </h2>
                  <p>
                    I transformed our backend infrastructure and delivered scalable
                    solutions that handle our growth seamlessly.
                  </p>
                </div>
                <div className="slider-arrows">
                  {/* jQuery slick used to add .slick-arrow at runtime; it carries the button design */}
                  <button
                    className="testimonial-prev slick-arrow"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <i className="fal fa-arrow-left"></i>
                  </button>
                  <button
                    className="testimonial-next slick-arrow"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <i className="fal fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider ref={sliderRef} {...sliderSettings} className="testimonials-wrap">
                {testimonials.map((testimonial) => (
                  <div className="testimonial-item" key={testimonial.name}>
                    <div className="author">
                      <img src={testimonial.image} alt="Author" />
                    </div>
                    <div className="text">{testimonial.text}</div>
                    <div className="testi-des">
                      <h5>{testimonial.name}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
