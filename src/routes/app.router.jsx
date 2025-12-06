import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../portfolio/pages/HomePaGE";
import { lazy, Suspense } from "react";

const ProjectPage = lazy(() => import("../portfolio/pages/ProjectPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "project/:idSlug",
    element: (
      <Suspense
        fallback={
          <div className="p-10 text-white w-10 h-10 border-primary animate-spin border-b-0"></div>
        }
      >
        <ProjectPage />
      </Suspense>
    ),
  },
]);
