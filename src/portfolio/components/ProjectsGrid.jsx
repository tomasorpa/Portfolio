import React from "react";
import { everyProjectItems, filteredProjectItems } from "../../data";
import { ProjectCard } from "./ProjectCard";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination";

export const ProjectsGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page=searchParams.get("page")
  const {projectItems}=filteredProjectItems(4,page)
  return (
    <div className="lg:col-span-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projectItems.map(
          ({ idSlug, description, imgSrc, projectLink, tags, title }) => {
            return (
              <ProjectCard
                key={idSlug}
                idSlug={idSlug}
                description={description}
                imgSrc={imgSrc}
                projectLink={projectLink}
                tags={tags}
                title={title}
              />
            );
          }
        )}
      </div>
        <div className="flex my-4 justify-center">

        <Pagination totalPages={2} />
        </div>
    </div>
  );
};
