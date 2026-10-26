import type { Metadata } from "next";
import Link from "next/link";
import LyraNav from "@/components/lyra/LyraNav";
import { LYRA, lyraChangelog } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — Changelog",
  description:
    "Version history for the Lyra Prime Android app, including the initial 1.0.0 release and its features.",
  alternates: { canonical: "/apps/lyra-prime/changelog" },
  openGraph: {
    title: "Lyra Prime — Changelog",
    description: "Version history for the Lyra Prime Android app.",
    url: "/apps/lyra-prime/changelog",
    type: "article",
  },
};

export default function ChangelogPage() {
  return (
    <main className="lp-container">
      <div className="lp-doc">
        <LyraNav />
        <p className="lp-eyebrow">Lyra Prime</p>
        <h1>Changelog</h1>
        <p className="lp-caption">
          Release notes for {LYRA.name}. Download the latest build from the{" "}
          <a href={LYRA.releasesUrl} rel="noopener" target="_blank">
            official releases page
          </a>
          .
        </p>

        <div className="lp-releases">
          {lyraChangelog.map((rel) => (
            <section className="lp-release" key={rel.version}>
              <div className="lp-release-head">
                <h2>Version {rel.version}</h2>
                <span className="lp-badge">Current</span>
              </div>
              <p className="lp-release-status">{rel.status}</p>
              <ul>
                {rel.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="lp-caption" style={{ marginTop: 28 }}>
          See all builds on the{" "}
          <a href={LYRA.releasesUrl} rel="noopener" target="_blank">
            releases page
          </a>{" "}
          or return to the <Link href={LYRA.base}>overview</Link>.
        </p>
      </div>
    </main>
  );
}
