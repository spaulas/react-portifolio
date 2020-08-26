/* eslint-disable import/first */
jest.mock("react-ga");

import * as ReactGA from "react-ga";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import IntlProvider from "../HocComponents/IntlProvider.component";
import React from "react";

configure({ adapter: new Adapter() });

describe("[UNIT] <App/>", () => {
  const wrapper = shallow(<App />);

  const initializeMock = jest.spyOn(ReactGA, "initialize");
  const pageviewMock = jest.spyOn(ReactGA, "pageview");

  it("React Google Analytics", () => {
    // should initialize the React Google Analytics
    expect(initializeMock).toHaveBeenCalledWith("UA-153456985-1");
    // should set "/" as the page to analyze
    expect(pageviewMock).toHaveBeenCalledWith("/");
  });

  it("main page should be wrapped with the main classname", () => {
    expect(
      wrapper
        .find("Provider>PersistGate")
        .find(IntlProvider)
        .exists(".react-portifolio")
    ).toBeTruthy();
  });
});
