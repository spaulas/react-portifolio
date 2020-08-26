/* eslint-disable import/first */
jest.mock("react-intl");

import * as ReactRedux from "react-redux";
import React, { Suspense } from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./HomePage.component";

configure({ adapter: new Adapter() });

// mock redux valuess
const reduxValues = {
  theme: "theme-1"
};
jest.spyOn(ReactRedux, "useSelector").mockReturnValue(reduxValues);

// define and set useDispatch spy function
const dispatch = jest.fn();
jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);

// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

const wrapper = mount(
  <Suspense fallback="loading">
    <HomePage />
  </Suspense>
);

describe("[UNIT] <HomePage />", () => {
  it("component container", () => {
    expect(
      wrapper
        .find("div")
        .at(0)
        .prop("className")
    ).toBe(`homePage ${reduxValues.theme}`);
    expect(wrapper.find("div>div").prop("className")).toBe("overBackground");
    // should have
    expect(wrapper.find("div>div>Row")).toHaveLength(3);
  });

  const rows = wrapper.find("div>div>Row");

  it("first row", () => {
    expect(rows.at(0).prop("className")).toBe("topRow");
  });

  it("second row", () => {
    expect(rows.at(1).prop("className")).toBe("middleRow");
    // should have 3 Cols
    const colums = rows.at(1).find("Col");
    expect(colums).toHaveLength(3);
  });

  it("third row", () => {
    expect(rows.at(2).prop("className")).toBe("bottomRow");
  });
});
