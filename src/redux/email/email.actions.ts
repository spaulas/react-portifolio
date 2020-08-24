import EmailActionTypes from "./email.types";
import { Store } from "antd/lib/form/interface";
import { ValueOf } from "../../global";

const sendEmail = (values: Store) => ({
  type: EmailActionTypes.SEND_EMAIL,
  values
});

const sentEmailSuccess = () => ({
  type: EmailActionTypes.EMAIL_SUCCESS
});

const sentEmailFail = (error: Error) => ({
  type: EmailActionTypes.EMAIL_FAIL,
  error
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
