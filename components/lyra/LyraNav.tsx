"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lyraNav } from "@/lib/data/lyra";

export default function LyraNav() {
  const path = usePathname();
  return (
    <nav className="lp-subnav" aria-label="Lyra Prime pages">
      <Link href="/apps" className="lp-subnav-back">
        ← All apps
      </Link>
      {lyraNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={path === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
