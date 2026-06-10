"use client";

import { useState } from "react";
import BgLines from "@/components/ui/BgLines";
import type { RepoProject } from "@/lib/data/projects";
import repos from "@/lib/data/repos.json";

const FALLBACK_DESCRIPTION =
  "Open source project from the WPCodeLab GitHub organization.";

// Format repo title for display: "API-mega-list" -> "API Mega List"
// Keeps all-caps acronyms (API, GLM, OCR, LLM) intact.
function formatTitle(raw: string): string {
  if (!raw) return "";
  return String(raw)
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => {
      if (/^[A-Z0-9]+$/.test(word)) return word; // API, GLM, OCR, 90M
      if (!word) return "";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .filter(Boolean)
    .join(" ");
}

// Predefined category mapping for repositories
// Format: { 'repo-name': ['category1', 'category2'] }
const repoCategories: Record<string, string[]> = {
  // Web Applications
  "9router": ["web"],
  "api-mega-list": ["web", "api"],
  "api-tester-chrome-extension": ["web", "extension"],
  "awesome-copilot": ["web", "ai"],
  caveman: ["web"],
  chat: ["web"],
  "claude-counter": ["web", "ai"],
  codeflow: ["web"],
  dashyn: ["web"],
  "dev-filler": ["web"],
  "developer-portfolios": ["web"],
  draw: ["web"],
  "eml-reader": ["web"],
  "facepocket-chrome-extension": ["web", "extension"],
  "focusmodeplus-chrome-extension": ["web", "extension"],
  "free-llm-api-keys": ["web", "ai"],
  freellmapi: ["web", "ai"],
  "glm-ocr-90m": ["web", "ai"],
  "gorib-site": ["web"],
  laragonterminalpro: ["web", "desktop"],
  larapikit: ["web", "api"],
  "laravel-brain": ["web"],
  lokibrunch: ["web"],
  "lyra-panel": ["web"],
  "memanto-claude-memory": ["web", "ai"],
  "muxy-cli": ["web", "cli"],
  "nango-700api": ["web", "api"],
  neuroshade: ["web"],
  "omnivoice-studio": ["web", "ai"],
  opencode: ["web", "ai", "cli"],
  openhuman: ["web"],
  paperclip: ["web"],
  picoclaw: ["web"],
  raiforgeide: ["web", "desktop"],
  scrapy: ["web", "api"],
  "simple-html-editor": ["web"],
  smskit: ["web", "api"],
  spinifex: ["web", "cli"],
  stickynotes: ["web"],
  "sysmocap-realtime-3d": ["web"],
  testlify: ["web"],
  "traffic-monitor": ["web"],
  "vscode-copilot-chat": ["web"],
  "web-tools": ["web"],
  webvm: ["web"],
  winora: ["web"],
  "x-osint": ["web"],
  "weather-api": ["web", "api"],
  "weather-widget": ["web", "extension"],
  "wp-codelab-site": ["web"],
};

// Determine categories for filtering based on predefined mapping
function determineCategories(title: string): string[] {
  // Convert title to match our mapping keys (lowercase, replace spaces with hyphens)
  const normalizedTitle = title.toLowerCase().replace(/\s+/g, "-");

  // Return predefined categories or default to ['web']
  return repoCategories[normalizedTitle] || ["web"];
}

const filterButtons: { filter: string; label: string }[] = [
  { filter: "*", label: "All Repositories" },
  { filter: ".web", label: "Web Applications" },
  { filter: ".mobile", label: "Mobile Apps" },
  { filter: ".desktop", label: "Desktop Applications" },
  { filter: ".cli", label: "CLI Tools" },
  { filter: ".extension", label: "Browser Extensions" },
  { filter: ".api", label: "APIs & Libraries" },
  { filter: ".ai", label: "AI & ML Projects" },
];

const allRepos = repos as RepoProject[];

export default function GithubRepos() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredRepos = allRepos.filter((repo) => {
    if (activeFilter === "*") return true;
    return determineCategories(repo.title).some(
      (cat) => `.${cat}` === activeFilter
    );
  });

  return (
    <section className="projects-area pt-130 rpt-100 pb-130 rpb-100 rel z-1 github-repositories-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Open Source</span>
              <h2>
                GitHub <span>Repositories</span>
              </h2>
              <p className="lead-text">
                Explore our collection of open-source projects. Each repository
                represents innovative solutions and collaborative development
                efforts.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Menu */}
        <ul className="github-filter filter-btns-one justify-content-center pb-40 wow fadeInUp delay-0-5s">
          {filterButtons.map(({ filter, label }) => (
            <li
              key={filter}
              data-filter={filter}
              className={activeFilter === filter ? "current" : undefined}
              onClick={() => setActiveFilter(filter)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Grid */}
        <div className="row g-4" id="github-repos-grid">
          {filteredRepos.length === 0 ? (
            <div className="col-12 github-empty">
              <i className="far fa-folder-open"></i>
              <p>No repositories match this filter.</p>
            </div>
          ) : (
            filteredRepos.map((repo, i) => {
              const desc = repo.description || FALLBACK_DESCRIPTION;
              const title = formatTitle(repo.title);
              const delay = i % 2 === 0 ? "0-2s" : "0-4s";
              const og =
                "https://opengraph.githubassets.com/1/WPCodeLab/" +
                encodeURIComponent(repo.title);
              const categoryClasses = determineCategories(repo.title)
                .map((cat) => ` ${cat}`)
                .join("");

              return (
                <div
                  key={repo.repo_url}
                  className={`col-lg-6 item${categoryClasses}`}
                  data-title={title.toLowerCase()}
                  data-description={desc.toLowerCase()}
                >
                  <div className={`project-item style-two wow fadeInUp delay-${delay}`}>
                    <div className="project-image">
                      <img
                        src={og}
                        alt={repo.title}
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = "none";
                          const fallback =
                            img.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="gh-fallback" style={{ display: "none" }}>
                        <i className="fab fa-github"></i>
                      </div>
                      <a
                        href={repo.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="details-btn"
                        aria-label="View repository"
                      >
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="project-content">
                      <span className="sub-title">{desc}</span>
                      <h3>
                        <a
                          href={repo.repo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <BgLines />
    </section>
  );
}
