/* eslint-disable indent */
import { ActionsCreators } from "./website.actions";
import WebsiteActionTypes from "./website.types";

interface InitialWebsite {
  theme: "theme-1" | "theme-2";
}

const INITIAL_WEBSITE: InitialWebsite = {
  theme: "theme-1"
};

const websiteReducer = (state = INITIAL_WEBSITE, action: ActionsCreators) => {
  switch (action.type) {
    case WebsiteActionTypes.TOGGLE_LIGHT_MODE:
      return {
        ...state,
        theme: state.theme === "theme-1" ? "theme-2" : "theme-1"
      };

    default:
      return state;
  }
};

export default websiteReducer;
