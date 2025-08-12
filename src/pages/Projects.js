import React from "react";
import "../styles/Project.css"; // Import the CSS
import todoImage from "../assets/todo.webp";
import portfolio from "../assets/portfolio.jpg";
import finance from "../assets/Images/finance.jpeg";

const projectData = [
  {
    title: "Todo App",
    image: todoImage,
    link: "https://todo-app-psi-coral.vercel.app/",
  },
  {
    title: "My Portfolio",
    image: portfolio,
    link: "https://my-portfolio-surajudeenadegoke.vercel.app/education",
  },
  {
    title: "Finance Logger",
    image: finance,
    link: "https://finance-logger-sooty.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
