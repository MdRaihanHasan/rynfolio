"use client";

import { useState } from "react";

import SocialLinks from "@/components/ui/SocialLinks";

type Status = "idle" | "sending" | "sent" | "error";

export default function HiddenSidebar() {
  const [status, setStatus] = useState<Status>("idle");

  const closeSidebar = () => {
    document.body.classList.remove("side-content-visible");
  };

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
    <>
      {/* Form Back Drop */}
      <div className="form-back-drop" onClick={closeSidebar}></div>

      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={closeSidebar}>
            <span className="fa fa-times"></span>
          </div>
          <div className="title">
            <h4>Let&apos;s Connect</h4>
          </div>

          {/* Appointment Form */}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Describe your project, timeline, and requirements..."
                  rows={5}
                  required
                ></textarea>
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
              <div className="form-group">
                <button type="submit" className="theme-btn" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "sent" && (
                  <div style={{ color: "var(--primary-color)", marginTop: 15 }}>
                    Thanks! Your message has been sent.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ color: "#e74c3c", marginTop: 15 }}>
                    Something went wrong — please email contact@ryn.bd directly.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Social Icons */}
          <SocialLinks />
        </div>
      </section>
      {/* End Hidden Sidebar */}
    </>
  );
}
