import React, { useState } from "react";

export const FilterSidebar = () => {
  const [showFilters, setShowFilters] = useState(false);
    const [projectInput, setProjectInput] = useState();
    
    

  return (
    <>
      {/* MOBILE BUTTON */}
      <div className="lg:hidden mb-4">
        {/* <button
          onClick={() => setShowFilters(true)}
          className="px-4 py-2 rounded-lg bg-purple-400 text-zinc-50 font-medium w-full"
        >
          Filters
        </button> */}

        <button
          onClick={() => setShowFilters(true)}
          className="btn-primary text-sm  font-semibold text-white flex items-center rounded-lg px-2 gap-2"
        >
          <svg
            className="w-4 h-4 text-zinc-950"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter By
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/70 z-50 lg:hidden flex">
          <div className="bg-zinc-900 w-80 max-w-full p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-zinc-50">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-zinc-400 hover:text-zinc-50"
              >
                ✕
              </button>
            </div>

            {/* Sidebar Content */}
            <SidebarContent />
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setShowFilters(false)}></div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

/* ✅ Sidebar UI extraído en un mini-componente */
const SidebarContent = () => (
  <>
    {/* Search */}
    <div>
      <label className="text-sm font-semibold text-zinc-50 mb-3 block">
        Search
      </label>
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-50 placeholder:text-zinc-500"
      />
    </div>

    {/* Filter Type Toggle */}
    <div>
      <label className="text-sm font-semibold text-zinc-50 mb-3 block items-center gap-2">
        <svg
          className="w-4 h-4 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        Filter By
      </label>
      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-purple-400 text-zinc-50 hover:bg-purple-700">
          Tech Stack
        </button>
        <button className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-50">
          Functionality
        </button>
      </div>
    </div>

    {/* Tech Stack Filters */}
    <div>
      <h3 className="text-sm font-semibold text-zinc-50 mb-3">Technologies</h3>
      <div className="space-y-2">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "Firebase",
          "Tailwind CSS",
        ].map((tech) => (
          <label
            key={tech}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded-full appearance-none 
              bg-transparent border border-zinc-500 
              cursor-pointer accent-purple-600 checked:bg-purple-400"
            />
            <span className="text-sm text-zinc-400 group-hover:text-zinc-50 transition-colors">
              {tech}
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* Results Count */}
    <div className="pt-4 border-t border-zinc-800">
      <p className="text-sm text-zinc-400">
        <span className="font-semibold text-zinc-50">6</span> projects found
      </p>
    </div>
  </>
);
