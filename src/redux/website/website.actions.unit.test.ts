import actionCreators from "./website.actions";
import actionTypes from "./website.types";

describe("[UNIT] Website actions", () => {
  it("should create TOGGLE_LIGHT_MODE action", () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_LIGHT_MODE
    };

    expect(actionCreators.toggleLightMode()).toEqual(expectedAction);
  });

  it("should create TOGGLE_ABOUT_MODAL_VISIBLE action", () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_ABOUT_MODAL_VISIBLE
    };

    expect(actionCreators.toggleAboutModalVisible()).toEqual(expectedAction);
  });

  it("should create SET_PAGE_LOADING action", () => {
    const expectedAction = {
      type: actionTypes.SET_PAGE_LOADING
    };

    expect(actionCreators.setPageLoading()).toEqual(expectedAction);
  });

  it("should create REMOVE_PAGE_LOADING action", () => {
    const expectedAction = {
      type: actionTypes.REMOVE_PAGE_LOADING
    };

    expect(actionCreators.removePageLoading()).toEqual(expectedAction);
  });

  it("should create CHANGE_LANGUAGE action", () => {
    const expectedAction = {
      type: actionTypes.CHANGE_LANGUAGE,
      language: "pt-BR"
    };

    expect(actionCreators.changeLanguage("pt-BR")).toEqual(expectedAction);
  });
});
