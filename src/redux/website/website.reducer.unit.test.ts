import { ExplicitAny } from "../../global";
import actionTypes from "./website.types";
import reducer from "./website.reducer";

describe("[UNIT] Website Reducer", () => {
  const initialState = {
    theme: "theme-1",
    aboutModalVisible: false,
    pageLoading: false,
    language: "en-US"
  };

  it("should correctly initialize the state", () => {
    expect(reducer(undefined, {} as ExplicitAny)).toEqual(initialState);
  });

  it("should handle TOGGLE_LIGHT_MODE", () => {
    const expectedResult = { ...initialState, theme: "theme-2" };

    expect(
      reducer(undefined, {
        type: actionTypes.TOGGLE_LIGHT_MODE
      })
    ).toEqual(expectedResult);
  });

  it("should handle TOGGLE_ABOUT_MODAL_VISIBLE", () => {
    const expectedResult = { ...initialState, aboutModalVisible: true };

    expect(
      reducer(undefined, {
        type: actionTypes.TOGGLE_ABOUT_MODAL_VISIBLE
      })
    ).toEqual(expectedResult);
  });

  it("should handle SET_PAGE_LOADING", () => {
    const expectedResult = { ...initialState, pageLoading: true };

    expect(
      reducer(undefined, {
        type: actionTypes.SET_PAGE_LOADING
      })
    ).toEqual(expectedResult);
  });

  it("should handle REMOVE_PAGE_LOADING", () => {
    const expectedResult = { ...initialState, pageLoading: false };

    expect(
      reducer(undefined, {
        type: actionTypes.REMOVE_PAGE_LOADING
      })
    ).toEqual(expectedResult);
  });

  it("should handle CHANGE_LANGUAGE", () => {
    const expectedResult = { ...initialState, language: "pt-BR" };

    expect(
      reducer(undefined, {
        type: actionTypes.CHANGE_LANGUAGE,
        language: "pt-BR"
      })
    ).toEqual(expectedResult);
  });
});
