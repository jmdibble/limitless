const JOIN_URL =
  "https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA";

const options = [
  { name: "Day Passes", price: "£10", suffix: "", action: "Get in Touch", href: "#contact", tone: "subtle" },
  { name: "Monthly Memberships", price: "£45", suffix: "per month", action: "Join Now", href: JOIN_URL, tone: "light" },
  { name: "Annual Memberships", price: "£30", suffix: "per month", action: "Join Now", href: JOIN_URL, tone: "primary", featured: true },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}

export default function Memberships() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container pricing-layout">
        <div className="section-heading centered-heading">
          <div className="eyebrow eyebrow-centered"><span aria-hidden="true" />Pricing<span aria-hidden="true" /></div>
          <h2>Train Your Way</h2>
          <p>Get in touch or pop in to find out more about our membership options.</p>
        </div>

        <div className="pricing-grid">
          {options.map((option) => (
            <article className={`price-card ${option.featured ? "price-card-featured" : ""}`} key={option.name}>
              {option.featured && <span className="value-tag">Best value</span>}
              <div className="price-card-top">
                <h3>{option.name}</h3>
                <p className="price-line"><span>from</span><strong>{option.price}</strong>{option.suffix && <span>{option.suffix}</span>}</p>
              </div>
              <a className={`button ${option.tone === "primary" ? "button-primary" : option.tone === "light" ? "button-light" : "button-outline"}`} href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {option.action}{option.tone === "primary" && <ArrowIcon />}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
