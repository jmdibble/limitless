"use client";

import { useState } from "react";
import FadeInUp from "./FadeInUp";

const faqs = [
  {
    q: "Do I need to book before visiting?",
    a: "No booking needed, just turn up during opening hours. If it's your first time, pop in and we'll show you around. If you want to try before you buy, grab a day pass and see if the gym is right for you.",
  },
  {
    q: "Is the gym suitable for beginners?",
    a: "Absolutely. We welcome all levels, from complete beginners to competitive bodybuilders. Everyone starts somewhere.",
  },
  {
    q: "Is there a contract on memberships?",
    a: "Monthly memberships roll on a month-to-month basis — no lock-in, cancel anytime. Annual memberships are at a discounted rate with a 12-month commitment.",
  },
  {
    q: "Can I try before I join?",
    a: "Yes — grab a day pass and see if the gym is right for you. No pressure.",
  },
  {
    q: "Is there parking?",
    a: "Yes, free parking right outside the door.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes, 1-to-1 personal training is available. Get in touch for more details and to book sessions.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeInUp delay={delay}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left border-b border-secondary py-5 group"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading uppercase tracking-wider text-lg text-white group-hover:text-primary transition-colors">
            {q}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 mt-3" : "max-h-0"}`}
        >
          <p className="text-tertiary text-sm leading-relaxed">{a}</p>
        </div>
      </button>
    </FadeInUp>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-12">
            Common <span className="text-primary">Questions</span>
          </h2>
        </FadeInUp>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
