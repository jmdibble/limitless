import Image from "next/image";
import FadeInUp from "./FadeInUp";
import Icon, { type IconName } from "./Icon";

// PLACEHOLDER COPY: to be replaced in the copy pass. Facts are confirmed
// (air con, changing rooms + lockers + toilets, reception staffed all opening
// hours, shakes made fresh, upstairs floor); the wording is not.
const points: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "snowflake",
    title: "Air conditioned",
    description: "Fully air-conditioned throughout the gym to train comfortably.",
  },
  {
    icon: "locker",
    title: "Changing rooms, lockers & toilets",
    description: "Everything you need before and after you train.",
  },
  {
    icon: "bell",
    title: "Manned reception",
    description: "Someone on hand all opening hours. Shakes and cold drinks available.",
  },
  {
    icon: "stairs",
    title: "Upstairs floor",
    description: "Cardio, dumbbells, cables and mats, so you can train how you like.",
  },
];

const photos = [
  {
    src: "/new_general_2.jpeg",
    alt: "Reception & lounge",
    caption: "Reception & lounge",
    position: "center 60%",
  },
  {
    src: "/new_changing.jpeg",
    alt: "Changing rooms",
    caption: "Changing rooms",
    position: "center 55%",
  },
  {
    src: "/new_general_1.jpeg",
    alt: "Upstairs",
    caption: "Upstairs",
    position: "center 70%",
  },
];

export default function Welcome() {
  return (
    <section className="section welcome-section" id="welcome">
      <div className="container welcome-layout">
        <div className="welcome-photos">
          {photos.map((photo, index) => (
            <FadeInUp key={photo.src} delay={index * 90} className="welcome-photo">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectPosition: photo.position }}
                sizes={
                  index === 0
                    ? "(max-width: 560px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 48px), 40vw"
                    : "(max-width: 560px) calc((100vw - 50px) / 2), (max-width: 1024px) calc((100vw - 60px) / 2), 20vw"
                }
              />
              <span className="welcome-caption">{photo.caption}</span>
            </FadeInUp>
          ))}
        </div>

        <div className="welcome-copy">
          {/* Separate wrapper so the stacked layout can slot the photos between heading and cards */}
          <div className="welcome-head">
            <div className="eyebrow">
              <span aria-hidden="true" />
              Welcome
            </div>
            <h2>Everything Under One Roof.</h2>
            <p className="section-lead">
              Serious equipment, proper facilities and someone on the desk
              whenever we&apos;re open. Whatever your level, you can walk in and
              train your way.
            </p>
          </div>
          <div className="feature-grid">
            {points.map((point, index) => (
              <FadeInUp key={point.title} delay={index * 70} className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  <Icon name={point.icon} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
