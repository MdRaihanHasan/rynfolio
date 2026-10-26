import type { Metadata } from "next";
import LyraNav from "@/components/lyra/LyraNav";
import { LYRA } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — Privacy Policy",
  description:
    "How Lyra Prime handles your data: API key storage, conversations sent to your own server, voice/speech, biometric lock, and the fact that the developer runs no backend and collects nothing.",
  alternates: { canonical: "/apps/lyra-prime/privacy" },
  openGraph: {
    title: "Lyra Prime — Privacy Policy",
    description: "How Lyra Prime handles your data. The developer runs no backend and collects nothing.",
    url: "/apps/lyra-prime/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <main className="lp-container">
      <div className="lp-doc">
        <LyraNav />
        <p className="lp-eyebrow">Lyra Prime</p>
        <h1>Privacy Policy</h1>
        <p className="lp-updated">Last updated: 26 October 2026</p>

        <div className="lp-flag">
          <strong>Draft for owner review.</strong> This policy describes behavior verified in the
          app source. Please review and confirm the speech-recognition note below before publishing
          and linking it from Google Play Console.
        </div>

        <p>
          {LYRA.name} (&ldquo;the app&rdquo;) is a client for an AI assistant server that{" "}
          <strong>you</strong> configure and control. The developer does not operate a backend for
          this app and does not receive your conversations.
        </p>

        <h2>What the app handles, and where it goes</h2>
        <ul>
          <li>
            <strong>Your messages &amp; chat content → your own server.</strong> Text you send, the
            selected model name, and a session id are sent over <strong>HTTPS</strong> to the server
            URL you enter in Settings. This goes to infrastructure you control — not to the developer
            or any shared service. Plain <code>http://</code> is refused for non-local servers.
          </li>
          <li>
            <strong>Your API key</strong> is stored in your device&rsquo;s encrypted storage and sent
            only to your configured server as a bearer token. It is excluded from device backups.
          </li>
          <li>
            <strong>Voice input (microphone).</strong> When you use voice, audio is handled by your
            device&rsquo;s speech-recognition service. Depending on your device and its settings, that
            service may process audio on-device or via its provider (for example, Google) under{" "}
            <em>that provider&rsquo;s</em> policy. The app does not send your audio to the developer.
            Recognized text is then sent to your server as above.
          </li>
          <li>
            <strong>Voice output</strong> is produced by your device&rsquo;s text-to-speech engine.
          </li>
          <li>
            <strong>Fonts</strong> are bundled inside the app. No font is downloaded and no font CDN
            is contacted.
          </li>
          <li>
            <strong>Local data on your device:</strong> server URL, preferences, and a list of recent
            conversations (ids, titles, timestamps). The optional App Lock uses your device
            biometric/PIN via the operating system — no biometric data leaves the device.
          </li>
          <li>
            <strong>External links:</strong> tapping the developer link opens{" "}
            <a href={LYRA.website}>{LYRA.website.replace("https://", "")}</a>.
          </li>
        </ul>

        <h2>What the app does not do</h2>
        <ul>
          <li>No analytics, advertising, tracking, or crash-reporting SDKs.</li>
          <li>The developer operates no server for this app and collects none of your content.</li>
        </ul>

        <h2>Data retention &amp; deletion</h2>
        <ul>
          <li>Local data is removed when you uninstall the app. &ldquo;New conversation&rdquo; starts a fresh session.</li>
          <li>
            Conversation data stored on <strong>your</strong> server is governed by your server&rsquo;s
            configuration and is under your control.
          </li>
        </ul>

        <h2>Security practices &amp; your choices</h2>
        <ul>
          <li>All server requests use HTTPS; TLS verification is never disabled.</li>
          <li>Your API key is held in encrypted device storage and excluded from backups.</li>
          <li>You choose the server, the model, and whether to enable voice and the biometric lock.</li>
        </ul>

        <h2>Children</h2>
        <p>This app is not directed to children under 13.</p>

        <h2>Changes</h2>
        <p>This policy may be updated; the &ldquo;Last updated&rdquo; date will change accordingly.</p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Contact {LYRA.developer} at{" "}
          <a href={`mailto:${LYRA.supportEmail}`}>{LYRA.supportEmail}</a>.
        </p>
      </div>
    </main>
  );
}
