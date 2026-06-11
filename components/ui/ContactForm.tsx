"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone_number: data.get("phone_number"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
        {/* Honeypot — hidden from real visitors, catches bots */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        />
        <div className="col-md-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}{" "}
              <i className="far fa-angle-right"></i>
            </button>
            {status === "sent" && (
              <div id="msgSubmit" style={{ color: "var(--primary-color)", marginTop: 15 }}>
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div id="msgSubmit" style={{ color: "#e74c3c", marginTop: 15 }}>
                Something went wrong — please try again or email contact@ryn.bd directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
