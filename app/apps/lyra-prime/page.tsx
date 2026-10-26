import type { Metadata } from "next";
import Link from "next/link";
import { LYRA, lyraFeatures, lyraNav } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — Private AI assistant for Android",
  description: LYRA.summary,
  alternates: { canonical: "/apps/lyra-prime" },
  openGraph: {
    title: "Lyra Prime — Private AI assistant for Android",
    description: LYRA.summary,
    url: "/apps/lyra-prime",
    type: "website",
    images: ["/assets/lyra-prime/preview.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: LYRA.name,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Android 7.0+",
  softwareVersion: LYRA.version,
  description: LYRA.summary,
  url: `${LYRA.website}/apps/lyra-prime`,
  image: `${LYRA.website}/assets/lyra-prime/preview.png`,
  downloadUrl: LYRA.apkUrl,
  author: { "@type": "Person", name: LYRA.developer, url: LYRA.website },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function LyraLandingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-container lp-hero-grid">
          <div>
            <p className="lp-crumb">
              <Link href="/apps">Apps</Link> <span aria-hidden="true">/</span> {LYRA.name}
            </p>
            <div className="lp-brand">
              <img src="/assets/lyra-prime/icon.png" alt="Lyra Prime app icon" width={54} height={54} />
              <span>{LYRA.name}</span>
            </div>
            <h1>Your private AI assistant — on a server you control.</h1>
            <p className="lead">{LYRA.summary}</p>
            <div className="lp-cta-row">
              <a className="lp-btn lp-btn-primary" href={LYRA.apkUrl} rel="noopener">
                <i className="fas fa-download" aria-hidden="true" />
                <span>
                  Download for Android
                  <span className="lp-sub">Direct APK · v{LYRA.version}</span>
                </span>
              </a>
              {LYRA.playUrl ? (
                <a className="lp-btn lp-btn-ghost" href={LYRA.playUrl} rel="noopener">
                  <i className="fab fa-google-play" aria-hidden="true" /> Google Play
                </a>
              ) : (
                <span className="lp-btn lp-btn-ghost" aria-disabled="true">
                  <i className="fab fa-google-play" aria-hidden="true" />
                  <span>
                    Google Play
                    <span className="lp-sub">Coming soon</span>
                  </span>
                </span>
              )}
            </div>
            <p className="lp-note">
              Requires Android {LYRA.minAndroid}+ and your own Hermes Agent / OpenAI-compatible
              server and API key. <Link href={`${LYRA.base}/faq`}>How does it work?</Link>
            </p>
          </div>

          <div className="lp-phone" aria-hidden="true">
            <div className="lp-phone-screen">
              <img src="/assets/lyra-prime/icon.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-head">
            <p className="lp-eyebrow">What it does</p>
            <h2>Everything in a polished, private package</h2>
          </div>
          <div className="lp-grid">
            {lyraFeatures.map((f) => (
              <article className="lp-card" key={f.title}>
                <div className="ico">
                  <i className={f.icon} aria-hidden="true" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="lp-section" style={{ paddingTop: 0 }}>
        <div className="lp-container">
          <div className="lp-section-head">
            <p className="lp-eyebrow">A look inside</p>
            <h2>Designed for focused, private conversations</h2>
          </div>
          <div className="lp-preview">
            <img
              src="/assets/lyra-prime/preview.png"
              alt="Design preview of the Lyra Prime app screens"
              loading="lazy"
            />
          </div>
          <p className="lp-caption">
            Design preview of the app&rsquo;s core screens — representative mockups, not live
            device screenshots.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="lp-section" style={{ paddingTop: 0 }}>
        <div className="lp-container">
          <div className="lp-cta-band">
            <h2>Get Lyra Prime</h2>
            <p>
              Install the Android app and connect it to your own server. Your conversations, your
              API key, and your AI all stay on infrastructure you control.
            </p>
            <div className="lp-cta-row" style={{ justifyContent: "center" }}>
              <a className="lp-btn lp-btn-primary" href={LYRA.apkUrl} rel="noopener">
                <i className="fas fa-download" aria-hidden="true" /> Download APK
              </a>
              <a className="lp-btn lp-btn-ghost" href={LYRA.releasesUrl} rel="noopener" target="_blank">
                All releases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer links + attribution */}
      <section style={{ paddingBottom: 72 }}>
        <div className="lp-container">
          <nav className="lp-subnav" aria-label="Lyra Prime pages">
            {lyraNav
              .filter((n) => n.href !== LYRA.base)
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
          </nav>
          <p className="lp-caption">
            Built by {LYRA.developer} · <a href={LYRA.website}>ryn.bd</a>. Lyra Prime connects to the
            open-source Hermes Agent by Nous Research.
          </p>
        </div>
      </section>
    </main>
  );
}
