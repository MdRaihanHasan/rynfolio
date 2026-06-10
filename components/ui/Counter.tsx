"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  title: string;
  suffix?: "plus" | "percent";
  speed?: number;
};

export default function Counter({ end, title, suffix = "plus", speed = 3000 }: CounterProps) {
  const [value, setValue] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || counted.current) return;
      counted.current = true;

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / speed, 1);
        setValue(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, speed]);

  return (
    <div className="counter-item counter-text-wrap" ref={wrapRef}>
      <span className={`count-text ${suffix}`}>{value}</span>
      <span className="counter-title">{title}</span>
    </div>
  );
}
