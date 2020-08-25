import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProjectsArrow from "./ProjectsArrow.component";
import React from "react";

configure({ adapter: new Adapter() });

const wrapper = shallow(<ProjectsArrow />);
window.scroll = jest.fn();

describe("[UNIT] <ProjectsArrow />", () => {
  it("check children", () => {
    // check main div classname
    expect(wrapper.find("div").prop("className")).toBe("projectsArrow");
    // check span
    expect(wrapper.find("div>span").prop("className")).toBe("arrowTitle");
    // check span's translation
    expect(
      wrapper
        .find("div>span")
        .children()
        .prop("id")
    ).toBe("project.arrow");
    // check image
    const image = wrapper.find("div>img");
    expect(image.prop("tabIndex")).toBe(0);
    expect(image.prop("role")).toBe("button");
    expect(image.prop("className")).toBe("arrowIcon");
  });

  it("check on click", () => {
    const onClickFunction = wrapper
      .find("div>img")
      .prop("onClick") as () => void;

    // click the image
    onClickFunction();

    // window should scroll
    expect(window.scroll).toHaveBeenCalled();
  });
});
