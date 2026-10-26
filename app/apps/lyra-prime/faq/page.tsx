import type { Metadata } from "next";
import Link from "next/link";
import LyraNav from "@/components/lyra/LyraNav";
import { LYRA, lyraFaqs } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — FAQ",
  description:
    "Frequently asked questions about Lyra Prime: what it is, bringing your own AI server, connecting a Hermes Agent, voice, where conversations are stored, protecting your API key, and Google Play availability.",
  alternates: { canonical: "/apps/lyra-prime/faq" },
  openGraph: {
    title: "Lyra Prime — FAQ",
    description: "Frequently asked questions about Lyra Prime.",
    url: "/apps/lyra-prime/faq",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: lyraFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main className="lp-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="lp-doc">
        <LyraNav />
        <p className="lp-eyebrow">Lyra Prime</p>
        <h1>Frequently asked questions</h1>

        <div className="lp-faq-list">
          {lyraFaqs.map((f) => (
            <div className="lp-faq-item" key={f.q}>
              <h2>{f.q}</h2>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <p className="lp-caption" style={{ marginTop: 28 }}>
          Still stuck? See <Link href={`${LYRA.base}/support`}>Support</Link> or email{" "}
          <a href={`mailto:${LYRA.supportEmail}`}>{LYRA.supportEmail}</a>.
        </p>
      </div>
    </main>
  );
}
