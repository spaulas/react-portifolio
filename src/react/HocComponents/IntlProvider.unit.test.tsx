import * as React from "react";
import * as ReactRedux from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { IntlProvider } from "react-intl";
import TranslatorIntlProvider from "./IntlProvider.component";
import enUSIntl from "../Languages/Compiled/en-US.json";

configure({ adapter: new Adapter() });

// mock redux valuess

const language = "en-US";

jest.spyOn(ReactRedux, "useSelector").mockReturnValue(language);

const DummyComponent = () => <div>Dummy Component</div>;

const wrapper = shallow(
  <TranslatorIntlProvider>
    <DummyComponent />
  </TranslatorIntlProvider>
);

describe("[UNIT] <IntlProvider />", () => {
  it("check main component", () => {
    expect(wrapper.find(IntlProvider).prop("locale")).toBe("en");
    expect(wrapper.find(IntlProvider).prop("messages")).toBe(enUSIntl);
    expect(wrapper.find(IntlProvider).exists(DummyComponent)).toBeTruthy();
  });
});
