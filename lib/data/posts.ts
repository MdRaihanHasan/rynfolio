export type PostSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Used as the meta description — keep under ~160 characters. */
  excerpt: string;
  category: string;
  tags: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
  date: string; // ISO date
  readTime: string;
  content: PostSection[];
};

export const author = {
  name: "Md Raihan Hasan",
  url: "https://ryn.bd",
  image: "/assets/images/hero/me.png",
  jobTitle: "Full-Stack Web Developer & Server Specialist",
};

export const posts: Post[] = [
  {
    slug: "claude-first-conversation-setup-5-settings",
    title: "5 Things to Set Up in Claude Before Your First Conversation",
    excerpt:
      "Five settings — Memory, custom instructions, writing style, ChatGPT import, and Projects — that take five minutes and change every Claude conversation after.",
    category: "AI",
    tags: ["Claude", "AI", "Productivity"],
    keywords: [
      "claude setup",
      "claude memory setting",
      "claude custom instructions",
      "claude writing style",
      "import chatgpt memory to claude",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop on a desk, ready to be set up for the first time",
    date: "2026-06-14",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Most people open Claude, type a question, and never touch the settings. That is a mistake. There are five things you can configure in about five minutes that quietly change every answer you get afterwards. I set these up on every new account and every device I sign into — and I do them before the first real conversation, because the rest of the experience compounds on top of them.",
      },
      { type: "h2", text: "1. Turn on Memory" },
      {
        type: "p",
        text: "This is the setting that lets Claude actually know who you are. Open Settings, go to Capabilities, and toggle on Memory. Without it, every chat starts from zero and you re-explain yourself constantly. With it on, Claude carries your name, your work, your preferences, and the useful context from past conversations forward. Turn this on first, because the four settings below all build on it.",
      },
      { type: "h2", text: "2. Write your instructions for Claude" },
      {
        type: "p",
        text: "One short paragraph here changes every reply Claude gives you. Under Settings, General, find Instructions for Claude (sometimes called custom instructions). Tell it who you are, what you do, and how you want it to respond. Mine reads roughly: I am a full-stack developer, I prefer short direct answers, skip the corporate filler, and tell me when I am wrong. Claude then applies those rules in every conversation, so you stop re-stating them each time.",
      },
      { type: "h2", text: "3. Set your writing style" },
      {
        type: "p",
        text: "If Claude sounds too formal, too long, or too robotic, this is usually why. In Settings, General, find Writing Style and either pick a preset or create a custom one. This is separate from your instructions: instructions tell Claude what to do, style tells it how to sound. Set it once and the tone matches yours across every chat going forward.",
      },
      { type: "h2", text: "4. Import your ChatGPT memory" },
      {
        type: "p",
        text: "If you have spent months building up context in ChatGPT, you do not have to start from scratch. In Settings, Capabilities, look for the import option that pulls your saved ChatGPT memories into Claude. It is one of the least-known features, and it means everything the other assistant learned about you can transfer over in a single step. Availability depends on your plan and region, so check whether the option is present on your account before you count on it.",
      },
      { type: "h2", text: "5. Create your first Project" },
      {
        type: "p",
        text: "This is the feature most people scroll straight past, and it is the most powerful one here. Open Projects in the sidebar and choose New Project — name it something like My Business or Job Search. Upload your relevant files, paste in your background, and add project instructions. Every chat you start inside that project now loads that full context automatically, so you never re-explain the basics again. It is also the exact mechanism behind the Council setup I wrote about separately.",
      },
      { type: "h2", text: "Five minutes, every conversation after" },
      {
        type: "p",
        text: "Run through them in order and the whole thing takes about five minutes:",
      },
      {
        type: "ul",
        items: [
          "Memory (Settings, Capabilities) — lets Claude remember you between chats",
          "Instructions for Claude (Settings, General) — one paragraph that shapes every answer",
          "Writing Style (Settings, General) — fixes the tone so Claude sounds the way you want",
          "Import from ChatGPT (Settings, Capabilities) — brings your existing context across",
          "Your first Project (sidebar) — a workspace that loads your full background automatically",
        ],
      },
      {
        type: "quote",
        text: "The difference between people who find Claude mediocre and people who find it indispensable is rarely the prompts. It is usually these five settings.",
      },
      {
        type: "p",
        text: "None of this is hidden or advanced — it is just skipped. Spend the five minutes once, and every conversation after starts with Claude already knowing who you are, how you want to be spoken to, and what you are working on.",
      },
    ],
  },
  {
    slug: "claude-council-five-advisors-setup",
    title: "The Claude Council: Turn One Assistant Into Five Advisors Who Argue First",
    excerpt:
      "Set up a Claude Project that answers every question as five debating advisors, then reconciles them into one clear verdict — here is the exact setup and five prompts.",
    category: "AI",
    tags: ["Claude", "AI", "Productivity"],
    keywords: [
      "claude council",
      "claude project instructions",
      "claude ai advisors",
      "claude decision making prompt",
      "claude five advisors",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up of a computer circuit board, representing layered AI reasoning",
    date: "2026-06-13",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "I make a lot of decisions out loud with Claude — should I take this client, is this architecture overbuilt, am I about to talk myself into something. The problem with asking any single assistant is that it tends to agree with the framing you handed it. A trick I have been using fixes that: instead of one obliging voice, I make Claude answer as a small council of advisors who argue before they agree. Here is the exact setup, and five ways I put it to work.",
      },
      { type: "h2", text: "What the Council actually is" },
      {
        type: "p",
        text: "There is no hidden feature here, and that is the appealing part. The Council is just a Claude Project with a set of standing instructions. A Project is a workspace where every chat you open inherits the same instructions and files automatically, so you configure the behaviour once and never paste it again. Name the project, give it the council instructions below, and from then on every conversation inside it answers as five distinct advisors instead of one agreeable assistant.",
      },
      { type: "h2", text: "Setting it up in about two minutes" },
      {
        type: "p",
        text: "Open the Projects section in the Claude sidebar and choose New Project. Name it something like The Council. Open the project settings and paste the instructions from the next section into the project instructions field. That is the whole setup. Every new chat you start inside that project now runs as a council; chats outside it behave normally, so you are not changing how the rest of Claude works.",
      },
      { type: "h2", text: "The instructions to paste" },
      {
        type: "p",
        text: "The core rule is simple: Claude must never reply as a single voice. For every question it spins up five advisors, each taking a deliberately different angle, then closes with one verdict. Paste a version of this into the project instructions, telling Claude that for every question it should respond as the following five advisors and then reconcile them:",
      },
      {
        type: "ul",
        items: [
          "The Contrarian — goes straight at the weakest link in your reasoning and says what no one else will",
          "The First-Principles Thinker — ignores how you phrased the question and solves the actual underlying problem",
          "The Expansionist — looks for the upside and the bigger opportunity you are not seeing",
          "The Outsider — has zero context on purpose, so it catches the obvious thing experts skip past",
          "The Executor — skips the theory and tells you the single next move to make",
        ],
      },
      {
        type: "p",
        text: "Close the instructions with the part that does the real work: after the five have spoken, Claude weighs them against each other, drops the weak arguments, and hands you one clear verdict. Add a final line telling it to say so plainly when it is unsure rather than guessing — that single sentence is what keeps the whole thing honest.",
      },
      { type: "h2", text: "Why it beats just asking" },
      {
        type: "p",
        text: "A normal question gets you one answer shaped by how you asked it. Forcing five named roles makes Claude argue with itself before it commits, and the disagreement is where the value lives — the Contrarian surfaces the risk your excitement hid, the Outsider names the obvious flaw, and the Executor stops it all turning into philosophy. The instruction to admit uncertainty matters just as much: a council that confidently invents an answer is worse than no council at all.",
      },
      { type: "h2", text: "Five prompts to put it to work" },
      {
        type: "p",
        text: "These are the prompts I reach for most. Feed them the decision you are least comfortable examining first.",
      },
      {
        type: "ul",
        items: [
          "Am I deluded? — Tell the Council you have already decided on a move, paste your reasoning, and ask it to separate what is solid from what is you talking yourself into it, ending with a straight yes or no",
          "Find my pattern — Give it your three biggest decisions from the last few years and how each turned out, and ask it to name the bias that keeps repeating and predict the next mistake it will cause",
          "Read my excuse — Name the thing you have been putting off and your reason for it, and ask whether that reason is a real obstacle or a dressed-up fear; if it is fear, ask for the first move to make tonight",
          "Attack the deal — Paste the offer, contract, or purchase you are about to accept and ask the Council what is overpriced, what is missing, what you would regret in six months, and what to negotiate first",
          "Stress test — Lay out a plan you are proud of, then ask each advisor to assume it failed six months from now, name the most likely cause of death, and give you the fix, ranked by what to patch first",
        ],
      },
      {
        type: "quote",
        text: "The point of the Council is not to make Claude smarter. It is to stop it from agreeing with you — which, when you are about to make a big decision, is the most useful thing an advisor can do.",
      },
      {
        type: "p",
        text: "Build the project once and it is there every time you need a second, third, and fourth opinion. I keep mine pinned and open it whenever a decision feels too comfortable — usually the surest sign I have not actually pressure-tested it yet.",
      },
    ],
  },
  {
    slug: "multiple-claude-profiles-windows-setup",
    title: "How to Run Multiple Claude Code Accounts on Windows with CLAUDE_CONFIG_DIR",
    excerpt:
      "Set up separate Claude Code profiles on Windows for personal, work, and client accounts using CLAUDE_CONFIG_DIR — step-by-step with .bat launchers, VS Code integration, and a note on the global config file.",
    category: "Tools",
    tags: ["Claude Code", "Windows", "Developer Tools"],
    keywords: [
      "multiple claude accounts windows",
      "claude config dir",
      "claude code profiles windows",
      "claude code multiple accounts",
      "claude windows developer setup",
    ],
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dark terminal window with code on a developer screen",
    date: "2026-06-11",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "If you use Claude Code for both personal projects and client or company work, you quickly run into a problem: there is only one active account at a time. Switching manually through /login every session is tedious and easy to forget — which can mean billing personal work to a company account, or worse, mixing up credentials entirely. The clean solution is separate profiles, one per account, each launched with a single command.",
      },
      { type: "h2", text: "How CLAUDE_CONFIG_DIR works" },
      {
        type: "p",
        text: "Claude Code officially supports the CLAUDE_CONFIG_DIR environment variable. When set, Claude stores everything for that session — credentials, history, settings, and MCP plugins — inside the specified directory instead of the default user profile location. Set a different path for each account and the profiles never collide.",
      },
      { type: "h2", text: "Step 1: Create a folder for each profile" },
      {
        type: "p",
        text: "Open PowerShell and create a directory for each account you need. For example: mkdir C:\\ClaudeProfiles\\personal, mkdir C:\\ClaudeProfiles\\work, and mkdir C:\\ClaudeProfiles\\client. You can name these whatever makes sense for your setup — the folder name has no special meaning to Claude.",
      },
      { type: "h2", text: "Step 2: Create a .bat launcher for each account" },
      {
        type: "p",
        text: "Create a small batch file for each profile. For your personal account, create claude-personal.bat containing two lines: @echo off and set CLAUDE_CONFIG_DIR=C:\\ClaudeProfiles\\personal followed by claude. Repeat the same pattern for work (claude-work.bat) and any other accounts, pointing each at its own folder. Place these files somewhere on your PATH — such as C:\\Users\\YourName\\bin — so you can run them from any terminal.",
      },
      { type: "h2", text: "Step 3: Log in to each profile separately" },
      {
        type: "p",
        text: "Run claude-personal.bat in a terminal, then type /login and authenticate with your personal account. Claude writes the credentials into C:\\ClaudeProfiles\\personal and never touches your other profiles. Repeat the same process for each launcher: run it, /login, authenticate. After the initial login each launcher drops you straight into the correct account without any prompting.",
      },
      { type: "h2", text: "VS Code integration" },
      {
        type: "p",
        text: "VS Code's terminal profiles let you wire this up permanently. In your terminal settings, add a profile that sets the environment variable and launches Claude: $env:CLAUDE_CONFIG_DIR='C:\\ClaudeProfiles\\personal'; claude. Create one profile per account, give each a clear name like Claude Personal and Claude Work, and switch between them with the terminal dropdown. You can pair this with separate VS Code profiles so each window opens with the right Claude account automatically.",
      },
      { type: "h2", text: "One known caveat on Windows" },
      {
        type: "p",
        text: "Some versions of Claude Code on Windows also write to a global .claude.json file in your Windows user home directory, alongside the per-profile config. If you notice accounts bleeding into each other, check whether that file is being updated on every login — if so, the most robust fix is to run each account under a separate Windows user profile, which gives it a completely isolated home directory.",
      },
      {
        type: "ul",
        items: [
          "Personal Max account → C:\\ClaudeProfiles\\personal + claude-personal.bat",
          "Company account → C:\\ClaudeProfiles\\work + claude-work.bat",
          "Client account → C:\\ClaudeProfiles\\client + claude-client.bat",
          "Each profile keeps its own history, settings, and MCP plugins",
        ],
      },
      {
        type: "quote",
        text: "One environment variable, one folder per account. That is all it takes to keep credentials, history, and settings perfectly isolated on Windows.",
      },
      {
        type: "p",
        text: "This setup takes about ten minutes to configure and pays back every day. Whether you are juggling a personal Max plan, a company seat, and a client engagement, each context now opens with the right credentials and the right history — no manual switching, no billing surprises.",
      },
    ],
  },
  {
    slug: "laravel-performance-optimization-guide",
    title: "10 Proven Laravel Performance Optimization Techniques for Production Apps",
    excerpt:
      "Practical Laravel performance tuning from 10 years in production: caching, eager loading, queues, OPcache, and database tweaks that cut response times.",
    category: "Laravel",
    tags: ["Laravel", "PHP", "Performance"],
    keywords: [
      "laravel performance optimization",
      "speed up laravel",
      "laravel caching",
      "laravel eager loading",
      "php opcache",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "PHP and Laravel code in a dark code editor",
    date: "2026-05-18",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "After a decade of building and rescuing Laravel applications, I can tell you that most slow Laravel apps suffer from the same handful of problems. The good news: each one has a well-understood fix. Here are the techniques I apply on every production project, roughly in the order of impact.",
      },
      { type: "h2", text: "1. Kill N+1 queries with eager loading" },
      {
        type: "p",
        text: "The single most common Laravel performance bug is the N+1 query: looping over models and lazily loading a relationship on each iteration. A page that should run 3 queries ends up running 300. Use with() to eager load relationships, and enable Model::preventLazyLoading() in non-production environments so N+1s throw instead of silently degrading your app.",
      },
      { type: "h2", text: "2. Cache aggressively, invalidate precisely" },
      {
        type: "p",
        text: "Query results that change rarely — settings, menus, plan limits, dashboards — belong in Redis via Cache::remember(). The discipline is in invalidation: pair every cache write with a clear strategy (model observers or cache tags) so you never serve stale data after an update.",
      },
      { type: "h2", text: "3. Push slow work onto queues" },
      {
        type: "p",
        text: "Emails, PDF generation, image processing, webhook calls, and third-party API requests should never run inside the HTTP request. Move them to queued jobs backed by Redis and run workers under Supervisor. Your p95 response time will drop immediately, and failures become retryable instead of user-facing errors.",
      },
      { type: "h2", text: "4. Turn on the production switches" },
      {
        type: "ul",
        items: [
          "php artisan config:cache, route:cache and view:cache on every deploy",
          "OPcache enabled with validate_timestamps=0 (revalidate via deploy script)",
          "Composer install with --optimize-autoloader --no-dev",
          "PHP-FPM pool sized to your CPU and memory, not the defaults",
        ],
      },
      { type: "h2", text: "5. Fix the database, not just the code" },
      {
        type: "p",
        text: "Index the columns you filter and join on, paginate everything, and select only the columns you need on hot paths. Laravel's query log plus a tool like Telescope or Debugbar in staging will show you exactly where the time goes.",
      },
      {
        type: "quote",
        text: "Measure first, optimize second. Every technique here is worthless if you apply it to the wrong bottleneck.",
      },
      {
        type: "p",
        text: "Applied together, these changes routinely take pages from over a second down to well under 200 ms. If your Laravel app is struggling under load, start with the query log — the answer is almost always there.",
      },
    ],
  },
  {
    slug: "deploy-laravel-aws-production-architecture",
    title: "How to Deploy Laravel on AWS: A Production Architecture That Scales",
    excerpt:
      "A battle-tested AWS architecture for Laravel: EC2 or ECS behind a load balancer, RDS, ElastiCache Redis, S3, and CloudFront — with deploy pipeline tips.",
    category: "DevOps",
    tags: ["AWS", "Laravel", "DevOps"],
    keywords: [
      "deploy laravel aws",
      "laravel production architecture",
      "laravel ec2 rds",
      "laravel load balancer",
      "scale laravel",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Server racks in a modern data center",
    date: "2026-04-27",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "I have deployed Laravel to AWS for startups doing a few hundred users a day and platforms handling millions of requests. The architecture below is the shape I keep coming back to, because every piece scales independently and nothing is exotic.",
      },
      { type: "h2", text: "The core architecture" },
      {
        type: "ul",
        items: [
          "Application Load Balancer terminating TLS and health-checking instances",
          "EC2 instances (or ECS Fargate containers) running PHP-FPM + Nginx in an Auto Scaling Group",
          "RDS MySQL or PostgreSQL with Multi-AZ for failover",
          "ElastiCache Redis for cache, sessions, and queues",
          "S3 for user uploads, served through CloudFront",
          "A small dedicated worker instance (or ECS service) for queue workers and the scheduler",
        ],
      },
      { type: "h2", text: "Make the app stateless first" },
      {
        type: "p",
        text: "Before anything scales horizontally, the application must hold no local state: sessions in Redis, files in S3 via the s3 filesystem driver, and cache in Redis. Once that is true, adding or removing instances is a non-event, and deploys stop being scary.",
      },
      { type: "h2", text: "Separate web and worker workloads" },
      {
        type: "p",
        text: "Queue workers and cron (the Laravel scheduler) should not run on web instances. Auto-scaling kills instances; a terminated worker mid-job is a corrupted import. A small dedicated worker tier with Supervisor keeps background processing predictable, and you can scale it on queue depth instead of web traffic.",
      },
      { type: "h2", text: "Deploys without downtime" },
      {
        type: "p",
        text: "My pipeline builds a release artifact (composer install, npm build, config:cache), ships it, runs migrations with --force, and switches a symlink — or, on ECS, rolls a new task definition. Either way the rollback story is 'point back at the previous release', which has saved me more times than I can count.",
      },
      { type: "h2", text: "Cost notes from real projects" },
      {
        type: "p",
        text: "Most teams over-provision EC2 and under-provision RDS. Start with smaller app instances behind the ALB (they scale out), put the budget into the database, and turn on RDS Performance Insights — it is the best money-saver AWS gives you for free.",
      },
    ],
  },
  {
    slug: "nextjs-laravel-api-decoupled-architecture",
    title: "Next.js + Laravel API: Building a Decoupled Architecture That Works",
    excerpt:
      "How I combine a Next.js frontend with a Laravel API backend: auth with Sanctum, typed API clients, caching, and deployment topology explained.",
    category: "Architecture",
    tags: ["Next.js", "Laravel", "React"],
    keywords: [
      "nextjs laravel api",
      "laravel sanctum nextjs",
      "decoupled architecture",
      "laravel backend react frontend",
    ],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "React and JavaScript code on a developer screen",
    date: "2026-03-30",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Laravel is a phenomenal backend. Next.js is a phenomenal frontend. Most of my client projects in the last three years pair them: Laravel exposes a clean JSON API, Next.js owns rendering, routing, and SEO. Here is the setup that has proven itself.",
      },
      { type: "h2", text: "Who does what" },
      {
        type: "ul",
        items: [
          "Laravel: authentication, authorization, business logic, queues, webhooks, admin",
          "Next.js: pages, server-side rendering, static generation, image optimization, SEO metadata",
          "Shared contract: versioned REST endpoints (/api/v1) with Laravel API Resources shaping every response",
        ],
      },
      { type: "h2", text: "Authentication that doesn't fight you" },
      {
        type: "p",
        text: "For first-party frontends I use Laravel Sanctum's cookie-based SPA mode: the Next.js app and the API share a parent domain, CSRF is handled by Sanctum's endpoint, and there are no tokens in localStorage to leak. For mobile or third-party consumers, the same API issues Sanctum personal access tokens.",
      },
      { type: "h2", text: "Fetching: server-first" },
      {
        type: "p",
        text: "Next.js server components fetch from Laravel directly inside the data center, which means no CORS in the hot path and response caching with revalidation where it makes sense. Client components only fetch for truly interactive data. A small typed API client (generated from the resource shapes) keeps the contract honest on both sides.",
      },
      { type: "h2", text: "Deployment topology" },
      {
        type: "p",
        text: "Laravel lives on AWS (the architecture from my AWS deployment guide), Next.js deploys to Vercel or a Node service on the same VPC. Put both behind the same apex domain — app.example.com and api.example.com — and the cookie/auth story stays simple.",
      },
      {
        type: "quote",
        text: "A decoupled stack is only as good as its contract. Version your API, type your client, and the two halves can evolve independently.",
      },
    ],
  },
  {
    slug: "mysql-vs-postgresql-how-to-choose",
    title: "MySQL vs PostgreSQL in 2026: How I Choose for Client Projects",
    excerpt:
      "An honest MySQL vs PostgreSQL comparison from someone who runs both in production: performance, JSON, replication, tooling, and when each one wins.",
    category: "Databases",
    tags: ["MySQL", "PostgreSQL", "Databases"],
    keywords: [
      "mysql vs postgresql",
      "which database to choose",
      "postgres json",
      "mysql replication",
      "database comparison 2026",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Network cables connected to a server switch",
    date: "2026-03-08",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "I run MySQL and PostgreSQL in production for different clients, and the truth is that for a typical web application both are excellent. The decision comes down to workload shape and team experience, not benchmarks from someone else's blog. Here is how I actually decide.",
      },
      { type: "h2", text: "Where MySQL wins" },
      {
        type: "ul",
        items: [
          "Simple read-heavy workloads — its query path for primary-key lookups is extremely fast",
          "Replication maturity: read replicas are a checkbox on RDS and battle-tested everywhere",
          "Hosting ubiquity: every panel, every host, every ops team knows it",
          "Ecosystem fit: WordPress, most PHP applications, and a lot of legacy tooling assume it",
        ],
      },
      { type: "h2", text: "Where PostgreSQL wins" },
      {
        type: "ul",
        items: [
          "Complex queries: CTEs, window functions, and the planner handle analytical SQL gracefully",
          "JSONB with real indexing (GIN) — a document store inside your relational database",
          "Strictness: it refuses silently bad data that MySQL historically accepted",
          "Extensions: PostGIS for geo, pg_trgm for fuzzy search, and full-text search good enough to delay Elasticsearch",
        ],
      },
      { type: "h2", text: "My rule of thumb" },
      {
        type: "p",
        text: "CRUD-shaped product with heavy reads and a team that knows LAMP? MySQL, no hesitation. Anything with reporting, JSON-heavy payloads, geo queries, or gnarly business constraints? PostgreSQL. Migrating between them later is possible but painful, so spend an hour on this decision — not zero, and not a week.",
      },
      { type: "h2", text: "What matters more than the engine" },
      {
        type: "p",
        text: "Indexes that match your queries, connection pooling, sensible timeouts, automated backups you have actually restored once, and monitoring slow queries. A well-tuned MySQL beats a neglected PostgreSQL every single time — and vice versa.",
      },
    ],
  },
  {
    slug: "redis-caching-strategies-web-applications",
    title: "Redis Caching Strategies That Actually Reduce Database Load",
    excerpt:
      "Cache-aside, write-through, TTL design, stampede protection, and queue offloading — Redis patterns I use to take 80% of reads off the database.",
    category: "Databases",
    tags: ["Redis", "Performance", "Laravel"],
    keywords: [
      "redis caching strategies",
      "cache aside pattern",
      "cache stampede",
      "redis laravel",
      "reduce database load",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up of a computer circuit board",
    date: "2026-02-14",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Redis is the highest-leverage piece of infrastructure in most of my deployments. Used well, it takes the majority of read traffic off your primary database and smooths out spikes that would otherwise take the site down. Used badly, it serves stale data and hides bugs. The difference is strategy.",
      },
      { type: "h2", text: "Cache-aside: the default pattern" },
      {
        type: "p",
        text: "Read from cache; on a miss, read from the database and write the result back with a TTL. This is Cache::remember() in Laravel. It is simple, resilient (Redis down means slower, not broken), and right for 90% of cases. Start here and only get fancier when you have evidence.",
      },
      { type: "h2", text: "Design your TTLs deliberately" },
      {
        type: "ul",
        items: [
          "Reference data (countries, plans, settings): hours, invalidated on admin change",
          "User-facing lists (feeds, dashboards): 1–5 minutes — staleness is invisible, load reduction is huge",
          "Computed aggregates (counts, rankings): minutes, refreshed by a scheduled job, not by user requests",
        ],
      },
      { type: "h2", text: "Protect against cache stampedes" },
      {
        type: "p",
        text: "When a hot key expires, a thousand concurrent requests can hit the database simultaneously to rebuild it. Use a lock so a single request recomputes while others briefly serve the stale value (Laravel's Cache::flexible or a Redis lock). On high-traffic apps this single pattern has prevented multiple outages for my clients.",
      },
      { type: "h2", text: "Redis beyond caching" },
      {
        type: "p",
        text: "The same Redis instance typically carries sessions, queues, and rate limiting. One warning from experience: give queues their own database number or instance in serious deployments — a cache flush should never delete your pending jobs.",
      },
      {
        type: "quote",
        text: "The goal is not to cache everything. It is to cache the few queries that account for most of your load.",
      },
    ],
  },
  {
    slug: "docker-local-development-laravel-php",
    title: "Docker for Laravel Development: A Setup Your Whole Team Will Love",
    excerpt:
      "A practical Docker Compose setup for Laravel and PHP teams: Nginx, PHP-FPM, MySQL, Redis, Mailpit, and the volume tricks that keep it fast.",
    category: "DevOps",
    tags: ["Docker", "Laravel", "DevOps"],
    keywords: [
      "docker laravel development",
      "laravel docker compose",
      "php docker setup",
      "laravel sail alternative",
    ],
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stacked shipping containers representing Docker containers",
    date: "2026-01-22",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Every 'works on my machine' bug I have debugged in the last five years traces back to environment drift: different PHP versions, missing extensions, MySQL behaving differently on someone's laptop. Docker ends that conversation. Here is the Compose setup I roll out to teams.",
      },
      { type: "h2", text: "The services" },
      {
        type: "ul",
        items: [
          "app: PHP-FPM image with the exact extensions production uses, plus Composer and Xdebug (toggled by env)",
          "web: Nginx with the same vhost config as production",
          "mysql / pgsql: pinned to the production major version, data in a named volume",
          "redis: cache, sessions, queues — identical to prod topology",
          "mailpit: catches every outgoing email with a web UI, so no test email ever reaches a real inbox",
          "worker: the same app image running queue:work, so background jobs behave like production",
        ],
      },
      { type: "h2", text: "Why mirror production so closely?" },
      {
        type: "p",
        text: "Because the environment is part of your application. When local Nginx, PHP version, and Redis match the servers, a whole category of deploy-day surprises disappears. Your Dockerfile becomes living documentation of what the app needs to run.",
      },
      { type: "h2", text: "Performance tips that matter" },
      {
        type: "p",
        text: "On Mac and Windows, bind-mount performance is the pain point. Keep vendor/ and node_modules/ in named volumes instead of the bind mount, enable VirtioFS on Docker Desktop, and your artisan commands go from sluggish to native-feeling. On Linux none of this is needed — it is simply fast.",
      },
      { type: "h2", text: "One command to onboard" },
      {
        type: "p",
        text: "The payoff: a new developer runs git clone, cp .env.example .env, docker compose up, and they are productive in ten minutes with the entire stack — database seeded, mail catcher running, queues processing. That onboarding speed alone justifies the setup cost.",
      },
    ],
  },
  {
    slug: "ci-cd-pipeline-github-actions-laravel",
    title: "CI/CD for Laravel with GitHub Actions: From Push to Production",
    excerpt:
      "The GitHub Actions pipeline I use on client projects: tests, static analysis, zero-downtime deploys to AWS, and rollbacks — explained step by step.",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    keywords: [
      "laravel github actions",
      "laravel ci cd pipeline",
      "zero downtime deployment laravel",
      "automated testing laravel",
    ],
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing a GitHub repository page",
    date: "2025-12-10",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "A client once told me deploys at their company took a full afternoon and a prayer. We replaced that with a pipeline where merging to main puts code in production in under eight minutes, safely. This is the shape of that pipeline, which I now reuse across projects.",
      },
      { type: "h2", text: "Stage 1: prove the code works" },
      {
        type: "ul",
        items: [
          "Pest/PHPUnit test suite against real MySQL and Redis services in the workflow",
          "Static analysis with PHPStan/Larastan — catches whole bug classes before review",
          "Pint for code style, so formatting never appears in code review again",
          "Frontend build (npm ci && npm run build) to catch asset breakage early",
        ],
      },
      { type: "h2", text: "Stage 2: build an artifact, not a hope" },
      {
        type: "p",
        text: "The pipeline produces one deployable artifact: dependencies installed with --no-dev, assets compiled, version stamped. The exact bytes that passed the tests are the bytes that ship. Building on the server from git pull invites drift, and I have stopped doing it entirely.",
      },
      { type: "h2", text: "Stage 3: deploy without downtime" },
      {
        type: "p",
        text: "Releases unpack into a timestamped directory; storage and .env are symlinked in; migrations run with --force; then a current symlink flips atomically and PHP-FPM reloads with OPcache reset. Users never see a mid-deploy state. Rollback is pointing current at the previous release — seconds, not minutes.",
      },
      { type: "h2", text: "The guardrails" },
      {
        type: "p",
        text: "Production deploys only from main, protected by required status checks. A health-check step curls the site after the symlink flip and fails loudly (Slack webhook) if anything is off. Migrations are written to be backward-compatible for one release, which makes rollbacks genuinely safe.",
      },
      {
        type: "quote",
        text: "Deploys should be boring. If a deploy is exciting, the pipeline has failed.",
      },
    ],
  },
  {
    slug: "database-indexing-guide-faster-queries",
    title: "Database Indexing Explained: How I Make Slow Queries 100x Faster",
    excerpt:
      "A practical guide to database indexes: composite index column order, covering indexes, EXPLAIN, and the anti-patterns that silently kill performance.",
    category: "Databases",
    tags: ["MySQL", "PostgreSQL", "Performance"],
    keywords: [
      "database indexing guide",
      "composite index order",
      "mysql explain",
      "slow query optimization",
      "covering index",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Performance dashboard with charts and metrics",
    date: "2025-11-19",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "The most dramatic performance wins of my career have not come from rewriting code — they came from adding the right index. A query scanning two million rows becomes an index seek touching forty. Same hardware, 100x faster. Yet indexing remains the most misunderstood tool in web development.",
      },
      { type: "h2", text: "The mental model" },
      {
        type: "p",
        text: "An index is a sorted copy of selected columns with pointers back to the rows. Sorted means the database can binary-search instead of reading the whole table. That is the entire trick — everything else is detail about what to sort and in which order.",
      },
      { type: "h2", text: "Composite indexes: order is everything" },
      {
        type: "p",
        text: "An index on (tenant_id, status, created_at) serves WHERE tenant_id = ? AND status = ? ORDER BY created_at beautifully — and is nearly useless for a query filtering only on status. Rule: equality columns first, then the range or sort column. Most 'the index isn't working' mysteries are column-order mistakes.",
      },
      { type: "h2", text: "Read EXPLAIN before and after" },
      {
        type: "ul",
        items: [
          "type: ref or range is good; ALL means full table scan",
          "rows: the estimate of rows examined — watch it collapse when the index is right",
          "Using filesort / Using temporary: your ORDER BY or GROUP BY isn't covered",
          "In PostgreSQL, EXPLAIN ANALYZE shows actual times — trust it over intuition",
        ],
      },
      { type: "h2", text: "The anti-patterns" },
      {
        type: "p",
        text: "Wrapping an indexed column in a function (DATE(created_at) = ...) disables the index. Leading-wildcard LIKE '%term' can't seek. Indexing every column 'just in case' slows every write and helps no read. And an index on a boolean with two values rarely earns its keep.",
      },
      {
        type: "p",
        text: "Start from your slow query log, fix the top three queries, and measure. In my experience that one afternoon of work outperforms a server upgrade — and costs nothing.",
      },
    ],
  },
  {
    slug: "multi-tenant-saas-laravel-architecture",
    title: "Multi-Tenant SaaS in Laravel: Architecture Lessons From Real Products",
    excerpt:
      "Shared database vs database-per-tenant, tenant scoping, queue isolation, and billing — lessons from building multi-tenant SaaS platforms in Laravel.",
    category: "Architecture",
    tags: ["Laravel", "SaaS", "Architecture"],
    keywords: [
      "multi tenant laravel",
      "saas architecture laravel",
      "tenant isolation",
      "laravel saas tutorial",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop with analytics dashboard for a SaaS product",
    date: "2025-10-28",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "I have built several multi-tenant SaaS platforms in Laravel — including a WhatsApp business messaging platform serving organizations from a single codebase. Multi-tenancy decisions are the hardest to reverse later, so here is what I wish every founder knew before the first migration runs.",
      },
      { type: "h2", text: "Pick your isolation model deliberately" },
      {
        type: "ul",
        items: [
          "Shared database, tenant_id column: simplest to operate, scales to thousands of tenants, my default",
          "Database-per-tenant: strongest isolation and per-tenant backups, but migrations and connection management get heavy",
          "Hybrid: shared for small tenants, dedicated for enterprise — powerful, operationally expensive",
        ],
      },
      { type: "h2", text: "Make tenant scoping impossible to forget" },
      {
        type: "p",
        text: "With a shared database, one missing WHERE tenant_id is a data breach. I enforce scoping with a global scope applied through a BelongsToTenant trait on every tenant model, set from the authenticated context — never from request input. Add tests that try to read another tenant's data and assert failure; they are the cheapest security audit you will ever run.",
      },
      { type: "h2", text: "Queues and jobs carry tenant context" },
      {
        type: "p",
        text: "A queued job runs outside the request, so it must carry its tenant explicitly. Serialize the tenant id into every job and rehydrate context in the handler. Also rate-limit per tenant: one customer's bulk import must never starve everyone else's jobs — a lesson I learned in production, the hard way.",
      },
      { type: "h2", text: "The unglamorous parts that make or break it" },
      {
        type: "p",
        text: "Per-tenant feature flags and plan limits enforced in one place; usage metering written as events; billing through Cashier with webhooks handled idempotently; and an admin 'impersonate tenant' tool for support. None of this is exciting, and all of it is what separates a demo from a product.",
      },
      {
        type: "quote",
        text: "Multi-tenancy is a security model first and a database layout second.",
      },
    ],
  },
  {
    slug: "whatsapp-business-api-integration-guide",
    title: "WhatsApp Business API Integration: A Developer's Field Guide",
    excerpt:
      "What I learned building a WhatsApp Business platform: Cloud API setup, webhooks, message templates, the 24-hour window, and scaling bulk messaging.",
    category: "Backend",
    tags: ["WhatsApp API", "Laravel", "Integrations"],
    keywords: [
      "whatsapp business api integration",
      "whatsapp cloud api tutorial",
      "whatsapp message templates",
      "whatsapp webhook",
      "bulk whatsapp messaging",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Smartphone with a messaging app in a person's hand",
    date: "2025-09-15",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "I built GTA.BD, a WhatsApp Business platform that lets organizations run campaigns, automate conversations, and track engagement from one dashboard. Integrating the WhatsApp Business Cloud API taught me lessons that the official docs only hint at. Here is the field guide I wish I had on day one.",
      },
      { type: "h2", text: "Getting access: Cloud API, not on-premise" },
      {
        type: "p",
        text: "Meta's Cloud API is now the way — free hosting of the API itself, no Docker stack to babysit. You need a Meta Business account, a verified business, a phone number not registered to a personal WhatsApp, and a System User token. Budget real calendar time for business verification; it is the slowest step in the whole project.",
      },
      { type: "h2", text: "Respect the 24-hour conversation window" },
      {
        type: "p",
        text: "You can send free-form messages only within 24 hours of the user's last message. Outside that window, only pre-approved template messages are allowed. Architect this as a state machine on the conversation: window open or closed drives which send paths are legal. Build template management and the approval workflow into your product early — clients change templates constantly.",
      },
      { type: "h2", text: "Webhooks are your source of truth" },
      {
        type: "ul",
        items: [
          "Verify the webhook with the hub.challenge handshake and validate X-Hub-Signature-256 on every event",
          "Acknowledge fast: enqueue the payload and return 200 immediately — process in a queue worker",
          "Handle statuses (sent, delivered, read, failed) idempotently; Meta retries and duplicates happen",
          "Store raw payloads for replay — you will need them when debugging delivery disputes",
        ],
      },
      { type: "h2", text: "Bulk messaging without getting banned" },
      {
        type: "p",
        text: "Messaging limits tier up with quality ratings. Blast too fast to cold lists and your number's rating tanks. I queue campaign sends with per-number rate limits, spread delivery over time, and watch the quality dashboard like a hawk. Opt-in hygiene is not legal box-ticking — it is what keeps your sender alive.",
      },
      {
        type: "p",
        text: "WhatsApp is the highest-engagement channel I have ever integrated — open rates dwarf email. Built carefully, it transforms how businesses talk to customers; built carelessly, you lose the number. The difference is engineering discipline.",
      },
    ],
  },
  {
    slug: "email-deliverability-guide-developers",
    title: "Email Deliverability for Developers: Why Your App's Emails Go to Spam",
    excerpt:
      "SPF, DKIM, DMARC, warming up domains, and choosing SES vs Mailgun vs Postmark — deliverability lessons from building LaravelSMTP.com.",
    category: "Backend",
    tags: ["Email", "Laravel", "SMTP"],
    keywords: [
      "email deliverability guide",
      "spf dkim dmarc explained",
      "laravel email spam",
      "amazon ses vs mailgun",
      "transactional email best practices",
    ],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer working on a laptop with email on screen",
    date: "2025-08-21",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Building LaravelSMTP.com — a service that gives Laravel apps one-line email setup across SES, Mailgun, Postmark, SendGrid, and raw SMTP — forced me to learn deliverability at a depth most developers never need. The summary: inbox placement is earned infrastructure, not luck.",
      },
      { type: "h2", text: "The three DNS records that are not optional" },
      {
        type: "ul",
        items: [
          "SPF: lists which servers may send for your domain — one record, include your provider",
          "DKIM: cryptographically signs each message; without it you are presumed forged",
          "DMARC: tells receivers what to do when SPF/DKIM fail, and sends you reports — start with p=none, monitor, then move to quarantine",
        ],
      },
      {
        type: "p",
        text: "Gmail and Yahoo now require this stack outright for bulk senders. No SPF+DKIM+DMARC means no inbox — the conversation ends there.",
      },
      { type: "h2", text: "Separate transactional from marketing" },
      {
        type: "p",
        text: "Password resets and invoices must never share a sending domain with newsletters. Marketing complaints poison the reputation that your critical mail depends on. Use subdomains (mail.example.com for transactional, news.example.com for campaigns) so reputations stay independent.",
      },
      { type: "h2", text: "Choosing a provider honestly" },
      {
        type: "p",
        text: "SES is by far the cheapest and rock-solid once you leave sandbox, but you build your own monitoring. Postmark has the best transactional deliverability and tooling out of the box. Mailgun and SendGrid sit between, with stronger marketing features. The pattern I implemented in LaravelSMTP: route through one abstraction so you can switch providers without touching application code.",
      },
      { type: "h2", text: "Watch the feedback loops" },
      {
        type: "p",
        text: "Process bounce and complaint webhooks and suppress those addresses immediately. Hard-bouncing the same address repeatedly is the fastest way to a blocklist. Track delivery, open, bounce, and complaint rates per domain — when a number moves, you want to know that day, not when a customer says 'we stopped receiving signups'.",
      },
    ],
  },
  {
    slug: "core-web-vitals-optimization-guide",
    title: "Core Web Vitals: How I Get Client Sites Into the Green",
    excerpt:
      "Concrete fixes for LCP, CLS, and INP: image strategy, font loading, JavaScript diet, and caching — the checklist I run on every performance project.",
    category: "Performance",
    tags: ["Performance", "Next.js", "SEO"],
    keywords: [
      "core web vitals optimization",
      "improve lcp",
      "fix cls",
      "inp optimization",
      "pagespeed insights green",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "MacBook with web performance code on screen",
    date: "2025-07-30",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Core Web Vitals are how Google measures real user experience — and they are a ranking signal. When clients come to me with a 'slow site', the work is rarely mysterious: the same handful of issues cause most red scores. Here is my working checklist for each metric.",
      },
      { type: "h2", text: "LCP: get the hero on screen fast" },
      {
        type: "ul",
        items: [
          "Serve images as WebP/AVIF, sized to the actual layout slot, via a CDN",
          "Preload the LCP image and the critical font; never lazy-load above-the-fold media",
          "Cut server time: cache rendered pages or fragments — TTFB above ~500 ms makes green LCP nearly impossible",
        ],
      },
      { type: "h2", text: "CLS: stop the page from jumping" },
      {
        type: "p",
        text: "Every image and embed gets explicit width and height (or aspect-ratio) so the browser reserves space. Ads and banners render into fixed-size containers. Fonts load with font-display: swap plus a metric-compatible fallback to avoid layout-shifting swaps. CLS is almost always a 'reserve the space' problem.",
      },
      { type: "h2", text: "INP: do less JavaScript" },
      {
        type: "p",
        text: "Interaction to Next Paint punishes heavy main threads. Ship less JS: code-split routes, defer third-party scripts, and move analytics off the critical path. In Next.js, keep components server-side by default and make only truly interactive islands client components — the architecture does the optimization for you.",
      },
      { type: "h2", text: "Measure like Google does" },
      {
        type: "p",
        text: "Lab tools (Lighthouse) guide debugging, but ranking uses field data — the CrUX dataset of real Chrome users. Check Search Console's Core Web Vitals report and PageSpeed Insights' field section. Optimize until the field numbers turn green, then add a performance budget to CI so they stay that way.",
      },
      {
        type: "quote",
        text: "Performance is a feature you ship once and defend forever.",
      },
    ],
  },
  {
    slug: "kubernetes-vs-docker-compose-when-to-use",
    title: "Kubernetes vs Docker Compose: When Small Teams Actually Need K8s",
    excerpt:
      "An honest take from running both: when Docker Compose on a VM is enough, when Kubernetes pays off, and the middle-ground options teams overlook.",
    category: "DevOps",
    tags: ["Kubernetes", "Docker", "DevOps"],
    keywords: [
      "kubernetes vs docker compose",
      "when to use kubernetes",
      "kubernetes small team",
      "container orchestration",
    ],
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Colorful code on a monitor in a dark room",
    date: "2025-06-25",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "I run client workloads on everything from a single Docker Compose VM to managed Kubernetes clusters. The pattern I keep seeing: teams adopt Kubernetes years before they need it, and pay a complexity tax every week after. Here is the decision framework I actually use.",
      },
      { type: "h2", text: "What Compose on a VM gives you" },
      {
        type: "p",
        text: "A docker-compose.yml on a solid VM (or two, behind a load balancer) handles a surprising amount: web, workers, Redis, even the database for smaller apps. Deploys are a pull-and-restart script; logs are docker logs; the whole mental model fits in one developer's head. For most products under serious scale, this is genuinely enough.",
      },
      { type: "h2", text: "The real signals you need Kubernetes" },
      {
        type: "ul",
        items: [
          "You run many services that scale independently and deploy many times a day",
          "You need automated self-healing and horizontal autoscaling as a baseline, not an aspiration",
          "Multiple teams ship to shared infrastructure and need isolation, quotas, and RBAC",
          "Traffic is genuinely spiky and pre-provisioning VMs wastes real money",
        ],
      },
      { type: "h2", text: "The costs nobody puts on the slide" },
      {
        type: "p",
        text: "Kubernetes is a platform you operate, even 'managed': ingress controllers, cert-manager, observability stack, upgrade cycles, YAML sprawl, and on-call knowledge that must live in more than one head. If that list made you tired, believe the feeling — it is information.",
      },
      { type: "h2", text: "The middle ground" },
      {
        type: "p",
        text: "ECS Fargate, Cloud Run, and platforms like Fly.io give you containers, autoscaling, and zero-downtime deploys without cluster ownership. My honest recommendation for most teams: Compose until it hurts, then a managed container platform — and Kubernetes only when the signals above are undeniable.",
      },
    ],
  },
  {
    slug: "securing-laravel-applications-checklist",
    title: "Securing Laravel Applications: My Production Security Checklist",
    excerpt:
      "A working security checklist for Laravel: mass assignment, authorization policies, file upload safety, headers, secrets, and dependency auditing.",
    category: "Laravel",
    tags: ["Security", "Laravel", "PHP"],
    keywords: [
      "laravel security best practices",
      "laravel security checklist",
      "secure laravel application",
      "laravel authorization policies",
    ],
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Padlock on a keyboard symbolizing application security",
    date: "2025-05-14",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Laravel ships with excellent security defaults — CSRF protection, hashed passwords, SQL injection safety through the query builder. Yet I still find the same vulnerabilities in almost every codebase I audit. They are not framework failures; they are usage failures. This is the checklist I run.",
      },
      { type: "h2", text: "Authorization, not just authentication" },
      {
        type: "p",
        text: "Logging in says who you are; authorization says what you may touch. Every route that loads a resource by id needs a policy check — $this->authorize('view', $invoice) — or one guessed URL exposes another user's data (IDOR, the most common bug I find). Route model binding plus policies makes this nearly free; there is no excuse to skip it.",
      },
      { type: "h2", text: "Mass assignment is still biting people" },
      {
        type: "p",
        text: "Model::create($request->all()) with a permissive $fillable lets an attacker post is_admin=1. Use $request->validated() exclusively, keep $fillable tight, and treat any ->all() in a controller as a code review failure.",
      },
      { type: "h2", text: "File uploads: validate like you mean it" },
      {
        type: "ul",
        items: [
          "Validate MIME type and extension allow-lists, never deny-lists",
          "Store uploads outside the public path or on S3; serve via signed URLs",
          "Re-encode images (Intervention) to strip embedded payloads",
          "Generate filenames yourself — never trust the client's",
        ],
      },
      { type: "h2", text: "The environment around the code" },
      {
        type: "ul",
        items: [
          "APP_DEBUG=false in production — debug pages leak credentials",
          "Secrets in env or a secret manager, never committed; rotate on team departures",
          "Security headers (CSP, X-Frame-Options, HSTS) via middleware",
          "composer audit in CI so vulnerable dependencies fail the build",
          "Rate limiting on login, password reset, and any endpoint that sends email or SMS",
        ],
      },
      {
        type: "quote",
        text: "Audits find the same five issues every time. Fix the boring things and you are ahead of 90% of applications.",
      },
    ],
  },
];

/** Posts sorted newest first. */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((post) => post.category))];
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((post) => post.tags))];
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
