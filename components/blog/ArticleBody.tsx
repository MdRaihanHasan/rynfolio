import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { PostSection } from "@/lib/data/posts";

/** Matches inline markdown links: [label](/internal) or [label](https://external). */
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]+|https?:\/\/[^)\s]+)\)/g;

/** Renders plain text with support for inline [label](href) links — internal links use next/link. */
function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith("/")) {
      nodes.push(
        <Link href={href} key={match.index}>
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a href={href} target="_blank" rel="noopener noreferrer" key={match.index}>
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length ? nodes.map((node, i) => <Fragment key={i}>{node}</Fragment>) : text;
}

/** Renders structured article sections with the template's blog-details typography. */
export default function ArticleBody({ sections }: { sections: PostSection[] }) {
  return (
    <div className="content article-content wow fadeInUp delay-0-2s">
      {sections.map((section, index) => {
        switch (section.type) {
          case "h2":
            return (
              <h2 className="h4 mt-30" key={index}>
                {section.text}
              </h2>
            );
          case "h3":
            return (
              <h3 className="h5 mt-25" key={index}>
                {section.text}
              </h3>
            );
          case "ul":
            return (
              <ul className="list-style-two my-25" key={index}>
                {section.items.map((item) => (
                  <li key={item}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={index}>
                {section.text}
                <span className="blockquote-footer">{`Md Raihan Hasan`}</span>
              </blockquote>
            );
          case "code":
            return (
              <div className="article-code" key={index}>
                {(section.label ?? section.lang) && (
                  <div className="article-code-bar">{section.label ?? section.lang}</div>
                )}
                <pre>
                  <code>{section.code}</code>
                </pre>
              </div>
            );
          case "image":
            return (
              <figure className="article-image" key={index}>
                <img src={section.src} alt={section.alt} loading="lazy" />
                {section.caption && <figcaption>{section.caption}</figcaption>}
              </figure>
            );
          default:
            return <p key={index}>{renderInline(section.text)}</p>;
        }
      })}
    </div>
  );
}
