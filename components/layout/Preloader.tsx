"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setHidden(true), 500);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return <div className={`preloader${loaded ? " loaded" : ""}`}></div>;
}
