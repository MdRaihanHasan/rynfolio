export type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Skillo.dev",
    tagline: "Learn In-Demand Tech Skills Online",
    description:
      "Skillo.dev is a modern online learning platform helping students and professionals gain real-world skills in web development, DevOps, cloud computing, AI, programming, and technology through hands-on courses, expert mentorship, and industry-focused training.",
    image: "/assets/images/projects/skillo-dev.png",
  },
  {
    name: "GTA.BD",
    tagline: "WhatsApp Business API & Marketing Platform",
    description:
      "GTA.BD is a powerful WhatsApp Business platform that enables organizations to manage campaigns, automate customer conversations, send bulk messages, create templates, track analytics, and improve customer engagement from a single dashboard.",
    image: "/assets/images/projects/gta-bd.png",
  },
  {
    name: "Attendant.dev",
    tagline: "AI-Powered Customer Communication Platform",
    description:
      "Attendant.dev is an AI-powered customer communication platform that centralizes email, WhatsApp, SMS, Telegram, and live chat. Businesses can automate responses, train AI assistants, manage contacts, and streamline support operations efficiently.",
    image: "/assets/images/projects/attendant-dev.png",
  },
  {
    name: "LaravelSMTP.com",
    tagline: "One-Line Email Setup for Laravel Applications",
    description:
      "LaravelSMTP helps Laravel developers configure email delivery instantly using a single API key. Connect SES, Mailgun, Postmark, SendGrid, Gmail, or SMTP providers, track email performance, monitor logs, and improve deliverability with minimal setup.",
    image: "/assets/images/projects/laravelsmtp-com.png",
  },
];

/** GitHub repositories shown on the projects listing page (from wpcodelap.json). */
export type RepoProject = {
  title: string;
  description: string | null;
  repo_url: string;
  readme_link: string;
};
