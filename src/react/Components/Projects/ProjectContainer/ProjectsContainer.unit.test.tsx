/* eslint-disable import/first */
jest.mock("react-ga");

import * as React from "react";
import * as ReactGA from "react-ga";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExplicitAny } from "../../../../global";
import ProjectsContainer from "./ProjectContainer.component";

configure({ adapter: new Adapter() });

describe("[UNIT] <ProjectsContainer />", () => {
  const props = {
    title: "Project Title",
    description: "Project Description",
    techs: [
      { source: "javascript.png", title: "Javascript" },
      { source: "react.png", title: "React" }
    ],
    link: "www.google.com",
    github: "www.google.com",
    mainImage: "phpSocialNetwork_main.png",
    sideImage: "phpSocialNetwork_side.png"
  };

  const setFirstAnimationMock = jest.fn();
  const setShowInfoMock = jest.fn();
  const setAnimateShowMoreMock = jest.fn();
  const setAnimateShowLessMock = jest.fn();

  const useStateMock = jest.spyOn(React, "useState");

  useStateMock.mockReturnValueOnce([true, setFirstAnimationMock]);
  useStateMock.mockReturnValueOnce([false, setShowInfoMock]);
  useStateMock.mockReturnValueOnce([false, setAnimateShowMoreMock]);
  useStateMock.mockReturnValueOnce([false, setAnimateShowLessMock]);

  const eventMock = jest.spyOn(ReactGA, "event");

  const initialWrapper = mount(<ProjectsContainer {...props} />);

  describe("with initial states", () => {
    it("should find one lazy load component", () => {
      expect(initialWrapper.find("LazyLoad")).toHaveLength(1);
    });

    const lazyLoad = initialWrapper.find("LazyLoad");
    const firstRow = lazyLoad.props().children as ExplicitAny;

    it("check first row", () => {
      expect(firstRow.props.className).toBe("projectContainer");
      expect(firstRow.props.justify).toBe("center");
      expect(firstRow.props.align).toBe("middle");
      expect(firstRow.props.children).toHaveLength(2);
      expect(firstRow.props.children[1]).toBe(null);
    });
    const firstCol = firstRow.props.children[0];

    it("check first col", () => {
      expect(firstCol.props.className).toBe(
        "mainProjectDisplay mainProjectDisplayFirstAnimation"
      );
    });

    const mainImage = firstCol.props.children[0];

    it("check main image", () => {
      expect(mainImage.props.className).toBe("mainProjectImage");
      expect(mainImage.props.src).toBe("phpSocialNetwork_main.png");
    });

    const mainTitle = firstCol.props.children[1];

    it("check main title", () => {
      expect(mainTitle.props.className).toBe(
        "mainProjectTitle  mainProjectTitleFirstAnimation "
      );
      expect(mainTitle.props.children).toBe(props.title);
    });

    const showMore = firstCol.props.children[2];

    it("check show More", () => {
      expect(showMore.props.className).toBe(
        "showMore  showMoreFirstAnimation "
      );
      const showMoreTitle = showMore.props.children.props.children;
      expect(showMoreTitle.props.id).toBe("project.showMore");
    });

    it("check showMore click", async () => {
      const showMoreFunction = showMore.props.onClick as () => void;
      showMoreFunction();
      expect(setAnimateShowLessMock).toHaveBeenCalledWith(false);
      expect(setAnimateShowMoreMock).toHaveBeenCalledWith(true);
      await new Promise(r => setTimeout(r, 400));
      expect(setShowInfoMock).toHaveBeenCalledWith(true);
      expect(eventMock).toHaveBeenCalledWith({
        category: "Animation",
        action: "show more"
      });
    });
  });

  describe("after click at showMore", () => {
    useStateMock.mockReturnValueOnce([false, setFirstAnimationMock]);
    useStateMock.mockReturnValueOnce([true, setShowInfoMock]);
    useStateMock.mockReturnValueOnce([true, setAnimateShowMoreMock]);
    useStateMock.mockReturnValueOnce([false, setAnimateShowLessMock]);

    const showMoreWrapper = mount(<ProjectsContainer {...props} />);

    const lazyLoad = showMoreWrapper.find("LazyLoad");
    const firstRow = lazyLoad.props().children as ExplicitAny;
    const secondCol = firstRow.props.children[1];

    it("test new rendered element", () => {
      expect(secondCol.props.className).toBe(
        "infoProjectDisplay infoProjectDisplayShowAnimation "
      );
    });

    const secondColRow = secondCol.props.children;
    const aboutCol = secondColRow.props.children[0];

    it("test the about project col", () => {
      expect(aboutCol.props.className).toBe(
        "descriptionContainer descriptionContainerShowAnimation "
      );
      expect(aboutCol.props.children).toHaveLength(4);
    });

    const descriptionRow = aboutCol.props.children[0];

    it("test description element", () => {
      expect(descriptionRow.props.className).toBe("descriptionRow");
      const span = descriptionRow.props.children;
      expect(span.props.className).toBe(
        "infoProjectDescription infoProjectDescriptionShowAnimation "
      );
      expect(span.props.children).toBe(props.description);
    });

    const techRow = aboutCol.props.children[1];

    it("test tech element", () => {
      expect(techRow.props.className).toBe(
        "infoProjectTechRow infoProjectTechRowShowAnimation "
      );
      const techs = techRow.props.children;
      expect(techs).toHaveLength(props.techs.length);
      expect(techs[0].props.className).toBe("techcol");
      const tech = techs[0].props.children;
      expect(tech.props.title).toBe(props.techs[0].title);
      const techImg = tech.props.children;
      expect(techImg.props.className).toBe("infoProjectTech");
      expect(techImg.props.src).toBe(props.techs[0].source);
    });

    const websiteRow = aboutCol.props.children[2];

    it("test website element", () => {
      expect(websiteRow.props.justify).toBe("center");
      const tooltip = websiteRow.props.children;
      expect(tooltip.props.title.props.id).toBe("link.website");
      const link = tooltip.props.children;
      expect(link.props.className).toBe(
        "infoProjectLink infoProjectLinkShowAnimation "
      );
      expect(link.props.href).toBe(props.link);

      const onClick = link.props.onClick as () => void;
      onClick();
      expect(eventMock).toHaveBeenCalledWith({
        category: `Project: ${props.title}`,
        action: "open website"
      });
    });

    const githubRow = aboutCol.props.children[3];

    it("test repository element", () => {
      expect(githubRow.props.justify).toBe("center");
      const tooltip = githubRow.props.children;
      expect(tooltip.props.title.props.id).toBe("link.repository");
      const link = tooltip.props.children;
      expect(link.props.className).toBe(
        "infoProjectLink infoProjectLinkShowAnimation "
      );
      expect(link.props.href).toBe(props.github);

      const onClick = link.props.onClick as () => void;
      onClick();
      expect(eventMock).toHaveBeenCalledWith({
        category: `Project: ${props.title}`,
        action: "open github"
      });
    });

    const imageCol = secondColRow.props.children[1];
    const infoImage = imageCol.props.children;

    it("test image col", () => {
      expect(infoImage.props.className).toBe(
        "infoProjectImage infoProjectImageShowAnimation "
      );
      expect(infoImage.props.src).toBe(props.sideImage);
    });

    const firstCol = firstRow.props.children[0];
    const showMore = firstCol.props.children[2];

    it("check showLess click", async () => {
      setAnimateShowLessMock.mockClear();
      setAnimateShowMoreMock.mockClear();
      setShowInfoMock.mockClear();

      const showLessFunction = showMore.props.onClick as () => void;
      showLessFunction();
      expect(setAnimateShowLessMock).toHaveBeenCalledWith(true);
      expect(setAnimateShowMoreMock).toHaveBeenCalledWith(false);
      await new Promise(r => setTimeout(r, 2000));
      expect(setShowInfoMock).toHaveBeenCalledWith(false);
      expect(eventMock).toHaveBeenCalledWith({
        category: "Animation",
        action: "show less"
      });
    });
  });
});
