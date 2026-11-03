import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { HOURS, JOIN_URL, NAV_LINKS, SOCIAL, formatHour } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <h2>No Gimmicks. No Ego.<br /><span>Just Results.</span></h2>
          <div className="footer-actions">
            <a className="button button-primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">Join now <Icon name="arrow-right" /></a>
            <Link className="button button-outline" href="/#contact">Get in Touch</Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="footer-logo-link" href="/#hero" aria-label="Limitless Gym MK home">
              <Image
                className="footer-logo-image"
                src="/writing_no_bg.png"
                alt="Limitless Gym MK"
                width={118}
                height={84}
                sizes="118px"
              />
            </Link>
            <p>Premium weights, cardio and a functional gym near Milton Keynes. Come in and train your way.</p>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h3>Explore</h3>
            {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>
          <div className="footer-column footer-hours">
            <h3>Hours</h3>
            {HOURS.map((h) => (
              <span key={h.short}>{h.short} {formatHour(h.open)}–{formatHour(h.close)}</span>
            ))}
          </div>
          <div className="footer-column footer-follow">
            <h3>Follow</h3>
            <div className="footer-socials">
              <a href={SOCIAL.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Icon name="instagram" /></a>
              <a href={SOCIAL.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Icon name="facebook" /></a>
              <a href={SOCIAL.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /></a>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Limitless Gym MK Ltd. All rights reserved. Registered in England &amp; Wales · Company No. 16947334</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
