import React from "react";
import "../styles/Project.css"; // Import the CSS

const projectData = [
  {
    title: "Todo App",
    image: "href=https://www.flaticon.com/free-icons/to-do" ,
    link: "https://todo-app-psi-coral.vercel.app/",
  },
  {
    title: "My Portfolio",
    image: "/images/weather.png",
    link: "https://my-portfolio-surajudeenadegoke.vercel.app/education",
  },
  {
    title: "Blog Platform",
    image: "/images/blog.png",
    link: "https://blog-suraj.vercel.app",
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
