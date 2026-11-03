import Image from "next/image";
import OpenStatus from "./OpenStatus";

const hours = [
  { day: "Monday – Friday", time: "7am – 9pm" },
  { day: "Saturday", time: "9am – 8pm" },
  { day: "Sunday", time: "9am – 5pm" },
];

function Icon({ name }: { name: "clock" | "pin" | "phone" | "whatsapp" | "instagram" | "facebook" }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
    whatsapp: <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" /></>,
    facebook: <path d="M14.5 21v-8h3l.5-3.5h-3.5V7.8c0-1 .4-1.8 1.9-1.8H18V3.1A20 20 0 0 0 15.4 3C12.9 3 11 4.5 11 7.3v2.2H8V13h3v8" />,
  };
  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function CardTitle({ icon, children }: { icon: "clock" | "pin" | "phone"; children: React.ReactNode }) {
  return <div className="contact-card-title"><Icon name={icon} /><h3>{children}</h3></div>;
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
            <OpenStatus />
            <div className="hours-list">
              {hours.map((item) => (
                <div className="hours-row" key={item.day}>
                  <span>{item.day}</span><strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="contact-card">
            <CardTitle icon="pin">Location &amp; Contact</CardTitle>
            <address className="contact-address">
              Unit 2, The Homestead<br />
              Watling Street, Paulerspury<br />
              Northants, NN12 6LH
            </address>
            <a className="button button-primary directions-button" href="https://maps.app.goo.gl/EPbW11M6V2MeVZfp7" target="_blank" rel="noopener noreferrer">
              Get Directions <span aria-hidden="true">↗</span>
            </a>
            <p className="parking-note">Free parking on-site</p>
          </article>

          <article className="contact-card">
            <CardTitle icon="phone">Get in Touch</CardTitle>
            <a className="contact-phone" href="tel:+447711240929">07711 240929</a>
            <div className="social-links-list">
              <a href="https://wa.me/447711240929" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />WhatsApp</a>
              <a href="https://www.instagram.com/limitless_gym_mk/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" />@limitless_gym_mk</a>
              <a href="https://www.facebook.com/korecovery?locale=en_GB" target="_blank" rel="noopener noreferrer"><Icon name="facebook" />Facebook</a>
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

          <div className="map-placeholder" role="img" aria-label="Map location placeholder for Limitless Gym MK in Paulerspury NN12 6LH">
            <span className="map-pin"><Icon name="pin" /></span>
            <span>Paulerspury · NN12 6LH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
