import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from './components/skillSection';
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default page
