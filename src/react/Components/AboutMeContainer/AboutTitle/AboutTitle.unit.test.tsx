/* eslint-disable import/first */
jest.mock("react-intl");
jest.mock("react-ga");
jest.mock("../../../../redux/website/website.actions", () => ({
  toggleAboutModalVisible: jest.fn()
}));

import * as ReactGA from "react-ga";
import * as ReactRedux from "react-redux";
import { configure, mount } from "enzyme";
import AboutTitle from "./AboutTitle.component";
import Adapter from "enzyme-adapter-react-16";
import { ExplicitAny } from "../../../../global";
import React from "react";
import websiteActions from "../../../../redux/website/website.actions";

configure({ adapter: new Adapter() });

describe("[UNIT] <AboutTitle />", () => {
  // define and set useDispatch spy function
  const dispatch = jest.fn();
  jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);

  // get Google Analytics Function
  const eventMock = jest.spyOn(ReactGA, "event");

  const wrapper = mount(<AboutTitle />);

  it("check main div className", () => {
    expect(wrapper.exists(".aboutTitleContainer")).toBeTruthy();
  });

  // get tooltip
  const tooltip = wrapper.find("Tooltip");

  it("should contain a toltip", () => {
    // check tooltip placement
    expect(tooltip.prop("placement")).toBe("right");
    // check tooltip title
    expect((tooltip.prop("title") as ExplicitAny)?.props?.id).toBe(
      "link.aboutMe"
    );
  });

  it("span button", () => {
    // get title span
    const span = tooltip.find("span");
    // check span's classname
    expect(span.prop("className")).toBe("aboutTitle");
    // check span title inside
    expect(span.children().prop("id")).toBe("about.title");
    // get onClick function
    const onClickFunction = span.prop("onClick") as () => void;
    onClickFunction();
    // should call show modal function
    // call the google analytics event function
    expect(eventMock).toHaveBeenCalledWith({
      category: "About Me",
      action: "open about me modal"
    });
    // dispatch function should have been called with website action
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(websiteActions.toggleAboutModalVisible).toHaveBeenCalled();
  });
});
