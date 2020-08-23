import { ValueOf } from "../../global";
import EmailActionTypes from "./email.types";

const sendEmail = () => ({
  type: EmailActionTypes.SEND_EMAIL
});

const sentEmailSuccess = () => ({
  type: EmailActionTypes.EMAIL_SUCCESS
});

const sentEmailFail = () => ({
  type: EmailActionTypes.EMAIL_FAIL
});

const sendConfirmationEmail = () => ({
  type: EmailActionTypes.SEND_CONFIRMATION_EMAIL
});

const sentConfirmationEmailSuccess = () => ({
  type: EmailActionTypes.CONFIRMATION_EMAIL_SUCCESS
});

const sentConfirmationEmailFail = () => ({
  type: EmailActionTypes.CONFIRMATION_EMAIL_FAIL
});

// ********************************************************

const actionsCreators = Object.freeze({
  sendEmail,
  sentEmailSuccess,
  sentEmailFail,
  sendConfirmationEmail,
  sentConfirmationEmailSuccess,
  sentConfirmationEmailFail
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
