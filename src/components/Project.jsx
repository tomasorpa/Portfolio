import { useSearchParams } from "react-router-dom";
import { Pagination } from "./Pagination";
import { filteredProjectItems } from "../data";
import { ProjectCard } from "../portfolio/components/ProjectCard";
import { FilterSidebar } from "../portfolio/components/FilterSidebar";

const Project = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const { projectItems } = filteredProjectItems(2, page);

  console.log(projectItems);
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-10 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(340px,1fr))] mb-10">
          {projectItems.map(
            (
              { imgSrc, title, tags, projectLink, description, idSlug },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                description={description}
                idSlug={idSlug}
                classes="reveal-up"
              />
            )
          )}
        </div>
        <Pagination limit={3} totalPages={3} />
      </div>
    </section>
  );
};

export default Project;
