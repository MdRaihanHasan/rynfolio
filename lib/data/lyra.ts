// Single source of truth for the Lyra Prime product section.
// Facts here are verified against the app source (sentrize/lyra-prime-app-code)
// and ryn.bd. Do not add unverified claims.

export const LYRA = {
  name: "Lyra Prime",
  tagline: "Your private AI assistant — on a server you control.",
  summary:
    "Lyra Prime is an Android app that connects to your own cloud-hosted Hermes Agent (or any OpenAI-compatible server). Chat and talk to an AI running on infrastructure you configure — your data goes only to the server you choose.",
  version: "1.0.0",
  minAndroid: "7.0", // minSdk 24
  // Verified public, direct download (HTTP 200). Not a Google Play link.
  apkUrl: "https://github.com/sentrize/hermes-mobile/releases/latest/download/LyraPrime.apk",
  releasesUrl: "https://github.com/sentrize/hermes-mobile/releases",
  // Google Play URL intentionally absent — the app is not published yet.
  playUrl: null as string | null,
  supportEmail: "contact@ryn.bd", // verified in the ryn.bd footer
  developer: "Md Raihan Hasan",
  website: "https://ryn.bd",
  base: "/apps/lyra-prime",
};

export const lyraNav = [
  { label: "Overview", href: "/apps/lyra-prime" },
  { label: "Privacy", href: "/apps/lyra-prime/privacy" },
  { label: "Terms", href: "/apps/lyra-prime/terms" },
  { label: "Support", href: "/apps/lyra-prime/support" },
  { label: "FAQ", href: "/apps/lyra-prime/faq" },
  { label: "Changelog", href: "/apps/lyra-prime/changelog" },
];

export const lyraFeatures: { icon: string; title: string; desc: string }[] = [
  {
    icon: "fas fa-cloud",
    title: "Connect your own Hermes Agent",
    desc: "Point the app at your self-hosted Hermes Agent or any OpenAI-compatible endpoint. Nothing is hard-coded.",
  },
  {
    icon: "fas fa-comment-dots",
    title: "Streaming AI chat",
    desc: "Fast, token-by-token replies with the agent's tool activity shown inline as it works.",
  },
  {
    icon: "fas fa-microphone",
    title: "Voice input & spoken replies",
    desc: "Talk instead of type, and hear answers read back using your device's speech engine.",
  },
  {
    icon: "fas fa-history",
    title: "Conversation history & management",
    desc: "Recent chats are one tap away. Search, rename, and remove them on your device.",
  },
  {
    icon: "fas fa-adjust",
    title: "Light, dark & system themes",
    desc: "Pick the look you like, or follow your phone's system theme automatically.",
  },
  {
    icon: "fas fa-fingerprint",
    title: "Biometric app lock",
    desc: "Optionally require your fingerprint or face to open the app and protect your API key.",
  },
  {
    icon: "fas fa-server",
    title: "Configurable server connection",
    desc: "Set your server URL and API key, test the connection, and switch anytime. HTTPS is required for remote servers.",
  },
];

export const lyraFaqs: { q: string; a: string }[] = [
  {
    q: "What is Lyra Prime?",
    a: "Lyra Prime is a private AI assistant app for Android. It is a client that connects to your own cloud-hosted Hermes Agent (or any OpenAI-compatible server) so you can chat and talk to an AI running on infrastructure you control.",
  },
  {
    q: "Does it include its own AI server?",
    a: "No. Lyra Prime has no built-in AI model and no developer-run backend. You bring your own server and API key — your conversations go only to the server you configure.",
  },
  {
    q: "How do users connect a Hermes Agent?",
    a: "On first launch, open setup and enter your server URL (for example https://ai.yourdomain.com) and your API key, then tap Test Connection. The app verifies the server and discovers your model automatically.",
  },
  {
    q: "Does the app require a server?",
    a: "Yes. Without a reachable, configured server and a valid API key, the app cannot chat. It is a client only.",
  },
  {
    q: "How does voice interaction work?",
    a: "Voice uses your device's built-in speech recognition for input and its text-to-speech engine for spoken replies; the recognized text is then sent to your configured server. Lyra Prime does not provide wake-word activation, full-duplex conversation, or an offline AI model.",
  },
  {
    q: "Where are conversations stored?",
    a: "Your conversation history lives on your own server. The app also keeps a local list of recent chats (titles and timestamps) on your device. The developer operates no server and stores none of your conversations.",
  },
  {
    q: "How can users protect their API key?",
    a: "Your API key is stored in your device's encrypted storage and is excluded from device backups; it is sent only to your configured server over HTTPS. You can also enable the optional biometric App Lock. Never share your API key with anyone.",
  },
  {
    q: "Is the app available on Google Play?",
    a: "Not yet — Google Play publication is in preparation. A direct Android APK is available to download now from the official releases page.",
  },
];

// Verified against pubspec `version: 1.0.0+3000`. No public release date is
// claimed because the app has not been published to Google Play.
export const lyraChangelog: { version: string; status: string; notes: string[] }[] = [
  {
    version: "1.0.0",
    status: "Initial release — direct APK available; Google Play submission in preparation",
    notes: [
      "Connect to your own cloud-hosted Hermes Agent / OpenAI-compatible server.",
      "Streaming AI chat with inline tool activity.",
      "Real-time voice: speak to the assistant and hear replies; tap to interrupt.",
      "Voice dictation in the chat screen.",
      "Conversation history with local search, rename, and remove.",
      "Light, dark, and system themes.",
      "Optional biometric app lock (fingerprint / face).",
      "HTTPS enforced for remote servers; API key stored in encrypted device storage.",
    ],
  },
];
