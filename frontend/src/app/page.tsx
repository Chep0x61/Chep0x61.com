import Hero from "@/components/Hero";
import FixedElements from "@/components/FixedElements";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <FixedElements />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home;