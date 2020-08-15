import { ValueOf } from "../../global";
import WebsiteActionTypes from "./website.types";

const toggleLightMode = () => ({
  type: WebsiteActionTypes.TOGGLE_LIGHT_MODE
});

const toggleAboutModalVisible = () => ({
  type: WebsiteActionTypes.TOGGLE_ABOUT_MODAL_VISIBLE
});

const setPageLoading = () => ({
  type: WebsiteActionTypes.SET_PAGE_LOADING
});

const removePageLoading = () => ({
  type: WebsiteActionTypes.REMOVE_PAGE_LOADING
});

// ********************************************************

const actionsCreators = Object.freeze({
  toggleLightMode,
  toggleAboutModalVisible,
  setPageLoading,
  removePageLoading
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
