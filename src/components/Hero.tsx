import Image from "next/image";
import Icon from "./Icon";
import { JOIN_URL } from "@/lib/site";

function FactIcon({ type }: { type: "hours" | "pass" | "member" | "place" }) {
  const paths = {
    hours: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pass: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
    member: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4m8-4v4" /></>,
    place: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,  };
  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <Image
        className="hero-image"
        src="/new_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow"><span aria-hidden="true" />Weights · Cardio · Functional · Milton Keynes</div>
          <h1>No Gimmicks.<br />No Ego.<br /><span>Just Results.</span></h1>
          <p>Premium weights, cardio and a functional gym near Milton Keynes. Come in and train your way.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
              Join now <Icon name="arrow-right" />
            </a>
            <a className="button button-outline" href="#about">Learn More</a>
          </div>
        </div>

        <div className="hero-facts" aria-label="Gym information">
          <div className="hero-fact">
            <FactIcon type="hours" />
            <div><span>Open 7 days</span><strong>Early till late</strong></div>
          </div>
          <div className="hero-fact">
            <FactIcon type="pass" />
            <div><span>Day passes</span><strong>From £10</strong></div>
          </div>
          <div className="hero-fact">
            <FactIcon type="member" />
            <div><span>Memberships</span><strong>From £40 a month</strong></div>
          </div>
          <div className="hero-fact">
            <FactIcon type="place" />
            <div><span>Free parking</span><strong>Directly outside</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
