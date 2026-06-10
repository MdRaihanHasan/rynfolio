"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return <p style={{ color: "var(--primary-color)" }}>Thanks for subscribing!</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
    >
      <label htmlFor="email-address">
        <i className="far fa-envelope"></i>
      </label>
      <input id="email-address" type="email" placeholder="Your Email" required />
      <button>
        Subscribe <i className="far fa-angle-right"></i>
      </button>
    </form>
  );
}
