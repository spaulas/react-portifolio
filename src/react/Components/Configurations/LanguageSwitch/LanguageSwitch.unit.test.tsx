/* eslint-disable import/first */
jest.mock("react-intl");
jest.mock("react-country-flag");
jest.mock("../../../../redux/website/website.actions", () => ({
  changeLanguage: jest.fn()
}));

import * as ReactRedux from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExplicitAny } from "../../../../global";
import LanguageSwitch from "./LanguageSwitch.component";
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

const wrapper = shallow(<LanguageSwitch />);

describe("[UNIT] <LanguageSwitch />", () => {
  it("check tooltip", () => {
    const tooltip = wrapper.find("Tooltip");
    expect(tooltip.prop("placement")).toBe("leftBottom");
    expect((tooltip.prop("title") as ExplicitAny).props.id).toBe(
      "configurations.languages"
    );
  });

  it("check select", () => {
    const select = wrapper.find("Tooltip").find("Select");
    expect(select.prop("defaultValue")).toBe("en-US");
    expect(select.prop("className")).toBe("languageSwitch");
    expect(select.prop("value")).toBe(reduxValues.language);
  });

  it("check select options", () => {
    const options = wrapper
      .find("Tooltip")
      .find("Select")
      .children();

    // should have 4 options
    expect(options).toHaveLength(4);

    // en-US
    expect(options.at(0).prop("value")).toBe("en-US");
    expect(
      options
        .at(0)
        .find("ReactCountryFlag")
        .prop("countryCode")
    ).toBe("GB");

    // pt-BR
    expect(options.at(1).prop("value")).toBe("pt-BR");
    expect(
      options
        .at(1)
        .find("ReactCountryFlag")
        .prop("countryCode")
    ).toBe("BR");

    // de-DE
    expect(options.at(2).prop("value")).toBe("de-DE");
    expect(
      options
        .at(2)
        .find("ReactCountryFlag")
        .prop("countryCode")
    ).toBe("DE");

    // es-ES
    expect(options.at(3).prop("value")).toBe("es-ES");
    expect(
      options
        .at(3)
        .find("ReactCountryFlag")
        .prop("countryCode")
    ).toBe("ES");
  });

  it("check on change function", () => {
    const onChangeFunction = wrapper
      .find("Tooltip")
      .find("Select")
      .prop("onChange") as (value: ExplicitAny) => void;

    // call change function
    onChangeFunction("pt-BR" as ExplicitAny);

    // dispatch function should have been called
    expect(dispatch).toHaveBeenCalled();
    expect(websiteActions.changeLanguage).toHaveBeenCalledWith("pt-BR");
  });
});
