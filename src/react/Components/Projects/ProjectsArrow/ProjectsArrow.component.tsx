import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
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
      <LazyLoad>
        <img
          className="arrowIcon"
          src={require("../../../../images/icons/arrowDown.svg")}
          alt=""
          onClick={goDown}
        />
      </LazyLoad>
    </div>
  );
}

export default ProjectsArrow;
