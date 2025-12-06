import { useParams } from "react-router-dom";
import { everyProjectItems } from "../../../data";

export const useProject = (idSlug) => {
  const project = everyProjectItems.find(
    (project) => project.idSlug === idSlug
  );
  return {project};
};
