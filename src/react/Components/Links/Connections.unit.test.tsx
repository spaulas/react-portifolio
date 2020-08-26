/* eslint-disable import/first */
jest.mock("../../../redux/website/website.actions", () => ({
  toggleLightMode: jest.fn()
}));
jest.mock("react-ga");

import * as ReactGA from "react-ga";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Connections from "./Connections.component";
import React from "react";

configure({ adapter: new Adapter() });

// get Google Analytics Function
const eventMock = jest.spyOn(ReactGA, "event");

const wrapper = shallow(<Connections />);
window.open = jest.fn();

describe("[UNIT] <Connections />", () => {
  it("check main component", () => {
    expect(wrapper.find("div").prop("className")).toBe("connectionsContainer");
    // should have 2 tooltips
    expect(wrapper.find("div").find("Tooltip")).toHaveLength(2);
  });

  const tooltips = wrapper.find("div").find("Tooltip");

  it("check first tooltip", () => {
    expect(tooltips.at(0).prop("placement")).toBe("left");
    expect(tooltips.at(0).prop("title")).toBe("Linkedin");
    expect(
      tooltips
        .at(0)
        .find("img")
        .prop("className")
    ).toBe("connectionIcon");
  });

  it("check first tooltip click", () => {
    const image = tooltips.at(0).find("img");

    // get on click function
    const imageOnClick = image.prop("onClick") as () => void;
    imageOnClick();

    // should set google analytics event
    expect(eventMock).toHaveBeenCalledWith({
      category: "External Links",
      action: "open linkedin"
    });
    expect(window.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/spaulas/?locale=en_US"
    );
  });

  it("check second tooltip", () => {
    expect(tooltips.at(1).prop("placement")).toBe("left");
    expect(tooltips.at(1).prop("title")).toBe("Github");
    expect(
      tooltips
        .at(1)
        .find("img")
        .prop("className")
    ).toBe("connectionIcon");
  });

  it("check second tooltip click", () => {
    const image = tooltips.at(1).find("img");

    // get on click function
    const imageOnClick = image.prop("onClick") as () => void;
    imageOnClick();

    // should set google analytics event
    expect(eventMock).toHaveBeenCalledWith({
      category: "External Links",
      action: "open github"
    });
    expect(window.open).toHaveBeenCalledWith("https://github.com/spaulas");
  });
});
