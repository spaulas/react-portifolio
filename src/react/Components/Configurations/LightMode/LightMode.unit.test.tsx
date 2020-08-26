/* eslint-disable import/first */
jest.mock("../../../../redux/website/website.actions", () => ({
  toggleLightMode: jest.fn()
}));

import * as ReactRedux from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExplicitAny } from "../../../../global";
import LightMode from "./LightMode.component";
import React from "react";
import websiteActions from "../../../../redux/website/website.actions";

configure({ adapter: new Adapter() });

// mock redux valuess
const reduxValues = {
  language: "en-US"
};
jest.spyOn(ReactRedux, "useSelector").mockReturnValue(reduxValues);

// define and set useDispatch spy function
const dispatch = jest.fn();
jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);

const wrapper = shallow(<LightMode />);

describe("[UNIT] <LightMode />", () => {
  it("check tooltip", () => {
    const tooltip = wrapper.find("Tooltip");
    expect(tooltip.prop("placement")).toBe("bottomLeft");
    expect((tooltip.prop("title") as ExplicitAny).props.id).toBe(
      "configurations.theme"
    );
  });

  it("check image", () => {
    const image = wrapper.find("Tooltip").find("img");
    expect(image.prop("className")).toBe("lightMode");
  });

  it("handle theme click", () => {
    const onClick = wrapper
      .find("Tooltip")
      .find("img")
      .prop("onClick") as () => void;

    // click on the image
    onClick();

    // expect dispatch and action functions to be called
    expect(dispatch).toHaveBeenCalled();
    expect(websiteActions.toggleLightMode).toHaveBeenCalled();
  });
});
