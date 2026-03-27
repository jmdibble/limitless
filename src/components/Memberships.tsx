const options = [
  { name: "Day Passes", from: "£10" },
  { name: "Monthly Memberships", from: "£45 per month" },
  { name: "Annual Memberships", from: "£30 per month" },
];

export default function Memberships() {
  return (
    <section className="bg-secondary/20 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-8">
          Train <span className="text-primary">Your Way</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {options.map((opt) => (
            <div key={opt.name} className="text-center">
              <span className="font-heading uppercase tracking-wider text-primary text-lg md:text-xl">
                {opt.name}
              </span>
              <p className="text-tertiary text-sm mt-1">from {opt.from}</p>
            </div>
          ))}
        </div>
        <p className="text-tertiary mt-8">
          Get in touch or pop in to find out more about our membership options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-heading uppercase tracking-wider px-8 py-3 text-lg transition-colors"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="border-2 border-tertiary hover:border-primary text-tertiary hover:text-primary font-heading uppercase tracking-wider px-8 py-3 text-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
