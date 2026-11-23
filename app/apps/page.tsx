import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import { apps } from "@/lib/data/apps";
import "./apps.css";

export const metadata: Metadata = {
  title: "Apps - Md Raihan Hasan | Android, Desktop & Web Apps",
  description:
    "Apps and open-source tools built by Md Raihan Hasan — Lyra Prime (private AI assistant for Android), DevBox, Unified Email, LyraPanel and more across Windows, desktop and the web.",
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Apps - Md Raihan Hasan",
    description:
      "Apps and open-source tools built by Md Raihan Hasan — Android, desktop and web.",
    url: "/apps",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Apps by Md Raihan Hasan",
  url: "https://ryn.bd/apps",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: apps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: app.name,
      url: `https://ryn.bd${app.href}`,
    })),
  },
};

export default function AppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner title="Apps" crumb="Apps" />

      <section className="projects-area pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center apps-intro wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">What I build</span>
                <h2>
                  My <span>Apps</span>
                </h2>
                <p className="lead-text">
                  Apps and tools I design and ship — from Android and desktop software to
                  open-source web tools and developer libraries. More are on the way.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center apps-grid">
            {apps.length === 0 ? (
              <div className="col-12 apps-empty">
                <p>No apps published yet — check back soon.</p>
              </div>
            ) : (
              apps.map((app, i) => (
                <div className="col-lg-6" key={app.slug}>
                  <article
                    className={`app-card wow fadeInUp delay-0-${i % 2 === 0 ? "2" : "4"}s`}
                    style={{ ["--app-accent" as string]: app.accent }}
                  >
                    <div className="app-card__top">
                      {app.icon ? (
                        <img
                          className="app-icon"
                          src={app.icon}
                          alt={`${app.name} app icon`}
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      ) : (
                        <span className="app-icon app-icon--glyph" aria-hidden="true">
                          <i className={app.glyph ?? "fas fa-cube"} />
                        </span>
                      )}
                      <div className="app-card__head">
                        <h3>
                          <Link href={app.href}>{app.name}</Link>
                        </h3>
                        <div className="app-meta">
                          <span className="app-cat">{app.category}</span>
                          <span className="app-platform">
                            <i className={app.platformIcon} aria-hidden="true" />
                            {app.platform}
                          </span>
                        </div>
                      </div>
                      <span className={`app-status app-status--${app.status}`}>
                        {app.statusLabel}
                      </span>
                    </div>

                    <p className="app-desc">{app.description}</p>

                    <ul className="app-tech app-tech--card">
                      {app.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>

                    <div className="app-card__actions">
                      <Link className="app-btn" href={app.href}>
                        View app <i className="far fa-arrow-right" aria-hidden="true" />
                      </Link>
                      <span className="app-card__links">
                        {app.hasPages ? (
                          <>
                            <Link href={`${app.href}/privacy`}>Privacy</Link>
                            <Link href={`${app.href}/support`}>Support</Link>
                          </>
                        ) : app.github ? (
                          <a href={app.github} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" aria-hidden="true" /> GitHub
                          </a>
                        ) : null}
                      </span>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>
        </div>

        <BgLines />
      </section>
    </>
  );
}
