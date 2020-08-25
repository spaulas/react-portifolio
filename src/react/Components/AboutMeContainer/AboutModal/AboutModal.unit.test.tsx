/* eslint-disable import/first */
jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (A: string) => A })
}));

// mock redux actions
jest.mock("../../../../redux/website/website.actions", () => ({
  toggleAboutModalVisible: jest.fn(),
  removePageLoading: jest.fn()
}));

jest.mock("../AboutMe/AboutMe.component");
jest.mock("../ContactMeForm/ContactMeForm.component");

jest.mock("antd", () => ({
  ...(jest.requireActual("antd") as object),
  notification: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

import * as ReactRedux from "react-redux";
import { configure, mount } from "enzyme";
import AboutMe from "../AboutMe/AboutMe.component";
import AboutModal from "./AboutModal.component";
import Adapter from "enzyme-adapter-react-16";
import ContactMeForm from "../ContactMeForm/ContactMeForm.component";
import React from "react";
import { notification } from "antd";
import websiteActions from "../../../../redux/website/website.actions";
configure({ adapter: new Adapter() });

describe("[UNIT] <AboutModal/>", () => {
  const reduxValues = {
    visible: true,
    theme: "theme-1",
    pageLoading: false,
    emailError: undefined,
    emailErrorValue: undefined
  };

  const useSelectorMock = jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(reduxValues);

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

  const wrapper = mount(<AboutModal />);

  it("check Modal className", () => {
    expect(wrapper.find("Modal").prop("wrapClassName")).toBe(
      "react-portifolio"
    );
  });

  it("spin should not be spinning", () => {
    expect(wrapper.find("Spin").prop("spinning")).toBe(false);
  });

  it("check components columns", () => {
    const row = wrapper.find("Spin").find("Row");
    expect(row.prop("className")).toBe(
      `aboutModalContainer ${reduxValues.theme}`
    );
    const columns = row.find("Col");
    expect(columns.at(0).prop("className")).toBe("aboutMeCol");
    expect(columns.at(0).exists(AboutMe)).toBeTruthy();
    expect(columns.at(1).prop("className")).toBe("contactMeCol");
    expect(columns.at(1).exists(ContactMeForm)).toBeTruthy();
  });

  it("try to close Modal", () => {
    // try to close the modal
    const onCancelFunction = wrapper
      .find("Modal")
      .prop("onCancel") as () => void;
    onCancelFunction();
    // dispatch function should have been called
    expect(dispatch).toHaveBeenCalled();
    // website toggleAboutModalVisible function should have been called
    expect(websiteActions.toggleAboutModalVisible).toHaveBeenCalled();
  });

  it("spin should be spinning", () => {
    dispatch.mockClear();
    // change the pageLoading value
    useSelectorMock.mockReturnValue({ ...reduxValues, pageLoading: true });
    // force update
    wrapper.setProps({ dummy: "spinning" });
    // spin should be spinning
    expect(wrapper.find("Spin").prop("spinning")).toBe(true);
    // try to close the modal
    const onCancelFunction = wrapper
      .find("Modal")
      .prop("onCancel") as () => void;
    onCancelFunction();
    // dispatch function should not have been called
    expect(dispatch).not.toHaveBeenCalled();
  });

  it("email success", () => {
    dispatch.mockClear();
    // change the pageLoading and emailError values
    useSelectorMock.mockReturnValue({
      ...reduxValues,
      pageLoading: true,
      emailError: false
    });

    // force update
    wrapper.setProps({ dummy: "success" });
    wrapper.update();

    // success notification should appear
    expect(notification.success).toHaveBeenCalledWith({
      message: { id: "contact.success" },
      duration: 5
    });

    // dispatch function should be called twice
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(websiteActions.toggleAboutModalVisible).toHaveBeenCalled();
    expect(websiteActions.removePageLoading).toHaveBeenCalled();
  });

  it("email fail", () => {
    dispatch.mockClear();
    // change the pageLoading and emailError values
    useSelectorMock.mockReturnValue({
      ...reduxValues,
      pageLoading: true,
      emailError: "404"
    });

    // force update
    wrapper.setProps({ dummy: "fail" });
    wrapper.update();

    // error notification should appear
    expect(notification.error).toHaveBeenCalledWith({
      message: { id: "contact.error.message1" },
      description: null,
      duration: 5
    });

    // dispatch function should be called once
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(websiteActions.removePageLoading).toHaveBeenCalled();
  });
});
