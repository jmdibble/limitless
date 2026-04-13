import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Limitless Gym MK",
  description:
    "How Limitless Gym MK Ltd collects, uses and protects personal data via this website.",
  alternates: {
    canonical: "https://www.limitless-gym-mk.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "13 April 2026";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-neutral pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading uppercase tracking-wider text-4xl sm:text-5xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-tertiary text-sm mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-10 text-white/90 leading-relaxed">
            <section className="space-y-3">
              <p>
                This privacy policy explains how Limitless Gym MK Ltd
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects
                and uses personal data through this website
                (www.limitless-gym-mk.com). It does not cover the personal data
                we process as a gym operator in connection with memberships,
                CCTV or on-site activities — that is handled separately at the
                gym.
              </p>
              <p>
                We are the data controller for the information described below.
                You can contact us using the details at the end of this policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Who we are
              </h2>
              <p>
                Limitless Gym MK Ltd, a company registered in England and Wales
                (company number 16947334). Our gym is located at Unit 2, The
                Homestead, Watling Street, Paulerspury, Northants, NN12 6LH.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                What data we collect via this website
              </h2>
              <p>
                This website is a simple marketing page. We do not run contact
                forms, accounts or payments on this site. The personal data
                involved is limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
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
                  <strong>Contact details you choose to share</strong> if you
                  email, call or message us via the links on this site (for
                  example, Instagram or Facebook).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                How we use your data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate and secure the website.</li>
                <li>
                  To understand how visitors find and use the site, so we can
                  improve it.
                </li>
                <li>To respond to you when you get in touch.</li>
              </ul>
              <p>
                Our lawful basis is our legitimate interest in running and
                improving a simple marketing website, and — where you contact
                us — taking steps at your request before entering into a
                contract.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Cookies
              </h2>
              <p>
                This website uses only essential cookies required to make it
                work. We do not use advertising or tracking cookies. Our
                analytics provider (Vercel) is cookieless by design. You will
                see a short notice about this when you first visit.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Third parties
              </h2>
              <p>
                The website is hosted by Vercel Inc., which processes technical
                data and analytics on our behalf. We also load fonts from
                Google Fonts, which may involve your browser contacting
                Google&rsquo;s servers. If you follow a link to our membership
                signup (Clubwise), Instagram, Facebook or Google Maps, those
                third parties will process your data under their own privacy
                policies.
              </p>
              <p>
                We do not sell personal data, and we do not share it with third
                parties for marketing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                How long we keep data
              </h2>
              <p>
                Server logs and analytics data are retained only for as long as
                our hosting and analytics providers retain them for their own
                operational and security purposes. If you contact us, we keep
                that correspondence for as long as needed to answer your
                enquiry and for a reasonable period afterwards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Your rights
              </h2>
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
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Contact
              </h2>
              <p>
                Limitless Gym MK Ltd
                <br />
                Unit 2, The Homestead, Watling Street
                <br />
                Paulerspury, Northants, NN12 6LH
                <br />
                United Kingdom
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading uppercase tracking-wider text-2xl text-white">
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. The &ldquo;last
                updated&rdquo; date at the top of the page will always show
                when it last changed.
              </p>
            </section>

            <div className="pt-6">
              <Link
                href="/"
                className="font-heading uppercase tracking-wider text-sm text-primary hover:underline"
              >
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
