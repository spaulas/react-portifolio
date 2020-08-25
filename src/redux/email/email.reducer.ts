/* eslint-disable indent */
import { ActionsCreators } from "./email.actions";
import EmailActionTypes from "./email.types";
import { Store } from "antd/lib/form/interface";

interface InitialEmail {
  emailError?: boolean;
  values: Store;
}

const INITIAL_EMAIL: InitialEmail = {
  emailError: undefined,
  values: {}
};

const emailReducer = (state = INITIAL_EMAIL, action: ActionsCreators) => {
  switch (action.type) {
    case EmailActionTypes.SEND_EMAIL:
      return {
        ...state,
        emailError: undefined,
        values: action.values
      };
    case EmailActionTypes.EMAIL_SUCCESS:
      return {
        ...state,
        emailError: false
      };
    case EmailActionTypes.EMAIL_FAIL:
      return {
        ...state,
        emailError: true
      };

    default:
      return state;
  }
};

export default emailReducer;
