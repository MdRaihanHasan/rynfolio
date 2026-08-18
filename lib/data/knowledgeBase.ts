// Structured portfolio knowledge base for "Raihan's Assistant".
//
// Each section carries `keywords` used to pick only the RELEVANT sections for a
// given question — so we never send the whole site as one giant prompt.
//
// To update the assistant's knowledge, edit the `content` strings below. No chat
// UI or API changes are required. Keep every statement factual — the assistant is
// instructed to answer ONLY from this knowledge and never to invent details.

export type KnowledgeSection = {
  id: string;
  title: string;
  /** Lowercase substrings matched against the visitor's question. */
  keywords: string[];
  content: string;
  /** Always included in the prompt regardless of the question. */
  always?: boolean;
};

export const SECTIONS: KnowledgeSection[] = [
  {
    id: "about",
    title: "About Raihan",
    always: true,
    keywords: ["who", "you", "your", "about", "raihan", "name", "yourself", "assistant", "introduce", "bio"],
    content:
      "Full name: Md Raihan Hasan (also known as Raihan H.). He is a Full-Stack Web Developer and Server / DevOps Specialist with 10+ years of experience, building web applications since 2016. He is also Co-Founder of Sentrize.com. He is based in Bangladesh and works remotely with clients worldwide.",
  },
  {
    id: "experience",
    title: "Professional experience",
    keywords: ["experience", "years", "senior", "background", "history", "career", "expertise", "professional", "worked", "long"],
    content:
      "10+ years of professional experience (since 2016). Roles: Co-Founder & Full-Stack Developer at Sentrize.com (2022–present); Web Developer & Full-Stack Engineer (2016–2022); WordPress Developer (2018–2020); Junior Web Developer (2014–2016). Track record: 350+ projects completed with ~99% client satisfaction.",
  },
  {
    id: "skills",
    title: "Skills & technologies",
    keywords: ["skill", "skills", "technology", "technologies", "tech", "stack", "language", "languages", "framework", "frameworks", "tools", "use", "uses", "work with"],
    content:
      "Core technologies: PHP, Laravel, JavaScript, TypeScript, React, Next.js, Node.js and WordPress. Databases: MySQL, PostgreSQL, Redis. Cloud & DevOps: AWS, Google Cloud, Microsoft Azure, Docker, Kubernetes, CI/CD. Focus areas: backend architecture, REST & GraphQL APIs, database optimization and performance tuning.",
  },
  {
    id: "laravel",
    title: "Laravel & PHP experience",
    keywords: ["laravel", "php", "backend", "eloquent", "artisan", "api"],
    content:
      "Laravel and PHP are among Raihan's core strengths. He builds Laravel backends, REST & GraphQL APIs, authentication/authorization, and email infrastructure — for example LaravelSMTP.com, a one-line email setup service for Laravel applications.",
  },
  {
    id: "frontend",
    title: "Frontend experience",
    keywords: ["frontend", "front-end", "react", "next", "nextjs", "ui", "interface", "javascript", "typescript", "web vitals", "responsive"],
    content:
      "On the frontend Raihan builds with React, Next.js, TypeScript and JavaScript, focusing on performance, Web Vitals and clean, responsive interfaces.",
  },
  {
    id: "saas",
    title: "SaaS experience",
    keywords: ["saas", "multi-tenant", "multitenant", "subscription", "platform", "product", "build a", "can he build", "can you build", "application", "app"],
    content:
      "Raihan has built SaaS-style platforms end to end, including Skillo.dev (online learning), Attendant.dev (AI customer communication), GTA.BD (WhatsApp Business API & marketing) and LaravelSMTP.com (email infrastructure). This spans Laravel backends, Next.js/React frontends, authentication, APIs, cloud infrastructure and deployment.",
  },
  {
    id: "devops",
    title: "DevOps & cloud experience",
    keywords: ["devops", "cloud", "aws", "gcp", "google cloud", "azure", "docker", "kubernetes", "deploy", "deployment", "infrastructure", "server", "ci/cd", "pipeline", "scale", "scalable"],
    content:
      "As a Server / DevOps specialist, Raihan deploys and manages scalable infrastructure on AWS and Google Cloud using Docker, Kubernetes and CI/CD pipelines, and handles database optimization, caching and performance tuning.",
  },
  {
    id: "databases",
    title: "Databases",
    keywords: ["database", "databases", "mysql", "postgres", "postgresql", "redis", "sql", "cache", "caching", "query"],
    content:
      "Raihan designs scalable database systems with MySQL and PostgreSQL, and uses Redis for caching and high-performance tuning.",
  },
  {
    id: "services",
    title: "Services offered",
    keywords: ["service", "services", "offer", "offers", "provide", "help", "hire", "consulting", "consult", "what can", "do you do"],
    content:
      "Services: (1) Full-Stack Web Development with Laravel, React and Next.js; (2) Backend API Development (REST & GraphQL); (3) Database Architecture (MySQL/PostgreSQL/Redis); (4) Cloud Infrastructure & DevOps (AWS, GCP, Docker, Kubernetes, CI/CD); (5) Performance Optimization; (6) System Architecture & Consulting.",
  },
  {
    id: "projects",
    title: "Projects",
    keywords: ["project", "projects", "portfolio", "built", "build", "example", "examples", "case", "product", "products", "made"],
    content:
      "Featured projects: Skillo.dev — online learning platform; GTA.BD — WhatsApp Business API & marketing platform; Attendant.dev — AI-powered customer communication across email, WhatsApp, SMS, Telegram and live chat; LaravelSMTP.com — one-line email setup for Laravel.",
  },
  {
    id: "certifications",
    title: "Certifications",
    keywords: ["certification", "certifications", "certificate", "certified", "course", "courses", "qualification", "qualified", "credential"],
    content:
      "2024 certifications include: Google Cloud IAM & Networking for AWS Professionals, AWS Cloud Technical Essentials, Microsoft Azure Cloud Services, Meta's Advanced React and Programming with JavaScript, plus Laravel, Next.js, TypeScript, GraphQL and Git/GitHub certificates.",
  },
  {
    id: "availability",
    title: "Availability",
    keywords: ["available", "availability", "hire", "hiring", "capacity", "start", "new project", "engage", "freelance", "take on", "busy"],
    content:
      "Raihan is available for new projects and works about 40+ hours per week. For scheduling, quotes or timelines, the best step is to contact him directly.",
  },
  {
    id: "contact",
    title: "Contact information",
    keywords: ["contact", "email", "reach", "phone", "call", "get in touch", "message", "connect"],
    content:
      "Reach Raihan by email at contact@ryn.bd, or use the Contact page on this website. He replies personally to project inquiries.",
  },
  {
    id: "sentrize",
    title: "Sentrize.com",
    keywords: ["sentrize", "co-founder", "cofounder", "founder", "company", "startup", "business", "own"],
    content:
      "Raihan is Co-Founder of Sentrize.com (since 2022), where he also works as a Full-Stack Developer.",
  },
  {
    id: "faq",
    title: "FAQ",
    keywords: ["location", "where", "based", "remote", "timezone", "price", "pricing", "cost", "rate", "budget", "quote", "timeline", "how much"],
    content:
      "Location: Bangladesh; works with clients worldwide (remote-friendly). Experience: 10+ years since 2016. Pricing, budgets and timelines are discussed directly — please contact Raihan for a quote.",
  },
];

const DEFAULT_IDS = ["experience", "skills", "services"];
const MAX_SECTIONS = 6;

/** Pick only the sections relevant to a question (always includes "About"). */
export function selectSections(question: string): KnowledgeSection[] {
  const q = question.toLowerCase();
  const scored = SECTIONS.map((s) => ({
    s,
    score: s.keywords.reduce((n, k) => (q.includes(k) ? n + 1 : n), 0),
  }));

  const picked: KnowledgeSection[] = [];
  const add = (s?: KnowledgeSection) => {
    if (s && !picked.includes(s)) picked.push(s);
  };

  SECTIONS.filter((s) => s.always).forEach(add);
  scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .forEach((x) => add(x.s));

  if (picked.length < 3) {
    DEFAULT_IDS.forEach((id) => add(SECTIONS.find((s) => s.id === id)));
  }

  return picked.slice(0, MAX_SECTIONS);
}

/** Render selected sections into the plain-text block sent to the model. */
export function renderKnowledge(sections: KnowledgeSection[]): string {
  return sections.map((s) => `## ${s.title}\n${s.content}`).join("\n\n");
}
