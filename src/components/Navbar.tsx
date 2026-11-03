"use client";

import Image from "next/image";
import { useState } from "react";

const JOIN_URL =
  "https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <a className="nav-logo-link" href="#hero" aria-label="Limitless Gym MK home">
          <Image
            className="nav-logo-image"
            src="/writing_no_bg.png"
            alt="Limitless Gym MK"
            width={94}
            height={66}
            sizes="(max-width: 960px) 85px, 94px"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary nav-join" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
          Join now
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button-primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join now
          </a>
        </nav>
      )}
    </header>
  );
}
