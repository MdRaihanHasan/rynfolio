"use client";

import { useState } from "react";
import BgLines from "@/components/ui/BgLines";

const faqs = [
  {
    question: "What Services Do You Provide?",
    answer:
      "I provide end-to-end full-stack web development, backend API development, cloud infrastructure & DevOps, database architecture, performance optimization, and technical consulting for scalable web applications.",
  },
  {
    question: "How Many Years Of Experience?",
    answer:
      "I have 10+ years of professional experience in full-stack web development, backend architecture, and cloud infrastructure, delivering scalable applications since 2016.",
  },
  {
    question: "What Technologies Do You Specialize In?",
    answer:
      "I specialize in PHP, Laravel, React, Next.js, JavaScript, MySQL, PostgreSQL, Redis, AWS, Google Cloud, Docker, Kubernetes, and modern DevOps tooling for building production-grade applications.",
  },
  {
    question: "Do You Take On Freelance Projects?",
    answer:
      "Yes, I take on freelance projects for full-stack development, backend API work, cloud deployment, database optimization, and technical consulting. Reach out via the contact form to discuss your project.",
  },
];

export default function FaqSection() {
  // The second FAQ item is open by default, matching the original template
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
              <div className="image-one">
                <img src="/assets/images/faqs/faq-one.jpg" alt="FAQ" />
              </div>
              <div className="image-two">
                <img src="/assets/images/faqs/faq-two.jpg" alt="FAQ" />
              </div>
              <div className="square-shape"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content-part rel z-2">
              <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                <h2>
                  Professional Solutions For Your <span>Digital Product</span> Design and
                  development
                </h2>
              </div>
              <div className="accordion wow fadeInUp delay-0-4s" id="faq-accordion">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div className="accordion-item" key={faq.question}>
                      <h5 className="accordion-header">
                        <button
                          type="button"
                          className={`accordion-button${isOpen ? "" : " collapsed"}`}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          {faq.question}
                        </button>
                      </h5>
                      <div
                        className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
