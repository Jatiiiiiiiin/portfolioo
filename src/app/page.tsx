import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 
        The ScrollyCanvas component contains a 500vh container.
        The Overlay sits on top as a fixed element linked to scroll.
      */}
      <div className="relative z-20">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <div className="relative z-30">
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
