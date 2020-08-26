import {
  checkEmail,
  checkMessage,
  checkName,
  validateEmail,
  validateName
} from "./helpers";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("[UNIT] helpers", () => {
  describe("validateName function", () => {
    it("with accents", () => {
      let result = validateName("João Santos");
      expect(result).toBe(false);
      result = validateName("André Simões");
      expect(result).toBe(false);
      result = validateName("Miguel Roça");
      expect(result).toBe(false);
    });

    it("with special", () => {
      let result = validateName("P@ula$#");
      expect(result).toBe(true);
      result = validateName("Mrs. Paula");
      expect(result).toBe(false);
      result = validateName("Paula Sousa-Santos");
      expect(result).toBe(false);
    });
  });

  it("validateEmail function", () => {
    let result = validateEmail("paula");
    expect(result).toBe(true);
    result = validateEmail("paula@.pt");
    expect(result).toBe(true);
    result = validateEmail("paula@sad.p");
    expect(result).toBe(true);
    result = validateEmail("paula@ua.pt");
    expect(result).toBe(false);
  });

  it("checkName function", () => {
    let result = checkName([], "paula", "invalid length", "invalid sintax");
    expect(result).toStrictEqual(Promise.resolve());
    result = checkName([], "pa", "invalid length", "invalid sintax");
    expect(result).toStrictEqual(Promise.reject("invalid length"));
    result = checkName([], "paula#$", "invalid length", "invalid sintax");
    expect(result).toStrictEqual(Promise.reject("invalid sintax"));
  });

  it("checkEmail function", () => {
    let result = checkEmail([], "paula@ua.pt", "invalid sintax");
    expect(result).toStrictEqual(Promise.resolve());
    result = checkEmail([], "paula#$", "invalid sintax");
    expect(result).toStrictEqual(Promise.reject("invalid sintax"));
  });

  it("checkMessage function", () => {
    let result = checkEmail([], "test message", "invalid length");
    expect(result).toStrictEqual(Promise.resolve());
    result = checkEmail([], "t", "invalid length");
    expect(result).toStrictEqual(Promise.reject("invalid length"));
  });
});
