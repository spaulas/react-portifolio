/* eslint-disable indent */
import { ActionsCreators } from "./website.actions";
import WebsiteActionTypes from "./website.types";

interface InitialWebsite {
  theme: "theme-1" | "theme-2";
  aboutModalVisible: boolean;
  pageLoading: boolean;
  language: string;
}

const INITIAL_WEBSITE: InitialWebsite = {
  theme: "theme-1",
  aboutModalVisible: false,
  pageLoading: false,
  language: "en-US"
};

const websiteReducer = (state = INITIAL_WEBSITE, action: ActionsCreators) => {
  switch (action.type) {
    case WebsiteActionTypes.TOGGLE_LIGHT_MODE:
      return {
        ...state,
        theme: state.theme === "theme-1" ? "theme-2" : "theme-1"
      };

    case WebsiteActionTypes.TOGGLE_ABOUT_MODAL_VISIBLE:
      return {
        ...state,
        aboutModalVisible: !state.aboutModalVisible
      };

    case WebsiteActionTypes.SET_PAGE_LOADING:
      return {
        ...state,
        pageLoading: true
      };

    case WebsiteActionTypes.REMOVE_PAGE_LOADING:
      return {
        ...state,
        pageLoading: false
      };

    case WebsiteActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};

export default websiteReducer;
