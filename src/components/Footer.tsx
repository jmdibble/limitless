import Link from "next/link";

const JOIN_URL =
  "https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA";

function SocialIcon({ name }: { name: "instagram" | "facebook" | "whatsapp" }) {
  const paths = {
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" /></>,
    facebook: <path d="M14.5 21v-8h3l.5-3.5h-3.5V7.8c0-1 .4-1.8 1.9-1.8H18V3.1A20 20 0 0 0 15.4 3C12.9 3 11 4.5 11 7.3v2.2H8V13h3v8" />,
    whatsapp: <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <h2>No Gimmicks. No Ego.<br /><span>Just Results.</span></h2>
          <div className="footer-actions">
            <a className="button button-primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">Join now <span aria-hidden="true">→</span></a>
            <a className="button button-outline" href="#contact">Get in Touch</a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand-lockup" href="#hero" aria-label="Limitless Gym MK home">
              <span className="brand-mark" aria-hidden="true">L</span>
              <span className="brand-wordmark"><strong>LIMITLESS GYM MK</strong></span>
            </a>
            <p>Premium weights and bodybuilding gym near Milton Keynes where everyone is welcome.</p>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-column footer-hours">
            <h3>Hours</h3>
            <span>Mon–Fri 7am–9pm</span>
            <span>Sat 9am–8pm</span>
            <span>Sun 9am–5pm</span>
          </div>
          <div className="footer-column footer-follow">
            <h3>Follow</h3>
            <div className="footer-socials">
              <a href="https://www.instagram.com/limitless_gym_mk/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><SocialIcon name="instagram" /></a>
              <a href="https://www.facebook.com/korecovery?locale=en_GB" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><SocialIcon name="facebook" /></a>
              <a href="https://wa.me/447711240929" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><SocialIcon name="whatsapp" /></a>
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
