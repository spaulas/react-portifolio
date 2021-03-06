/* eslint-disable react/forbid-dom-props */
import React, { memo, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import ProjectContainer from "../../Components/Projects/ProjectContainer/ProjectContainer.component";
import { RootReducerState } from "../../../global";
import { useSelector } from "react-redux";

function ProjectsPage() {
  const { theme } = useSelector(({ Website }: RootReducerState) => ({
    theme: Website.theme
  }));

  const [projectsInfo, setProjectsInfo] = useState([
    {
      rendered: false,
      title: "React Solitaire",
      description: (
        <FormattedMessage
          id="project.reactSolitaire.description"
          defaultMessage="Project Description"
        />
      ),
      techs: [
        { source: "html.png", title: "HTML" },
        { source: "css.png", title: "CSS" },
        { source: "javascript.png", title: "Javascript" },
        { source: "typescript.png", title: "Typescript" },
        { source: "react.png", title: "React" },
        { source: "redux.svg", title: "Redux" },
        { source: "antd.svg", title: "Antd" },
        { source: "less.png", title: "less" },
        { source: "firebase.png", title: "Firebase" }
      ],
      link: "https://spaulas.github.io/react-solitaire/#/",
      github: "https://github.com/spaulas/react-solitaire",
      mainImage: "reactSolitaire_main.png",
      sideImage: "reactSolitaire_side.png"
    },
    {
      rendered: false,
      title: "PHP Social Network",
      description: (
        <FormattedMessage
          id="project.phpSocialNetwork.description"
          defaultMessage="Project Description"
        />
      ),
      techs: [
        { source: "php.png", title: "PHP" },
        { source: "mySQL.png", title: "MySQL" },
        { source: "css.png", title: "CSS" },
        { source: "javascript.png", title: "Javascript" }
      ],
      link: "https://php-social-network.herokuapp.com/",
      github: "https://github.com/spaulas/php-social-network",
      mainImage: "phpSocialNetwork_main.png",
      sideImage: "phpSocialNetwork_side.png"
    }
  ]);

  const shouldRender = () => {
    const windowHeight = (window.innerHeight * 2) / (projectsInfo.length + 1);
    const pageYOffset = window.pageYOffset;
    // if the first project is not rendered yet
    // and the page y offset has reached the half of the project page

    const copyProjectInfo = [...projectsInfo];

    projectsInfo.forEach((project, index) => {
      if (!project.rendered && pageYOffset > windowHeight * (index + 1.2)) {
        // then it should be rendered
        copyProjectInfo[index].rendered = true;
      }
    });
    setProjectsInfo(copyProjectInfo);
  };

  useEffect(() => {
    window.addEventListener("scroll", shouldRender);

    return () => window.removeEventListener("scroll", shouldRender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`projectsPage ${theme}`}
      style={{ height: `${100 * projectsInfo.length}vh` }}
    >
      {projectsInfo.map((project, index) =>
        project.rendered ? (
          <ProjectContainer key={`project_${index}`} {...project} />
        ) : null
      )}
    </div>
  );
}

export default memo(ProjectsPage);
