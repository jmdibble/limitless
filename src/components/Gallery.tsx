"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";

const images = [
  {
    src: "/grid_1.png",
    alt: "Inside Limitless Gym MK",
    caption: "The main floor",
  },
  {
    src: "/grid_2.png",
    alt: "Training at Limitless Gym MK",
    caption: "Benches and Smith Machine",
  },
  {
    src: "/grid_3.png",
    alt: "Equipment at Limitless Gym MK",
    caption: "Overview",
  },
  {
    src: "/grid_4.png",
    alt: "Limitless Gym MK floor",
    caption: "Dumbbell rack",
  },
];

const gridStyles = ["col-span-2 row-span-2", "", "", "col-span-2"];

export default function Gallery() {
  return (
    <section className="bg-neutral py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Lightbox images={images}>
          {(openAt) => (
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 h-[500px] md:h-[600px]">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => openAt(i)}
                  className={`group relative overflow-hidden cursor-pointer ${gridStyles[i]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-heading text-sm uppercase tracking-wider text-white">
                      {img.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </Lightbox>

        <div className="mt-16 border-t border-secondary pt-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <p className="text-tertiary text-lg md:text-xl text-center md:text-left md:flex-1">
            Multiple plate-loaded machines for every body part — chest, back,
            shoulders, legs, arms.
          </p>
          <div className="hidden md:block w-px h-16 bg-secondary" />
          <p className="text-center md:text-left md:flex-1">
            <span className="text-tertiary text-lg md:text-xl">
              1-to-1 personal training available. We can help get you started,
              or take your training to the next level.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
