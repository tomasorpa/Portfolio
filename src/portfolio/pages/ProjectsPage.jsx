import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Skill from "../../components/Skill";
import { useRevealUp } from "../../hooks/useRevealUp";
import { HeroProjects } from "../../components/projects/HeroProjects";
import { useLocation, useParams } from "react-router-dom";

 const ProjectsPage = () => {
  useRevealUp();
  const { idSlug } = useParams();
  return (
    <section className="section">
      <div className="container">
        <Header appPage={"Projects"} />
        <main>
          <HeroProjects idSlug={idSlug} />
          
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default ProjectsPage