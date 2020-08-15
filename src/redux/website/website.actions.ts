import { ValueOf } from "../../global";
import WebsiteActionTypes from "./website.types";

const toggleLightMode = () => ({
  type: WebsiteActionTypes.TOGGLE_LIGHT_MODE
});

const toggleAboutModalVisible = () => ({
  type: WebsiteActionTypes.TOGGLE_ABOUT_MODAL_VISIBLE
});

// ********************************************************

const actionsCreators = Object.freeze({
  toggleLightMode,
  toggleAboutModalVisible
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
