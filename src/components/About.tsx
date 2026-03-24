"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";

const features = [
  {
    title: "Premium equipment",
    description:
      "Barbells, dumbbells up to 80kg, machines for every body part. Everything you need, nothing you don't.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12h1m3-4v8m0-8H5a1 1 0 00-1 1v6a1 1 0 001 1h2m0-8h2m0 0V7a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5m8 5V7m0 0h2a1 1 0 011 1v6a1 1 0 01-1 1h-2m0-8h-2m0 0v10m0-10V7m8 5h1"
        />
      </svg>
    ),
  },
  {
    title: "Everyone Welcome",
    description:
      "Men and women of all levels. Whether you're just starting out or competing, there's a spot for you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fuel Up On Site",
    description:
      "Protein shakes, pre-workout, and energy drinks available so you can stay fuelled.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Loud Music, Hard Work",
    description:
      "The music's up and people come to train. But stick around — this gym is about community.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M9 9H5a1 1 0 00-1 1v4a1 1 0 001 1h4l5 5V4L9 9z"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-secondary/20 py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
            What We&apos;re <span className="text-primary">About</span>
          </h2>
          <p className="text-tertiary text-center max-w-2xl mx-auto mb-12">
            Limitless Gym MK is built for anyone who wants to better themselves.
            No gimmicks, no distractions — just a proper environment to put in
            the work, surrounded by people who do the same.
          </p>
        </FadeInUp>

        {/* Dumbbell rack image */}
        <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden">
          <Image
            src="/dumbbells.jpg"
            alt="Dumbbell rack at Limitless Gym MK — dumbbells up to 80kg"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeInUp
              key={f.title}
              delay={i * 150}
              className="bg-neutral border border-secondary p-6 text-center hover:border-primary transition-colors"
            >
              <div className="text-primary flex justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading text-xl uppercase font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-tertiary text-sm">{f.description}</p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
