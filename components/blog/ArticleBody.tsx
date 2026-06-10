import type { PostSection } from "@/lib/data/posts";

/** Renders structured article sections with the template's blog-details typography. */
export default function ArticleBody({ sections }: { sections: PostSection[] }) {
  return (
    <div className="content wow fadeInUp delay-0-2s">
      {sections.map((section, index) => {
        switch (section.type) {
          case "h2":
            return (
              <h2 className="h4 mt-30" key={index}>
                {section.text}
              </h2>
            );
          case "ul":
            return (
              <ul className="list-style-two my-25" key={index}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
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
          default:
            return <p key={index}>{section.text}</p>;
        }
      })}
    </div>
  );
}
