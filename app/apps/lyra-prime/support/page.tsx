import type { Metadata } from "next";
import Link from "next/link";
import LyraNav from "@/components/lyra/LyraNav";
import { LYRA } from "@/lib/data/lyra";

export const metadata: Metadata = {
  title: "Lyra Prime — Support",
  description:
    "Help for Lyra Prime: fix server connection errors, HTTPS and server-URL guidance, API-key setup, voice and microphone troubleshooting, conversation history, and how to contact support.",
  alternates: { canonical: "/apps/lyra-prime/support" },
  openGraph: {
    title: "Lyra Prime — Support",
    description: "Troubleshooting and contact for Lyra Prime.",
    url: "/apps/lyra-prime/support",
    type: "article",
  },
};

export default function SupportPage() {
  return (
    <main className="lp-container">
      <div className="lp-doc">
        <LyraNav />
        <p className="lp-eyebrow">Lyra Prime</p>
        <h1>Support</h1>

        <div className="lp-callout">
          <strong>Never share secrets.</strong> When contacting support, do <strong>not</strong>{" "}
          include your API key, passwords, or your full private server URL. Support will never ask
          for them.
        </div>

        <h2>Server connection errors</h2>
        <ul>
          <li>Open <strong>Settings → Server Configuration</strong> and re-check the URL and API key.</li>
          <li>Enter just your domain (e.g. <code>https://ai.yourdomain.com</code>) — the app adds the API paths itself.</li>
          <li>Tap <strong>Test Connection</strong>. &ldquo;Key rejected&rdquo; means the API key is wrong; a URL/timeout error means the server isn&rsquo;t reachable.</li>
          <li>Confirm your server is running and reachable from your phone&rsquo;s network.</li>
        </ul>

        <h2>HTTPS &amp; server URL</h2>
        <ul>
          <li>Remote servers must use <strong>https://</strong>. Plain <code>http://</code> is refused for non-local addresses to protect your API key.</li>
          <li>Make sure your server&rsquo;s TLS certificate is valid (not expired or self-signed in a way your device doesn&rsquo;t trust).</li>
          <li>Local testing with <code>localhost</code> or a LAN address (e.g. <code>192.168.x.x</code>) is allowed over http.</li>
        </ul>

        <h2>API key configuration</h2>
        <ul>
          <li>Use the key your server expects (for Hermes Agent, the <code>API_SERVER_KEY</code>).</li>
          <li>The key is stored in your device&rsquo;s encrypted storage and sent only to your server.</li>
          <li>If it leaks, rotate it on your server and re-enter the new key in the app.</li>
        </ul>

        <h2>Voice &amp; microphone</h2>
        <ul>
          <li>Grant the microphone permission when prompted (Android <strong>Settings → Apps → Lyra Prime → Permissions</strong>).</li>
          <li>Make sure a speech-recognition service and a text-to-speech engine are installed and enabled on your device.</li>
          <li>Pick your language under <strong>Voice Settings</strong>; some languages require the matching speech data to be installed on the device.</li>
          <li>If recognition stalls, leave the voice screen and return, or restart the app.</li>
        </ul>

        <h2>Conversation history</h2>
        <ul>
          <li>Recent chats appear on the Home screen. Use the search box to filter them.</li>
          <li>Rename or remove a local recent from its menu — this only affects the list on your device, not your server.</li>
          <li>Full history lives on your server; the app shows what your server returns.</li>
        </ul>

        <h2>Contact support</h2>
        <p>
          Email <a href={`mailto:${LYRA.supportEmail}`}>{LYRA.supportEmail}</a>, or use the{" "}
          <Link href="/contact">contact form on ryn.bd</Link>. Please describe your device, Android
          version, and what you were doing — <strong>without</strong> including any secret values.
        </p>
      </div>
    </main>
  );
}
