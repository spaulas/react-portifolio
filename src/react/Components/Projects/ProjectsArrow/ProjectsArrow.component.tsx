import { FormattedMessage } from "react-intl";
import React from "react";

function ProjectsArrow() {
  const goDown = () => {
    const innerHeight = window.innerHeight;
    window.scroll(0, innerHeight);
  };

  return (
    <div className="projectsArrow">
      <span className="arrowTitle">
        <FormattedMessage id="project.arrow" />
      </span>
      <img
        tabIndex={0}
        role="button"
        className="arrowIcon"
        src={require("../../../../images/icons/arrowDown.svg")}
        alt=""
        onClick={goDown}
      />
    </div>
  );
}

export default ProjectsArrow;
