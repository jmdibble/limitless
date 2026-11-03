"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";

const features = [
  {
    title: "Premium equipment",
    description:
      "Barbells, dumbbells up to 80kg, machines for every body part. Cardio floor and functional area upstairs.",
    icon: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  },
  {
    title: "Everyone welcome",
    description:
      "Men and women of all levels. Whether you're just starting out or competing, there's a spot for you.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5s5.7 2.1 6.5 5.5M17 14.5c2.3 0 4 1.6 4.5 4" />
        <circle cx="17" cy="9" r="2.5" />
      </>
    ),
  },
  {
    title: "Fuel up on site",
    description:
      "Protein shakes, pre-workout, and energy drinks available so you can stay fuelled.",
    icon: <path d="M7 3h10l-1.5 18h-7zM6.5 8h11" />,
  },
  {
    title: "Loud music, hard work",
    description:
      "The music's up and people come to train. This gym is about community and getting results.",
    icon: (
      <>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-copy">
          <div className="eyebrow">
            <span aria-hidden="true" />
            About
          </div>
          <h2>What We&apos;re About</h2>
          <p className="section-lead">
            Limitless Gym MK is built for anyone who wants to better themselves.
            A focused place to train without distractions. A proper environment
            to put in the work, surrounded by people who do the same.
          </p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <FadeInUp
                key={feature.title}
                delay={index * 70}
                className="feature-card"
              >
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{feature.icon}</svg>
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FadeInUp>
            ))}
          </div>
        </div>

        <div className="about-photo-grid">
          <figure className="about-photo-card">
            <Image
              className="about-photo-image"
              src="/new_weights_9.jpeg"
              alt="Weights area"
              fill
              sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 768px) calc(100vw - 48px), (max-width: 960px) 720px, 42vw"
            />
            <figcaption>Weights area</figcaption>
          </figure>
          <figure className="about-photo-card">
            <Image
              className="about-photo-image"
              src="/new_cardio_4.jpeg"
              alt="Cardio area"
              fill
              sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 768px) calc(100vw - 48px), (max-width: 960px) 720px, 42vw"
            />
            <figcaption>Cardio area</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
