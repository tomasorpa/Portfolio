import { Link, useParams } from "react-router-dom";
import { useProject } from "./hooks/useProject";
import ScrollToTop from "../../components/ScrollToTop";

const ProjectPage = () => {
  const { idSlug } = useParams();
  const { project } = useProject(idSlug);
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-50">
      <ScrollToTop/>
      {/* Back Button */}
      <div className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-purple-600"></div>
                <span className="inline-flex items-center rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  Full Stack Developer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-3 text-balance">
                {project.title}
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl">
                {project.description}
              </p>
            </div>
            <svg
              className="w-8 h-8 text-purple-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-zinc-800 border border-zinc-700">
            <div>
              <p className="text-xs text-zinc-400 mb-1">Timeline</p>
              <p className="text-sm font-semibold text-zinc-50">
                {project.timeline}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-1">Role</p>
              <p className="text-sm font-semibold text-zinc-50">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-1">Status</p>
              <p className="text-sm font-semibold text-green-400">
                {project.status}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-1">Category</p>
              <p className="text-sm font-semibold text-zinc-50">
                {project.category}
              </p>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-xl overflow-hidden border border-zinc-700 h-96 md:h-[500px]">
          <img
            src={project.imgSrc}
            alt={project.idSlug}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">
                Key Features
              </h2>
              <div className="space-y-3">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4 ">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-zinc-50 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">
                Technical Challenges
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-zinc-800 border border-zinc-700">
                  <p className="text-zinc-50">{project.technicalChallenges}</p>
                </div>
              </div>
            </div>

            {/* Results */}
            {/* <div className="p-6 rounded-lg bg-gradient-to-br from-purple-600/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">
                Results & Impact
              </h3>
              <p className="text-zinc-50">
                Impact and results of the project go here
              </p>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Tech Stack */}
              <div className="p-6 rounded-lg bg-zinc-800 border border-zinc-700">
                <h3 className="text-sm font-semibold text-zinc-50 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((project, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-purple-600/20 px-2.5 py-0.5 text-xs font-medium text-purple-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functionality */}
              <div className="p-6 rounded-lg bg-zinc-800 border border-zinc-700">
                <h3 className="text-sm font-semibold text-zinc-50 mb-4">
                  Functionality
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-600/20 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                    Analytics
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-600/20 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                    Dashboard
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-600/20 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                    Auth
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 flex flex-col gap-2">
                <Link
                  to={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live
                  </button>
                </Link>
                <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-4 py-2 rounded-lg bg-transparent border border-zinc-700 hover:bg-zinc-800 text-zinc-50 font-medium text-sm transition-colors flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-zinc-800 pt-12">
          <Link to="/">
            <button className="px-4 py-2 rounded-lg bg-transparent border border-zinc-700 hover:bg-zinc-800 text-zinc-50 font-medium text-sm transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Projects
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default ProjectPage