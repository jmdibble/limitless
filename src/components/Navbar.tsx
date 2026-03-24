"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-neutral/95 backdrop-blur-sm border-b border-secondary">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero">
          <Image
            src="/writing_no_bg.png"
            alt="Limitless Gym MK"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading uppercase text-sm tracking-widest text-tertiary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-heading uppercase text-sm tracking-widest px-5 py-2 transition-colors"
            >
              Join Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <ul className="md:hidden bg-neutral border-t border-secondary px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="py-2">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading uppercase tracking-widest text-tertiary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-heading uppercase tracking-widest px-5 py-2 transition-colors"
            >
              Join Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
