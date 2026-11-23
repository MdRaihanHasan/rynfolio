// Registry of apps listed at /apps. Add a new entry here to publish another
// app to the directory. Apps with `hasPages: true` ship their own bespoke
// detail/legal pages under /apps/<slug> (e.g. Lyra Prime); every other entry is
// rendered by the shared dynamic route at /apps/[slug]. Keep facts verified —
// this feeds public listing and detail pages.

export type AppListing = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon?: string; // public path to an image icon; a glyph is shown when absent
  glyph?: string; // FontAwesome class for the avatar when there is no image
  platform: string; // e.g. "Android 7.0+", "Windows", "Web · PWA"
  platformIcon: string; // FontAwesome class for the platform chip
  category: string; // short label, e.g. "AI assistant"
  status: "available" | "coming-soon";
  statusLabel: string;
  href: string; // detail/landing page
  accent: string; // brand accent for the card
  tech: string[]; // tech stack chips
  github?: string; // source repository
  website?: string; // live/demo URL, when there is one
  hasPages?: boolean; // ships its own detail/legal pages instead of /apps/[slug]
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
    platformIcon: "fab fa-android",
    category: "AI assistant",
    status: "available",
    statusLabel: "Available",
    href: "/apps/lyra-prime",
    accent: "#4a7cff",
    tech: ["Flutter", "Android"],
    github: "https://github.com/sentrize/hermes-mobile",
    hasPages: true,
  },
  {
    slug: "devbox",
    name: "DevBox",
    tagline: "A Laragon-style local web-dev environment for Windows.",
    description:
      "A local web-development environment manager for Windows. DevBox supervises Nginx, MariaDB and PHP-FPM services, switches portable runtimes on the fly, auto-generates .test virtual hosts with local SSL, and spins up Laravel or WordPress projects in a single click.",
    glyph: "fab fa-windows",
    platform: "Windows",
    platformIcon: "fab fa-windows",
    category: "Dev environment",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/devbox",
    accent: "#f74c00",
    tech: ["Rust", "Tauri v2", "React", "TypeScript"],
    github: "https://github.com/MdRaihanHasan/DevBox",
  },
  {
    slug: "unified-email",
    name: "Unified Email",
    tagline: "A self-hosted unified inbox for Gmail, Workspace and Outlook.",
    description:
      "A self-hosted unified inbox for Gmail, Google Workspace and Outlook. It talks to each provider through its native API — Gmail API, Microsoft Graph and IMAP IDLE — with cross-account threading, full-text search and a one-command Docker deploy.",
    glyph: "fas fa-envelope",
    platform: "Self-hosted · Web",
    platformIcon: "fas fa-envelope",
    category: "Email client",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/unified-email",
    accent: "#ea4335",
    tech: ["PHP", "Laravel", "Inertia.js", "Vue 3", "PostgreSQL"],
    github: "https://github.com/MdRaihanHasan/unified-email",
  },
  {
    slug: "lyra-panel",
    name: "LyraPanel",
    tagline: "A batteries-included admin panel package for Laravel 12.",
    description:
      "A Laravel 12 admin-panel package. It ships role-based access control, dynamic Eloquent CRUD, an audit trail, user impersonation, invitations and an interactive installer — drop it into any Laravel 12 application.",
    glyph: "fab fa-laravel",
    platform: "Laravel package",
    platformIcon: "fab fa-laravel",
    category: "Laravel package",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/lyra-panel",
    accent: "#ff2d20",
    tech: ["PHP", "Laravel 12"],
    github: "https://github.com/WPCodeLab/lyra-panel",
  },
  {
    slug: "traffic-monitor-py",
    name: "TrafficMonitor-Py",
    tagline: "A desktop system and network traffic monitor.",
    description:
      "A Python desktop application for monitoring system resources and network traffic in real time, built on a native PyQt6 interface.",
    glyph: "fab fa-python",
    platform: "Desktop",
    platformIcon: "fab fa-python",
    category: "Desktop utility",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/traffic-monitor-py",
    accent: "#3776ab",
    tech: ["Python", "PyQt6"],
    github: "https://github.com/WPCodeLab/traffic-monitor",
  },
  {
    slug: "scrcpy-desktop",
    name: "scrcpy-desktop",
    tagline: "A clean desktop UI for scrcpy Android mirroring.",
    description:
      "A desktop front-end for scrcpy that makes Android screen mirroring one click. It shows a live device list, supports Wi-Fi debugging, and records sessions — no command line required.",
    glyph: "fab fa-android",
    platform: "Desktop · Electron",
    platformIcon: "fas fa-desktop",
    category: "Desktop utility",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/scrcpy-desktop",
    accent: "#2ea0d6",
    tech: ["Electron", "JavaScript"],
    github: "https://github.com/sentrize/scrcpy-desktop",
  },
  {
    slug: "football-world-cup-live",
    name: "Football World Cup Live",
    tagline: "A 24/7 broadcast-style World Cup live-TV web app.",
    description:
      "A fully automated, broadcast-style World Cup live-TV experience that runs 24/7 — a cinematic 3D stadium, live match stats and around 15 rotating scenes, driven by either a simulated or a real data feed.",
    glyph: "fas fa-futbol",
    platform: "Web",
    platformIcon: "fas fa-futbol",
    category: "Live TV · 3D",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/football-world-cup-live",
    accent: "#00b14f",
    tech: ["Next.js", "React Three Fiber", "TypeScript", "GSAP"],
    github: "https://github.com/sentrize/soccer-live",
  },
  {
    slug: "global-weather-live",
    name: "Global Weather Live",
    tagline: "A cinematic 24/7 weather livestream dashboard.",
    description:
      "A cinematic, always-on weather livestream dashboard — a rotating 3D Earth, live conditions for 20 nations, alerts, radar and auto-cycling broadcast scenes.",
    glyph: "fas fa-cloud-sun",
    platform: "Web",
    platformIcon: "fas fa-cloud-sun",
    category: "Live dashboard · 3D",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/global-weather-live",
    accent: "#22a7f0",
    tech: ["Next.js", "Three.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/MdRaihanHasan/sentrize-weather",
  },
  {
    slug: "sticky-notes",
    name: "Sticky Notes",
    tagline: "A minimal sticky-notes PWA that works offline.",
    description:
      "A minimal sticky-notes PWA that runs entirely in the browser. Drag, resize, format and search notes, with auto-save and full offline support via a service worker.",
    glyph: "fas fa-sticky-note",
    platform: "Web · PWA",
    platformIcon: "fas fa-sticky-note",
    category: "PWA",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/sticky-notes",
    accent: "#f5c518",
    tech: ["Vanilla JS", "PWA"],
    github: "https://github.com/WPCodeLab/StickyNotes",
  },
  {
    slug: "testlify",
    name: "Testlify",
    tagline: "An offline QA checklist for pre-release website testing.",
    description:
      "A zero-dependency, offline QA checklist tool for manually verifying websites before release — a fast, local pre-flight checklist with nothing to install.",
    glyph: "fas fa-clipboard-check",
    platform: "Web",
    platformIcon: "fas fa-clipboard-check",
    category: "QA tool",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/testlify",
    accent: "#6c5ce7",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/WPCodeLab/Testlify",
  },
  {
    slug: "eml-reader",
    name: "EML Reader",
    tagline: "A fully client-side .eml email viewer.",
    description:
      "A fully client-side .eml file viewer — open and read email files with no frameworks, no server and no uploads. Everything stays in your browser.",
    glyph: "fas fa-envelope-open-text",
    platform: "Web",
    platformIcon: "fas fa-envelope-open-text",
    category: "Utility",
    status: "available",
    statusLabel: "Open source",
    href: "/apps/eml-reader",
    accent: "#00b894",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/WPCodeLab/eml-reader",
  },
];

export const getApp = (slug: string): AppListing | undefined =>
  apps.find((app) => app.slug === slug);
