import React, { useEffect, useState } from "react";
import ProjectContainer from "../../components/ProjectContainer.component";
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
      description:
        "In this project, it is possible to not only play solitaire (with drag and drop or by double clicking), but also visualize the previous scores and statistics of either an online player (subscribed by Firebase) or a local player. The main differences between these two types of players are the possibility for the online player to save their data through different devices or sessions and access to the top 10 highscores of every registered user. It also has support for english, portuguese, spanish and german.",
      techs: [
        { source: "react.png", title: "React" },
        { source: "redux.svg", title: "Redux" },
        { source: "typescript.png", title: "Typescript" },
        { source: "javascript.png", title: "Javascript" },
        { source: "html.png", title: "HTML" },
        { source: "css.png", title: "CSS" },
        { source: "firebase.png", title: "Firebase" }
      ],
      link: "https://spaulas.github.io/react-solitaire/#/",
      github: "https://github.com/spaulas/react-solitaire",
      mainImage: "reactSolitaire_main.png",
      sideImage: "reactSolitaire_side.png"
    }
  ]);

  const shouldRender = () => {
    const windowHeight = window.innerHeight / (projectsInfo.length + 1);
    const pageYOffset = window.pageYOffset;
    // if the first project is not rendered yet
    // and the page y offset has reached the half of the project page
    if (!projectsInfo[0].rendered && pageYOffset > windowHeight * 1.5) {
      // then it should be rendered
      const copyProjectInfo = [...projectsInfo];
      copyProjectInfo[0] = { ...copyProjectInfo[0], rendered: true };
      setProjectsInfo(copyProjectInfo);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", shouldRender);

    return () => window.removeEventListener("scroll", shouldRender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`projectsPage ${theme}`}>
      {projectsInfo.map((project, index) =>
        project.rendered ? (
          <ProjectContainer key={`project_${index}`} {...project} />
        ) : null
      )}
    </div>
  );
}

export default ProjectsPage;
