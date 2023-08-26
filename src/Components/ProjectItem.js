import React from "react";

const ProjectItem = ({ name, image }) => {
  return (
    <div className="projectItem">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default ProjectItem;
