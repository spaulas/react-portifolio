import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DeveloperTitle from "./DeveloperTitle.component";
import React from "react";

configure({ adapter: new Adapter() });

const wrapper = shallow(<DeveloperTitle />);
window.scroll = jest.fn();

describe("[UNIT] <DeveloperTitle />", () => {
  it("check children", () => {
    expect(wrapper.find("div").prop("className")).toBe(
      "developerTitleContainer "
    );
    expect(wrapper.find("div>h1").prop("className")).toBe("developerName");
    expect(wrapper.find("div>h1").text()).toBe("Paula Santos");
    expect(wrapper.find("div>h2").prop("className")).toBe("developerJob");
    expect(
      wrapper
        .find("div>h2")
        .children()
        .prop("id")
    ).toBe("developer.title");
  });
});
