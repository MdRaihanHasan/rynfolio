"use client";

import SocialLinks from "@/components/ui/SocialLinks";

export default function HiddenSidebar() {
  const closeSidebar = () => {
    document.body.classList.remove("side-content-visible");
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
                window.location.href = `mailto:contact@ryn.bd?subject=${encodeURIComponent(
                  "Project Inquiry"
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
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
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Send Message
                </button>
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
