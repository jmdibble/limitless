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
    a: "Yes. Grab a day pass and see if the gym is right for you. No pressure.",
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
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <div className="eyebrow"><span aria-hidden="true" />FAQ</div>
          <h2>Common Questions</h2>
          <a className="button button-outline" href="#contact">Get in Touch</a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="faq-item" open={index === 0}>
              <summary><span>{faq.q}</span><PlusIcon /></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
