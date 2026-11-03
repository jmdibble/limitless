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
        alt: "Dumbbell rack",
        caption: "Dumbbell rack",
        featured: true,
        bento: true,
      },
      {
        src: "/new_weights_5.jpeg",
        alt: "Power rack and platform",
        caption: "Power rack / platform",
        bento: true,
      },
      {
        src: "/new_weights_3.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
        bento: true,
      },
      {
        src: "/new_weights_1.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
      },
      {
        src: "/new_weights_2.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
      },
      {
        src: "/new_weights_4.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
      },
      {
        src: "/new_weights_6.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
      },
      {
        src: "/new_weights_7.jpeg",
        alt: "Smith machine",
        caption: "Smith machine",
      },
      {
        src: "/new_weights_8.jpeg",
        alt: "Weights floor",
        caption: "Weights floor",
      },
    ],
  },
  {
    title: "Upstairs",
    label: "Cardio & functional",
    images: [
      {
        src: "/new_cardio_4.jpeg",
        alt: "Cardio floor",
        caption: "Cardio floor",
        featured: true,
        bento: true,
      },
      {
        src: "/new_cardio_3.jpeg",
        alt: "Spin bikes",
        caption: "Spin bikes",
        bento: true,
      },
      {
        src: "/new_functional_2.jpeg",
        alt: "Functional area",
        caption: "Functional area",
        bento: true,
      },
      {
        src: "/new_functional_1.jpeg",
        alt: "Functional cable machine",
        caption: "Functional cable machine",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container gallery-layout">
        <FadeInUp className="gallery-title">
          <div className="eyebrow">
            <span aria-hidden="true" />
            Gallery
          </div>
          <h2>A Closer Look</h2>
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
                              ? "(max-width: 560px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 48px), 45vw"
                              : "(max-width: 560px) calc((100vw - 52px) / 2), (max-width: 1024px) calc((100vw - 64px) / 2), 21vw"
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
