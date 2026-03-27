import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Memberships from "@/components/Memberships";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Memberships />
      {/* <Testimonials /> */}
      <FAQ />
      <Details />
      <Footer />
    </main>
  );
}
