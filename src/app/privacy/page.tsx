import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ADDRESS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Limitless Gym MK",
  description:
    "How Limitless Gym MK Ltd collects, uses and protects personal data via this website.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "3 November 2026";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 pb-24 pt-36 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow">
            <span aria-hidden="true" />
            Legal
          </div>
          <h1 className="mt-5 font-heading text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mb-14 mt-5 text-sm text-tertiary">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-12 text-base leading-relaxed text-copy-muted [&_strong]:font-semibold [&_strong]:text-white">
            <section className="space-y-4">
              <p>
                This privacy policy explains how Limitless Gym MK Ltd
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects
                and uses personal data through this website
                (www.limitless-gym-mk.com). It does not cover the personal data
                we process as a gym operator in connection with memberships,
                CCTV or on-site activities. That is handled separately at the
                gym.
              </p>
              <p>
                We are the data controller for the information described below.
                You can contact us using the details at the end of this policy.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Who we are</Heading>
              <p>
                Limitless Gym MK Ltd, a company registered in England and Wales
                (company number 16947334). Our gym is located at{" "}
                {ADDRESS.streetAddress}, {ADDRESS.locality}, {ADDRESS.region},{" "}
                {ADDRESS.postalCode}.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>What data we collect via this website</Heading>
              <p>
                This website is a simple marketing page. We do not run contact
                forms, accounts or payments on this site. The personal data
                involved is limited to:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-primary-text">
                <li>
                  <strong>Technical data</strong> automatically logged when your
                  browser connects to the site (IP address, device type,
                  browser, referring page). This is standard for any website.
                </li>
                <li>
                  <strong>Anonymous usage analytics</strong> via Vercel
                  Analytics and Vercel Speed Insights, which measure page views
                  and performance. These tools are cookieless and do not
                  fingerprint or personally identify visitors.
                </li>
                <li>
                  <strong>Map data</strong>{" "}
                  when the embedded Google Map in the contact section loads.
                  Your browser connects to Google, which receives your IP
                  address and browser details (see &ldquo;Third parties&rdquo;
                  below).
                </li>
                <li>
                  <strong>Contact details you choose to share</strong> if you
                  call or message us via the links on this site (for example,
                  WhatsApp, Instagram or Facebook).
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <Heading>How we use your data</Heading>
              <ul className="list-disc space-y-2 pl-6 marker:text-primary-text">
                <li>To operate and secure the website.</li>
                <li>
                  To understand how visitors find and use the site, so we can
                  improve it.
                </li>
                <li>To respond to you when you get in touch.</li>
              </ul>
              <p>
                Our lawful basis is our legitimate interest in running and
                improving a simple marketing website. Where you contact us, we
                take steps at your request before entering into a contract.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Cookies</Heading>
              <p>
                This website uses only essential cookies and similar storage
                required to make it work (for example, remembering that you
                dismissed the cookie notice). We do not use advertising or
                tracking cookies, and our analytics provider (Vercel) is
                cookieless by design. You will see a short notice about this
                when you first visit.
              </p>
              <p>
                The embedded Google Map is third-party content. Google may set
                cookies or use similar technologies when it loads, under its own
                policies, which we do not control.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Third parties</Heading>
              <p>
                The website is hosted by Vercel Inc., which processes technical
                data and analytics on our behalf. The map in the contact
                section is provided by Google Maps, so loading it sends your IP
                address and browser details to Google. If you follow a link to
                our membership signup (Clubwise), WhatsApp, Instagram, Facebook
                or Google Maps directions, those third parties will process your
                data under their own privacy policies.
              </p>
              <p>
                We do not sell personal data, and we do not share it with third
                parties for marketing.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>How long we keep data</Heading>
              <p>
                Server logs and analytics data are retained only for as long as
                our hosting and analytics providers retain them for their own
                operational and security purposes. If you contact us, we keep
                that correspondence for as long as needed to answer your
                enquiry and for a reasonable period afterwards.
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Your rights</Heading>
              <p>
                Under UK data protection law you have rights to access, correct,
                delete, restrict and object to our processing of your personal
                data, and to data portability. To exercise any of these rights,
                contact us using the details below.
              </p>
              <p>
                If you believe we have not handled your personal data properly,
                you can complain to the Information Commissioner&rsquo;s Office
                (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-primary-text hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Contact</Heading>
              <p>
                Limitless Gym MK Ltd
                <br />
                {ADDRESS.streetAddress}
                <br />
                {ADDRESS.locality}, {ADDRESS.region}, {ADDRESS.postalCode}
                <br />
                United Kingdom
              </p>
            </section>

            <section className="space-y-4">
              <Heading>Changes to this policy</Heading>
              <p>
                We may update this policy from time to time. The &ldquo;last
                updated&rdquo; date at the top of the page will always show
                when it last changed.
              </p>
            </section>

            <div className="pt-4">
              <Link href="/" className="button button-outline">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
