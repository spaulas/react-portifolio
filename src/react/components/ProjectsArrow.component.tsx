import React from "react";

function ProjectsArrow() {
  const goDown = () => {
    console.log("add functionality");
  };

  return (
    <div className="projectsArrow">
      <span className="arrowTitle">Projects</span>
      <img
        className="arrowIcon"
        src={require("../../images/icons/arrowDown.svg")}
        alt=""
        onClick={goDown}
      />
    </div>
  );
}

export default ProjectsArrow;
