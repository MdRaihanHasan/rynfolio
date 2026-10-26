// Registry of apps listed at /apps. Add a new entry here to publish another
// app to the directory; each app's own detail/legal pages live under
// /apps/<slug>. Keep facts verified — this feeds public listing pages.

export type AppListing = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // public path to the app icon
  platform: string; // e.g. "Android 7.0+"
  category: string; // short label, e.g. "AI assistant"
  status: "available" | "coming-soon";
  statusLabel: string;
  href: string; // detail/landing page
  accent: string; // brand accent for the card
};

export const apps: AppListing[] = [
  {
    slug: "lyra-prime",
    name: "Lyra Prime",
    tagline: "Your private AI assistant — on a server you control.",
    description:
      "An Android app that connects to your own cloud-hosted Hermes Agent (or any OpenAI-compatible server). Chat and talk to an AI running on infrastructure you configure — your data goes only to the server you choose.",
    icon: "/assets/lyra-prime/icon.png",
    platform: "Android 7.0+",
    category: "AI assistant",
    status: "available",
    statusLabel: "Available",
    href: "/apps/lyra-prime",
    accent: "#4a7cff",
  },
];
