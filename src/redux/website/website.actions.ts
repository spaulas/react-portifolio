import { ValueOf } from "../../global";
import WebsiteActionTypes from "./website.types";

const toggleLightMode = () => ({
  type: WebsiteActionTypes.TOGGLE_LIGHT_MODE
});

// ********************************************************

const actionsCreators = Object.freeze({
  toggleLightMode
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
