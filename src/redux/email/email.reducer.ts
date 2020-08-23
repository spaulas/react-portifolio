/* eslint-disable indent */
import { ActionsCreators } from "./email.actions";
import EmailActionTypes from "./email.types";

interface InitialEmail {
  emailError?: boolean;
  confirmationEmailError?: boolean;
}

const INITIAL_EMAIL: InitialEmail = {
  emailError: undefined,
  confirmationEmailError: undefined
};

const emailReducer = (state = INITIAL_EMAIL, action: ActionsCreators) => {
  switch (action.type) {
    case EmailActionTypes.SEND_EMAIL:
      return {
        ...state,
        emailError: undefined
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
    case EmailActionTypes.SEND_CONFIRMATION_EMAIL:
      return {
        ...state,
        confirmationEmailError: undefined
      };
    case EmailActionTypes.CONFIRMATION_EMAIL_SUCCESS:
      return {
        ...state,
        confirmationEmailError: false
      };
    case EmailActionTypes.CONFIRMATION_EMAIL_FAIL:
      return {
        ...state,
        confirmationEmailError: true
      };

    default:
      return state;
  }
};

export default emailReducer;
