/* eslint-disable import/first */
jest.mock("react-intl");

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MenuButton from "./MenuButton.component";
import React from "react";

configure({ adapter: new Adapter() });

describe("[UNIT] <MenuButton />", () => {
  const props = {
    className: "dummy",
    onClick: jest.fn()
  };

  const Dummy = () => <div>Dummy Child</div>;

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
    <MenuButton {...props}>
      <Dummy />
    </MenuButton>
  );

  it("check row", () => {
    expect(wrapper.find("Row").prop("className")).toBe("buttonSpaceRow");
  });

  it("check div button", () => {
    const { tabIndex, role, className, onClick } = wrapper
      .find("Row")
      .children()
      .children()
      .props();

    expect(tabIndex).toBe(0);
    expect(role).toBe("button");
    expect(className).toBe(`animatedButton divButton ${props.className}`);
    expect(onClick).toBe(props.onClick);
    expect(wrapper.find("Row>div").exists(Dummy)).toBeTruthy();
  });

  it("check on click", () => {
    const onClickFunction = wrapper
      .find("Row")
      .children()
      .children()
      .prop("onClick") as () => void;

    onClickFunction();

    expect(props.onClick).toBeCalled();
  });
});
