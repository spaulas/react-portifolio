import { configure, shallow } from "enzyme";
import AboutMe from "./AboutMe.component";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import moment from "moment";

configure({ adapter: new Adapter() });

describe("[UNIT] <AboutMe/>", () => {
  const wrapper = shallow(<AboutMe />);
  const age = moment().diff("1995-01-12", "years");

  const columns = wrapper.find(".aboutMeContainer>Col");

  it("should have developer image at the first column", () => {
    expect(columns.first().exists(".developerImage")).toBeTruthy();
  });

  it("should have the about me at the second colum", () => {
    // check second column classname
    expect(columns.at(1).prop("className")).toBe("aboutMeTextContainer");
    // should contain 4 paragraphs
    expect(columns.at(1).children()).toHaveLength(4);
    // should have the age written
    expect(
      columns
        .at(1)
        .childAt(0)
        .childAt(2)
        .text()
    ).toBe(`${age}`);
    // should have the company name written
    expect(
      columns
        .at(1)
        .childAt(1)
        .childAt(2)
        .text()
    ).toBe("Wavecom");
  });
});
