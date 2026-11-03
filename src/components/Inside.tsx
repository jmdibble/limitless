import Image from "next/image";
import FadeInUp from "./FadeInUp";
import Icon from "./Icon";

// PLACEHOLDER COPY: to be replaced in the copy pass. Equipment lists are drafted
// from the photos plus confirmed facts (80kg dumbbells, 3 spin bikes upstairs,
// matted floor-work area). Check every bullet before launch.
const zones = [
  {
    tag: "Downstairs",
    title: "Weights",
    image: {
      src: "/new_weights_3.jpeg",
      alt: "Weights area, downstairs",
      position: "center 60%",
    },
    points: [
      "Dumbbells up to 80kg",
      "Plate-loaded machines for every muscle",
      "Squat rack, benches and barbells",
      "Full power rack",
      "Lifting platform",
    ],
  },
  {
    tag: "Upstairs",
    title: "Cardio",
    image: {
      src: "/new_cardio_4.jpeg",
      alt: "Cardio area, upstairs",
      position: "center 55%",
    },
    points: [
      "Treadmills",
      "Cross trainers",
      "Rowing machines",
      "Spin bikes",
      "Ski erg",
    ],
  },
  {
    tag: "Upstairs",
    title: "Functional",
    image: {
      src: "/new_functional_2.jpeg",
      alt: "Functional area, upstairs",
      position: "center 55%",
    },
    points: [
      "Cable machine",
      "Kettlebells and hex dumbbells",
      "Additional benches",
      "Adjustable barbells",
      "Matted area for floor work and abs",
    ],
  },
];

export default function Inside() {
  return (
    <section className="section inside-section" id="inside">
      <div className="container inside-layout">
        <FadeInUp className="inside-heading">
          <div className="eyebrow">
            <span aria-hidden="true" />
            Inside
          </div>
          <h2>What&apos;s Inside</h2>
          <p className="section-lead">
            Weights downstairs. Cardio and functional training upstairs.
          </p>
        </FadeInUp>

        <div className="inside-rows">
          {zones.map((zone) => (
            <FadeInUp key={zone.title} className="inside-row">
              <div className="inside-photo">
                <Image
                  src={zone.image.src}
                  alt={zone.image.alt}
                  fill
                  style={{ objectPosition: zone.image.position }}
                  sizes="(max-width: 960px) calc(100vw - 48px), 600px"
                />
              </div>
              <div className="inside-body">
                <span className="inside-tag">{zone.tag}</span>
                <h3>{zone.title}</h3>
                <ul className="inside-points">
                  {zone.points.map((point) => (
                    <li key={point}>
                      <Icon className="line-icon" name="check" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
