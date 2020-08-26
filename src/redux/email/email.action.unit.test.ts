import actionCreators from "./email.actions";
import actionTypes from "./email.types";

describe("[UNIT] Email actions", () => {
  describe("Send Email", () => {
    it("should create SEND_EMAIL action", () => {
      const values = {
        name: "Paula Santos",
        email: "paulasantos@dummy.pt",
        message: "This is a test message."
      };

      const expectedAction = {
        type: actionTypes.SEND_EMAIL,
        values
      };

      expect(actionCreators.sendEmail(values)).toEqual(expectedAction);
    });

    it("should create EMAIL_SUCCESS action", () => {
      const expectedAction = {
        type: actionTypes.EMAIL_SUCCESS
      };

      expect(actionCreators.sentEmailSuccess()).toEqual(expectedAction);
    });

    it("should create EMAIL_FAIL action", () => {
      const error = new Error();
      const expectedAction = {
        type: actionTypes.EMAIL_FAIL,
        error
      };

      expect(actionCreators.sentEmailFail(error)).toEqual(expectedAction);
    });
  });
});
