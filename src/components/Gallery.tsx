"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";
import Lightbox from "./Lightbox";

const galleries = [
  {
    title: "Downstairs",
    label: "Weights floor",
    images: [
      {
        src: "/new_weights_9.jpeg",
        alt: "Dumbbell rack and benches on the weights floor",
        caption: "Dumbbell rack",
        featured: true,
        bento: true,
      },
      {
        src: "/new_weights_5.jpeg",
        alt: "Training floor with a power rack and plate-loaded machines",
        caption: "Training floor",
        bento: true,
      },
      {
        src: "/new_weights_3.jpeg",
        alt: "Plate-loaded machines on the weights floor",
        caption: "Plate-loaded machines",
        bento: true,
      },
      {
        src: "/new_weights_1.jpeg",
        alt: "Plate-loaded equipment on the weights floor",
        caption: "Weights floor",
      },
      {
        src: "/new_weights_2.jpeg",
        alt: "Strength training machines at Limitless Gym MK",
        caption: "Strength equipment",
      },
      {
        src: "/new_weights_4.jpeg",
        alt: "Training equipment on the downstairs weights floor",
        caption: "Training floor",
      },
      {
        src: "/new_weights_6.jpeg",
        alt: "Free weights and plate-loaded machines",
        caption: "Free weights",
      },
      {
        src: "/new_weights_7.jpeg",
        alt: "Downstairs gym floor at Limitless Gym MK",
        caption: "Downstairs gym floor",
      },
      {
        src: "/new_weights_8.jpeg",
        alt: "Equipment on the downstairs gym floor",
        caption: "Gym equipment",
      },
    ],
  },
  {
    title: "Upstairs",
    label: "Cardio area",
    images: [
      {
        src: "/new_cardio_4.jpeg",
        alt: "Upstairs cardio area with treadmills, bikes and cross trainers",
        caption: "Cardio floor",
        featured: true,
        bento: true,
      },
      {
        src: "/new_cardio_3.jpeg",
        alt: "Spin bikes in the upstairs cardio area",
        caption: "Spin bikes",
        bento: true,
      },
      {
        src: "/new_cardio_2.jpeg",
        alt: "Cardio equipment and benches upstairs",
        caption: "More room to move",
        bento: true,
      },
      {
        src: "/new_cardio_1.jpeg",
        alt: "Cardio equipment in the upstairs training area",
        caption: "Upstairs cardio",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container gallery-layout">
        <FadeInUp className="gallery-heading">
          <div className="gallery-title">
            <div className="eyebrow">
              <span aria-hidden="true" />
              Gallery
            </div>
            <h2>Gallery</h2>
          </div>
          <div className="gallery-copy">
            <p>
              Downstairs is kitted out with plate-loaded machines for every body
              part. Chest, back, shoulders, legs and arms.
            </p>
            <p>
              Upstairs has a full cardio suite and functional training area,
              including additional hex dumbbells and floor mats.
            </p>
          </div>
        </FadeInUp>

        <div className="gallery-groups">
          {galleries.map((gallery) => (
            <FadeInUp className="gallery-group" key={gallery.title}>
              <div className="gallery-group-heading">
                <span>{gallery.label}</span>
                <h3>{gallery.title}</h3>
              </div>
              <Lightbox images={gallery.images}>
                {(openAt) => (
                  <div className="gallery-bento">
                    {gallery.images.map((image, index) => image.bento && (
                      <button
                        className={`gallery-bento-item ${image.featured ? "gallery-bento-main" : ""}`}
                        key={image.src}
                        type="button"
                        onClick={() => openAt(index)}
                        aria-label={`View ${image.caption}. Browse all ${gallery.images.length} ${gallery.label.toLowerCase()} photos.`}
                      >
                        <Image
                          className="gallery-bento-image"
                          src={image.src}
                          alt={image.alt}
                          fill
                          quality={85}
                          sizes={
                            image.featured
                              ? "(max-width: 560px) calc(100vw - 40px), (max-width: 960px) calc(100vw - 48px), 45vw"
                              : "(max-width: 560px) calc((100vw - 52px) / 2), (max-width: 960px) calc((100vw - 64px) / 2), 21vw"
                          }
                        />
                        <span className="gallery-bento-caption">{image.caption}</span>
                      </button>
                    ))}
                  </div>
                )}
              </Lightbox>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
