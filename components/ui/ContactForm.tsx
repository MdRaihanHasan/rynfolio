"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone_number")}`,
      `Service: ${data.get("subject")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:contact@ryn.bd?subject=${encodeURIComponent(
      `Project Inquiry: ${data.get("subject")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Full Name"
              required
            />
            <label htmlFor="name" className="for-icon">
              <i className="far fa-user"></i>
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="your@email.com"
              required
            />
            <label htmlFor="email" className="for-icon">
              <i className="far fa-envelope"></i>
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              className="form-control"
              placeholder="Please enter your Phone Number"
            />
            <label htmlFor="phone_number" className="for-icon">
              <i className="far fa-phone"></i>
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="subject">Service Interested In *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="e.g. Full-Stack Development"
              required
            />
            <label htmlFor="subject" className="for-icon">
              <i className="far fa-text"></i>
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              placeholder="Describe your project, timeline, and requirements..."
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">
              Send Message <i className="far fa-angle-right"></i>
            </button>
            {sent && (
              <div id="msgSubmit" style={{ color: "var(--primary-color)", marginTop: 15 }}>
                Your email client should open now — or write to contact@ryn.bd directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
