"use client";

import FadeInUp from "./FadeInUp";

const reviews = [
  {
    name: "Jake M.",
    text: "Best gym in the area by a mile. Proper equipment, no waiting around, and the atmosphere is unmatched. If you're serious about training, this is the place.",
    rating: 5,
  },
  {
    name: "Sophie R.",
    text: "I was nervous joining as a beginner but everyone here is so welcoming. The owners genuinely care and the community keeps me coming back every day.",
    rating: 5,
  },
  {
    name: "Dan T.",
    text: "Dumbbells up to 80kg, machines for everything, and music that actually gets you going. No fancy nonsense — just a proper gym. Wouldn't train anywhere else.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-tertiary text-center max-w-2xl mx-auto mb-12">
            Don&apos;t just take our word for it.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeInUp
              key={r.name}
              delay={i * 150}
              className="bg-neutral-950/90 border-2 border-secondary border-t-primary rounded-md p-6 text-center"
            >
              <Stars count={r.rating} />
              <p className="text-tertiary text-sm italic leading-relaxed mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <span className="font-heading uppercase tracking-wider text-white text-sm">
                {r.name}
              </span>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
