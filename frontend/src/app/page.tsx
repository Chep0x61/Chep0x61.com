import Preloader from "@/components/preloader/preloader";
import FixedElements from "@/components/FixedElements";
import Hero from "@/pages/Hero";
import AboutMe from "@/pages/AboutMe";
import Educational from "@/pages/Educational";
import Professional from "@/pages/Professional";
import Certifications from "@/pages/Certifications";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

const Home = () => {
  return (
    <div className="w-full h-full">
        <Preloader />
        <FixedElements />
        <Hero />
        <AboutMe />
        <Educational />
        <Professional />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home;