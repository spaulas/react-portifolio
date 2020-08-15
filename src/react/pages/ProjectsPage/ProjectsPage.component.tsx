import ProjectContainer from "../../components/ProjectContainer.component";
import React from "react";
import { RootReducerState } from "../../../global";
import { useSelector } from "react-redux";

function ProjectsPage() {
  const { theme } = useSelector(({ Website }: RootReducerState) => ({
    theme: Website.theme
  }));

  const projectsInfo = [
    {
      title: "React Solitaire",
      description:
        "In this project, it is possible to not only play solitaire (with drag and drop or by double clicking), but also visualize the previous scores and statistics of either an online player (subscribed by Firebase) or a local player. The main differences between these two types of players are the possibility for the online player to save their data through different devices or sessions and access to the top 10 highscores of every registered user. It also has support for english, portuguese, spanish and german.",
      tech: ["React", "Redux", "Typescript", "Javascript", "HTML", "CSS"],
      link: "https://spaulas.github.io/react-solitaire/#/",
      github: "https://github.com/spaulas/react-solitaire",
      mainImage: "",
      sideImage: ""
    }
  ];

  return (
    <div className={`projectsPage ${theme}`}>
      {projectsInfo.map(project => (
        <ProjectContainer {...project} />
      ))}
    </div>
  );
}

export default ProjectsPage;
