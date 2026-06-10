"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Replaces wow.js: hides .wow elements until they scroll into view,
 * then lets animate.css classes (fadeInUp etc.) play by adding .animated.
 */
export default function WowInit() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".wow"));

    const pending = elements.filter((el) => !el.classList.contains("animated"));
    pending.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.animationName = "none";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.visibility = "visible";
          el.style.animationName = "";
          el.classList.add("animated");
          observer.unobserve(el);
        });
      },
      { threshold: 0 }
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
