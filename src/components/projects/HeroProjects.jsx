import React from "react";
import { everyProjectItems } from "../../data";

export const HeroProjects = ({ idSlug }) => {
  const getProjectInfo = () => {
    const project = everyProjectItems.find(
      (project) => project.idSlug === idSlug
    );
    return project;
  };
  const project = getProjectInfo();

  //   {
  //     imgSrc: "/images/expensetracker.png",
  //     title: "Expense Tracker",
  //     tags: ["MongoDb", "Express", "React", "Node.js"],
  //     idSlug:"expense-tracker",
  //     description:
  //       "Developed a full-featured Expense Tracker application with an intuitive user interface and robust backend integration. Implemented real-time expense management, user authentication, and reliable data persistence.",
  //     projectLink: "https://expense-tracker-backend-kohl-ten.vercel.app/login",
  //   },
  console.log(project);
  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imgSrc} alt={project.title} />
    </div>
  );
};
