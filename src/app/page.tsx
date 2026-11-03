import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Inside from "@/components/Inside";
import Gallery from "@/components/Gallery";
import Memberships from "@/components/Memberships";
import FAQ from "@/components/FAQ";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Welcome />
      <Inside />
      <Gallery />
      <Memberships />
      <FAQ />
      <Details />
      <Footer />
    </main>
  );
}
