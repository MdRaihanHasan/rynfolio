"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY >= 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const openSidebar = () => {
    document.body.classList.add("side-content-visible");
  };

  return (
    <header className={`main-header menu-absolute${fixed ? " fixed-header" : ""}`}>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" />
                    </Link>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle me-4"
                    onClick={() => setMenuOpen((open) => !open)}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className={`navbar-collapse collapse clearfix${menuOpen ? " show" : ""}`}>
                  <ul className="navigation clearfix">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                    {/* <li
                      className="dropdown"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        pages
                      </a>
                      <ul style={{ display: dropdownOpen ? "block" : "none" }}>
                        <li>
                          <Link href="/projects-masonry">Projects Masonry</Link>
                        </li>
                        <li>
                          <Link href="/404-page">Error Page</Link>
                        </li>
                      </ul>
                      <div
                        className="dropdown-btn"
                        onClick={() => setDropdownOpen((open) => !open)}
                      >
                        <span className="fas fa-chevron-down"></span>
                      </div>
                    </li> */}
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}
            </div>

            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidebar */}
              <div className="menu-sidebar">
                <button onClick={openSidebar}>
                  <img src="/assets/images/shape/sidebar-tottler.svg" alt="Toggler" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
}
