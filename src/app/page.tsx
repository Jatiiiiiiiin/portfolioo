import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WhyChooseMe from "@/components/WhyChooseMe";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Skills />
      <Experience />
      <WhyChooseMe />
      <Certifications />
      <FAQ />
      <Footer />
    </main>
  );
}
