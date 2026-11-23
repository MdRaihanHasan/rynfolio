import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import BgLines from "@/components/ui/BgLines";
import { apps, getApp } from "@/lib/data/apps";
import "../apps.css";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// Apps that ship their own bespoke pages (e.g. Lyra Prime) are served by their
// own route, so they are excluded from this shared one.
export function generateStaticParams() {
  return apps.filter((app) => !app.hasPages).map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  const title = `${app.name} — ${app.tagline}`;
  return {
    title: `${app.name} | Apps by Md Raihan Hasan`,
    description: app.description,
    alternates: { canonical: app.href },
    openGraph: {
      title,
      description: app.description,
      url: app.href,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description: app.description,
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app || app.hasPages) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: app.platform,
    description: app.description,
    url: `https://ryn.bd${app.href}`,
    author: { "@type": "Person", name: "Md Raihan Hasan", url: "https://ryn.bd" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(app.github ? { codeRepository: app.github } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner title={app.name} crumb={app.name} />

      <section className="projects-area pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <article
                className="app-detail wow fadeInUp delay-0-2s"
                style={{ ["--app-accent" as string]: app.accent }}
              >
                <p className="app-detail__crumb">
                  <Link href="/apps">Apps</Link>
                  <span aria-hidden="true">/</span>
                  {app.name}
                </p>

                <header className="app-detail__head">
                  {app.icon ? (
                    <img
                      className="app-icon app-icon--lg"
                      src={app.icon}
                      alt={`${app.name} app icon`}
                      width={84}
                      height={84}
                    />
                  ) : (
                    <span className="app-icon app-icon--lg app-icon--glyph" aria-hidden="true">
                      <i className={app.glyph ?? "fas fa-cube"} />
                    </span>
                  )}
                  <div className="app-detail__headmeta">
                    <h1>{app.name}</h1>
                    <p className="app-detail__tagline">{app.tagline}</p>
                    <div className="app-meta">
                      <span className="app-cat">{app.category}</span>
                      <span className="app-platform">
                        <i className={app.platformIcon} aria-hidden="true" />
                        {app.platform}
                      </span>
                      <span className={`app-status app-status--${app.status}`}>
                        {app.statusLabel}
                      </span>
                    </div>
                  </div>
                </header>

                <p className="app-detail__desc">{app.description}</p>

                <div className="app-detail__block">
                  <h2 className="app-detail__label">Built with</h2>
                  <ul className="app-tech">
                    {app.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="app-detail__actions">
                  {app.github ? (
                    <a
                      className="app-btn"
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" aria-hidden="true" /> View on GitHub
                    </a>
                  ) : null}
                  {app.website ? (
                    <a
                      className="app-btn app-btn--ghost"
                      href={app.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden="true" /> Live demo
                    </a>
                  ) : null}
                  <Link className="app-detail__back" href="/apps">
                    <i className="far fa-arrow-left" aria-hidden="true" /> All apps
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>

        <BgLines />
      </section>
    </>
  );
}
