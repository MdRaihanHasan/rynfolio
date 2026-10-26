import "./lyra.css";

// The Lyra Prime product section. Renders inside the site's root layout
// (global Header/Footer stay intact); `.lp` scopes the product styling.
export default function LyraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="lp">{children}</div>;
}
