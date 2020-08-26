/* eslint-disable prettier/prettier */
/* eslint-disable import/first */
jest.mock("react-intl");
jest.mock("react-ga");
jest.mock("../../../../redux/website/website.actions", () => ({
  removePageLoading: jest.fn(),
  setPageLoading: jest.fn()
}));
jest.mock("../../../../redux/email/email.actions", () => ({
  sendEmail: jest.fn()
}));

import * as ReactGA from "react-ga";
import * as ReactRedux from "react-redux";
import { Form, Input } from "antd";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContactMeForm from "./ContactMeForm.component";
import { ExplicitAny } from "../../../../global";
import MenuButton from "../../Buttons/MenuButton.component";
import React from "react";
import { Store } from "antd/lib/form/interface";
import emailActions from "../../../../redux/email/email.actions";
import websiteActions from "../../../../redux/website/website.actions";

configure({ adapter: new Adapter() });

interface EmailJSWindow {
  emailjs: {
    send: (
      email: string,
      template: string,
      variables: Store
    ) => Promise<object>;
  };
}

type NewWindow = Window & typeof globalThis & EmailJSWindow;

describe("[UNIT] <ContactMeForm />", () => {
  // define and set useDispatch spy function
  const dispatch = jest.fn();
  jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);

  // use mockImplementation if you want to return a value
  (window as NewWindow).emailjs = {
    send: jest.fn().mockReturnValue({
      then: jest.fn().mockReturnValue({ catch: jest.fn() })
    } as ExplicitAny)
  };

  // get Google Analytics Function
  const eventMock = jest.spyOn(ReactGA, "event");

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

  const wrapper = mount(<ContactMeForm />);

  it("check main form", () => {
    const formComponent = wrapper.find(".contactMeForm");
    const formItems = formComponent.find(Form.Item);
    // the form should have 3 items
    expect(formItems).toHaveLength(3);
  });

  it("check name form item", () => {
    const nameItem = wrapper.find(Form.Item).at(0);
    expect(nameItem.prop("name")).toBe("name");
    expect(nameItem.prop("rules")).toHaveLength(2);
    // get input
    const input = nameItem.find("Row").find("Input");
    expect(input.prop("className")).toBe("formInputAnimated formInput");
    // get label
    const label = nameItem.find("Row").find("label");
    expect(label.prop("className")).toBe("labelPlaceholder");
    expect(label.children().prop("id")).toBe("contact.name");
  });

  it("check email form item", () => {
    const nameItem = wrapper.find(Form.Item).at(1);
    expect(nameItem.prop("name")).toBe("email");
    expect(nameItem.prop("rules")).toHaveLength(2);
    // get input
    const input = nameItem.find("Row").find("Input");
    expect(input.prop("className")).toBe("formInputAnimated formInput");
    // get label
    const label = nameItem.find("Row").find("label");
    expect(label.prop("className")).toBe("labelPlaceholder");
    expect(label.children().prop("id")).toBe("contact.email");
  });

  it("check message form item", () => {
    const nameItem = wrapper.find(Form.Item).at(2);
    expect(nameItem.prop("name")).toBe("message");
    expect(nameItem.prop("rules")).toHaveLength(2);
    // get text area
    const input = nameItem.find("Row").find(Input.TextArea);
    expect(input.prop("className")).toBe(
      "formInputAnimated formInput formMessage"
    );
    // get label
    const label = nameItem.find("Row").find("label");
    expect(label.prop("className")).toBe("labelPlaceholder");
    expect(label.children().prop("id")).toBe("contact.message");
  });

  it("check submit button", () => {
    const button = wrapper.find("Row").find(MenuButton);
    expect(button.prop("className")).toBe("submitButtonAnimated");
    expect(
      button
        .find("span")
        .children()
        .prop("id")
    ).toBe("contact.submit");
  });

  it("check contact me title", () => {
    expect(
      wrapper
        .find(".contactMeBehind")
        .children()
        .prop("id")
    ).toBe("contact.title");
  });

  it("mount function call", () => {
    // at mount, remove loading
    expect(dispatch).toHaveBeenCalled();
    expect(websiteActions.removePageLoading).toHaveBeenCalled();
  });

  it("submit form function", () => {
    dispatch.mockClear();
    const onFinishFunction = wrapper.find(Form).prop("onFinish") as () => void;

    // call on finish function
    onFinishFunction();

    // should call google analytics
    expect(eventMock).toHaveBeenCalledWith({
      category: "Contact Me",
      action: "send message"
    });
    // should call send website action
    expect(websiteActions.setPageLoading).toHaveBeenCalled();
    // should call send email action
    expect(emailActions.sendEmail).toHaveBeenCalledWith(undefined);
    // should call window
    expect((window as NewWindow).emailjs.send).toHaveBeenCalled();
  });
});
