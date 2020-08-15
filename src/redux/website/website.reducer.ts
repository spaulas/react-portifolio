/* eslint-disable indent */
import { ActionsCreators } from "./website.actions";
import WebsiteActionTypes from "./website.types";

interface InitialWebsite {
  theme: "theme-1" | "theme-2";
  aboutModalVisible: boolean;
}

const INITIAL_WEBSITE: InitialWebsite = {
  theme: "theme-1",
  aboutModalVisible: false
};

const websiteReducer = (state = INITIAL_WEBSITE, action: ActionsCreators) => {
  switch (action.type) {
    case WebsiteActionTypes.TOGGLE_LIGHT_MODE:
      return {
        ...state,
        theme: state.theme === "theme-1" ? "theme-2" : "theme-1"
      };

    case WebsiteActionTypes.TOGGLE_ABOUT_MODAL_VISIBLE:
      console.log("state = ", state);
      return {
        ...state,
        aboutModalVisible: !state.aboutModalVisible
      };

    default:
      return state;
  }
};

export default websiteReducer;
