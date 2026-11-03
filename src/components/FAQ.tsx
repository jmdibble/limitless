"use client";

import { useId, useState } from "react";

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
    a: "Monthly memberships roll on a month-to-month basis, with no lock-in. Cancel anytime. Annual memberships are at a discounted rate with a 12-month commitment.",
  },
  {
    q: "Can I try before I join?",
    a: "Yes. Grab a day pass at the front desk and see if the gym is right for you. No pressure. No booking required.",
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

function PlusIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>;
}

export default function FAQ() {
  // One panel open at a time; null = all closed. First question starts open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <div className="eyebrow"><span aria-hidden="true" />FAQ</div>
          <h2>Common Questions</h2>
          <a className="button button-outline" href="#contact">Get in Touch</a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `${baseId}-q${index}`;
            const panelId = `${baseId}-a${index}`;
            return (
              <div key={faq.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <PlusIcon />
                  </button>
                </h3>
                {/* Answers stay in the DOM (crawlable); visibility hides closed ones from tab/AT */}
                <div className="faq-panel" id={panelId} role="region" aria-labelledby={questionId}>
                  <div className="faq-panel-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
