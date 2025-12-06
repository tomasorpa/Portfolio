import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({
  idSlug,
  description,
  imgSrc,
  projectLink,
  tags,
  title,
}) => {
  return (
    <div className="group h-full rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer">
      {/* ✅ Toda la tarjeta lleva al proyecto */}
      <Link to={`/project/${idSlug}`} className="block ">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/20">
          <img
            src={imgSrc}
            alt={idSlug}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-purple-400 px-3 py-1 text-xs font-medium text-white">
              Featured
            </span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-zinc-50 group-hover:text-purple-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* ✅ Link separado al demo / live project */}
      <div className="px-5 pb-5 ">
        <button className="btn-primary  rounded-lg px-3 ">
          <Link
            to={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:gap-3 transition-all"
            onClick={(e) => e.stopPropagation()} // ✅ evita que haga click al card principal
          >
            <span className="text-sm font-medium">View Live</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};
