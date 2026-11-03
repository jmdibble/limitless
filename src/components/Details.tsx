import Image from "next/image";
import Icon, { type IconName } from "./Icon";
import OpenStatus from "./OpenStatus";
import {
  ADDRESS,
  DIRECTIONS_URL,
  HOURS,
  MAP_EMBED_URL,
  PHONE,
  SOCIAL,
  formatHour,
} from "@/lib/site";

function CardTitle({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return <div className="contact-card-title"><Icon className="line-icon" name={icon} /><h3>{children}</h3></div>;
}

export default function Details() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-heading">
          <div className="eyebrow"><span aria-hidden="true" />Contact</div>
          <h2>Find Us</h2>
        </div>

        <div className="contact-cards">
          <article className="contact-card">
            <CardTitle icon="clock">Opening Hours</CardTitle>
            <div className="hours-list">
              {HOURS.map((item) => (
                <div className="hours-row" key={item.label}>
                  <span>{item.label}</span><strong>{formatHour(item.open)} – {formatHour(item.close)}</strong>
                </div>
              ))}
            </div>
            {/* Always rendered so the reserved height doesn't jump when OpenStatus hydrates */}
            <div className="hours-status">
              <OpenStatus />
            </div>
          </article>

          <article className="contact-card">
            <CardTitle icon="pin">Location &amp; Contact</CardTitle>
            <address className="contact-address">
              {ADDRESS.lines.map((line, i) => (
                <span key={line}>{i > 0 && <br />}{line}</span>
              ))}
            </address>
            <a className="button button-primary directions-button" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Get Directions <Icon name="arrow-up-right" />
            </a>
            <p className="parking-note">Free parking on-site</p>
          </article>

          <article className="contact-card">
            <CardTitle icon="phone">Get in Touch</CardTitle>
            <a className="contact-phone" href={`tel:${PHONE.tel}`}>{PHONE.display}</a>
            <div className="social-links-list">
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer"><Icon className="line-icon" name="whatsapp" />WhatsApp</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"><Icon className="line-icon" name="instagram" />{SOCIAL.instagramHandle}</a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"><Icon className="line-icon" name="facebook" />Facebook</a>
            </div>
          </article>
        </div>

        <div className="arrival-and-map">
          <figure className="arrival-photo">
            <Image
              src="/new_entrance.jpeg"
              alt="Entrance to Limitless Gym MK"
              fill
              sizes="(max-width: 960px) calc(100vw - 48px), 35vw"
            />
            <figcaption>Find us in Paulerspury</figcaption>
          </figure>

          <div className="map-embed">
            <iframe
              src={MAP_EMBED_URL}
              title="Map showing the location of Limitless Gym MK"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
