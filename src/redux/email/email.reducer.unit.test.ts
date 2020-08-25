import { ExplicitAny } from "../../global";
import actionTypes from "./email.types";
import reducer from "./email.reducer";

describe("[UNIT] Email Reducer", () => {
  const initialState = {
    emailError: undefined,
    values: {}
  };

  it("should correctly initialize the state", () => {
    expect(reducer(undefined, {} as ExplicitAny)).toEqual(initialState);
  });

  it("should handle EMAIL_FAIL", () => {
    const error = new Error();
    const expectedResult = { ...initialState, emailError: true };

    expect(
      reducer(undefined, {
        type: actionTypes.EMAIL_FAIL,
        error
      })
    ).toEqual(expectedResult);
  });

  it("should handle SEND_EMAIL", () => {
    const values = {
      name: "Paula Santos",
      email: "paulasantos@dummy.pt",
      message: "This is a test message."
    };

    const expectedResult = {
      values,
      emailError: undefined
    };

    expect(
      reducer(undefined, {
        type: actionTypes.SEND_EMAIL,
        values
      })
    ).toEqual(expectedResult);
  });

  it("should handle EMAIL_SUCCESS", () => {
    const expectedResult = { ...initialState, emailError: false };

    expect(
      reducer(undefined, {
        type: actionTypes.EMAIL_SUCCESS
      })
    ).toEqual(expectedResult);
  });
});
