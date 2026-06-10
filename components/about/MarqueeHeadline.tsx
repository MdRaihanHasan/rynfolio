const items = [
  "Full-Stack Development",
  "Laravel & PHP",
  "React & Next.js",
  "Cloud & DevOps",
  "Database Architecture",
  "API Development",
  "AWS & Google Cloud",
  "Performance Optimization",
  "System Architecture",
];

export default function MarqueeHeadline() {
  return (
    <div className="rel z-2 py-25">
      <div className="headline-wrap">
        <span className="marquee-wrap">
          {[0, 1, 2].map((row) => (
            <span className="marquee-inner left" key={row}>
              {items.map((item) => (
                <span className="marquee-item" key={item}>
                  {item}
                  <i className="far fa-asterisk"></i>
                </span>
              ))}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
