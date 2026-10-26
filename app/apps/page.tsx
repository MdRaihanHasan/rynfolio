import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import { apps } from "@/lib/data/apps";
import "./apps.css";

export const metadata: Metadata = {
  title: "Apps - Md Raihan Hasan | Android & Web Apps",
  description:
    "Apps built by Md Raihan Hasan, including Lyra Prime — a private AI assistant for Android that connects to your own server. Browse apps with their privacy policies, terms, and support.",
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Apps - Md Raihan Hasan",
    description:
      "Apps built by Md Raihan Hasan, including Lyra Prime — a private AI assistant for Android.",
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
                  Apps I design and ship — each with its own privacy policy, terms, and support.
                  More are on the way.
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
                      <img
                        className="app-icon"
                        src={app.icon}
                        alt={`${app.name} app icon`}
                        width={64}
                        height={64}
                        loading="lazy"
                      />
                      <div className="app-card__head">
                        <h3>
                          <Link href={app.href}>{app.name}</Link>
                        </h3>
                        <div className="app-meta">
                          <span className="app-cat">{app.category}</span>
                          <span className="app-platform">
                            <i className="fab fa-android" aria-hidden="true" />
                            {app.platform}
                          </span>
                        </div>
                      </div>
                      <span className={`app-status app-status--${app.status}`}>
                        {app.statusLabel}
                      </span>
                    </div>

                    <p className="app-desc">{app.description}</p>

                    <div className="app-card__actions">
                      <Link className="app-btn" href={app.href}>
                        View app <i className="far fa-arrow-right" aria-hidden="true" />
                      </Link>
                      <span className="app-card__links">
                        <Link href={`${app.href}/privacy`}>Privacy</Link>
                        <Link href={`${app.href}/support`}>Support</Link>
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
