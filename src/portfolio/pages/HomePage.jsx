import App from "../../App";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skill from "../../components/Skill";
import Project from "../../components/Project";
import Certification from "../../components/Certification";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { ReactLenis } from "lenis/dist/lenis-react.mjs";
import { useRevealUp } from "../../hooks/useRevealUp";

export const HomePage = () => {
  useRevealUp()
  return (
    <>
      <ReactLenis root>
        <Header appPage={"Home"} />
        <main>
          <Hero />
          <About />
          <Skill />
          <Project />
          <Certification />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};
