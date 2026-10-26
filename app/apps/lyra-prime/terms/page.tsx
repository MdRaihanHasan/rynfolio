import type { Metadata } from "next";
import LyraNav from "@/components/lyra/LyraNav";
import { LYRA } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — Terms of Service",
  description:
    "Terms for using the Lyra Prime Android app: acceptable use, your responsibility for your own Hermes server and API credentials, third-party services, availability, and disclaimers.",
  alternates: { canonical: "/apps/lyra-prime/terms" },
  openGraph: {
    title: "Lyra Prime — Terms of Service",
    description: "Terms for using the Lyra Prime Android app.",
    url: "/apps/lyra-prime/terms",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <main className="lp-container">
      <div className="lp-doc">
        <LyraNav />
        <p className="lp-eyebrow">Lyra Prime</p>
        <h1>Terms of Service</h1>
        <p className="lp-updated">Last updated: 26 October 2026</p>

        <div className="lp-flag">
          <strong>Draft — requires owner / legal review.</strong> These terms are an initial
          template describing how the app works. They are not legal advice and should be reviewed
          (and a governing jurisdiction chosen) before publication.
        </div>

        <p>
          By downloading or using {LYRA.name} (&ldquo;the app&rdquo;), you agree to these terms. If
          you do not agree, do not use the app.
        </p>

        <h2>1. What the app is</h2>
        <p>
          {LYRA.name} is a client application that connects to an AI server <strong>you</strong>{" "}
          provide and configure (a self-hosted Hermes Agent or another OpenAI-compatible endpoint).
          The app contains no AI model of its own and the developer operates no backend for it.
        </p>

        <h2>2. Your server and credentials</h2>
        <ul>
          <li>You are solely responsible for the server you connect to, its configuration, security, availability, costs, and the content it produces.</li>
          <li>You are responsible for keeping your API key and server URL confidential. Do not share them.</li>
          <li>You are responsible for complying with the terms of any model provider or service your server uses.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to use the app to break the law, infringe others&rsquo; rights, or attempt to disrupt or misuse any system you are not authorized to access. You are responsible for the prompts you send and how you use the responses.</p>

        <h2>4. Third-party services</h2>
        <p>
          The app relies on your device&rsquo;s speech-recognition and text-to-speech services and on
          the server you configure. Those services are governed by their own terms and policies,
          which are outside the developer&rsquo;s control.
        </p>

        <h2>5. Availability</h2>
        <p>The app is provided on an &ldquo;as available&rdquo; basis. Features depend on your device, your server, and your network; availability is not guaranteed and the app may change or be discontinued.</p>

        <h2>6. Intellectual property</h2>
        <p>
          The app and its branding are the property of their respective owners. {LYRA.name} connects
          to the open-source Hermes Agent by Nous Research, which is subject to its own license.
        </p>

        <h2>7. Disclaimer &amp; limitation of liability</h2>
        <p>
          <strong>The app is provided &ldquo;as is&rdquo;, without warranties of any kind.</strong> AI
          output may be inaccurate; you are responsible for verifying it before relying on it. To the
          maximum extent permitted by applicable law, the developer is not liable for any damages
          arising from your use of the app or the servers you connect to.{" "}
          <em>(Clause subject to legal review.)</em>
        </p>

        <h2>8. Changes</h2>
        <p>These terms may be updated; continued use after an update means you accept the revised terms.</p>

        <h2>9. Contact</h2>
        <p>
          Questions about these terms? Contact {LYRA.developer} at{" "}
          <a href={`mailto:${LYRA.supportEmail}`}>{LYRA.supportEmail}</a>.
        </p>

        <p className="lp-updated">
          Governing law / jurisdiction: <em>to be specified by the owner before publication.</em>
        </p>
      </div>
    </main>
  );
}
