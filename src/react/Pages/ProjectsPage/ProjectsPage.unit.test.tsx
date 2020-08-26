/* eslint-disable import/first */
jest.mock(
  "../../Components/Projects/ProjectContainer/ProjectContainer.component"
);

import * as React from "react";
import * as ReactRedux from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FormattedMessage } from "react-intl";
import ProjectContainer from "../../Components/Projects/ProjectContainer/ProjectContainer.component";
import ProjectsPage from "./ProjectsPage.component";

configure({ adapter: new Adapter() });

// current number of projects
const currentProjects = [
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
];

// mock redux valuess
const reduxValues = {
  theme: "theme-1"
};
jest.spyOn(ReactRedux, "useSelector").mockReturnValue(reduxValues);

// add window event listener
window.addEventListener = jest.fn();
window.scroll = jest.fn();

// mock state values
const setProjectsMock = jest.fn();
const useStateMock = jest.spyOn(React, "useState");

useStateMock.mockReturnValueOnce([currentProjects, setProjectsMock]);

const wrapper = shallow(<ProjectsPage />);

describe("[UNIT] <ProjectsPage />", () => {
  it("check main components", () => {
    expect(wrapper.find("div").prop("className")).toBe(
      `projectsPage ${reduxValues.theme}`
    );
    expect(wrapper.find("div").prop("style")).toStrictEqual({
      height: `${currentProjects.length * 100}vh`
    });
  });

  it("no projects rendered", () => {
    expect(wrapper.find("div").find(ProjectContainer)).toHaveLength(0);
  });

  it("render one project", () => {
    currentProjects[0].rendered = true;
    useStateMock.mockReturnValue([currentProjects, setProjectsMock]);

    const oneWrapper = shallow(<ProjectsPage />);
    expect(oneWrapper.find("div").find(ProjectContainer)).toHaveLength(1);
  });

  it("render two projects", () => {
    currentProjects[1].rendered = true;
    useStateMock.mockReturnValue([currentProjects, setProjectsMock]);

    const oneWrapper = shallow(<ProjectsPage />);
    expect(oneWrapper.find("div").find(ProjectContainer)).toHaveLength(2);
  });
});
