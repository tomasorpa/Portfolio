import { projectItems } from "../data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-10 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]">
          {projectItems.map(
            ({ imgSrc, title, tags, projectLink, description }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                description={description}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
