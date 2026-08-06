"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  showEarlyAccess?: boolean;
};

export default function SiteHeader({ showEarlyAccess = true }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" onKeyDown={(event) => event.key === "Escape" && setMenuOpen(false)}>
      <Link className="brand" href="/" aria-label="Kiduna home">
        <Image src="/kiduna-logo.svg" alt="Kiduna" width={168} height={56} priority />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
      <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
        <a className="nav-link" href="/how-we-work" onClick={() => setMenuOpen(false)}>How We Work</a>
        <a className="nav-link" href="/grow-with-us" onClick={() => setMenuOpen(false)}>Grow With Us</a>
        <a className="nav-link" href="/about-our-work" onClick={() => setMenuOpen(false)}>About Our Work</a>
        <a className="nav-link" href="/nightpaper" onClick={() => setMenuOpen(false)}>The Nightpaper</a>
        {showEarlyAccess && (
          <Link className="header-link" href="/#early-access" onClick={() => setMenuOpen(false)}>
            Request early access <span aria-hidden="true">↘</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
