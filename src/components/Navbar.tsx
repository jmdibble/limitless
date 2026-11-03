"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { JOIN_URL, NAV_LINKS } from "@/lib/site";

// True once the hero has scrolled up behind the header. Pages without a hero
// (e.g. /privacy) count as scrolled, so the header is always the solid style there.
function getPastHero() {
  const hero = document.getElementById("hero");
  if (!hero) return true;
  const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 84;
  return hero.getBoundingClientRect().bottom <= headerHeight;
}

// The snapshot is a boolean, so React only re-renders when it flips, not on every scroll event.
function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Server snapshot is false: static HTML always renders the transparent, over-hero style.
  const pastHero = useSyncExternalStore(subscribe, getPastHero, () => false);

  return (
    <header className={`site-header${pastHero ? " is-scrolled" : ""}`}>
      <div className="container nav-row">
        <Link className="nav-logo-link" href="/#hero" aria-label="Limitless Gym MK home">
          <Image
            className="nav-logo-image"
            src="/writing_no_bg.png"
            alt="Limitless Gym MK"
            width={93}
            height={66}
            sizes="(max-width: 1024px) 85px, 93px"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a className="button button-primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join now
          </a>
        </nav>
      )}
    </header>
  );
}
