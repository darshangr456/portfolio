import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Education } from "../components/Education";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}
     
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <Education />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Fixed Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 sm:p-4 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  )
}
