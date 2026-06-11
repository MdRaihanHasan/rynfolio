"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "sent") {
    return <p style={{ color: "var(--primary-color)" }}>Thanks for subscribing!</p>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email") }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-address">
        <i className="far fa-envelope"></i>
      </label>
      <input id="email-address" type="email" name="email" placeholder="Your Email" required />
      <button disabled={status === "sending"}>
        {status === "sending" ? "Subscribing..." : "Subscribe"} <i className="far fa-angle-right"></i>
      </button>
      {status === "error" && (
        <p style={{ color: "#e74c3c", marginTop: 10 }}>
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
