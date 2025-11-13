import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../portfolio/pages/HomePaGE";
import { lazy } from "react";
const ProjectsPage = lazy(() => import("../portfolio/pages/ProjectsPage"));
export const router = createBrowserRouter([
  {
    path: "/",

    element: <HomePage />,
  },
  {
    path: "project/:idSlug",
    element: <ProjectsPage />,
  },
]);
