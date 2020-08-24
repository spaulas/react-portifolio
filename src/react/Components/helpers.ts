import { ReactNode } from "react";
export const checkName = (
  rule: object,
  value: string,
  invalidLengthMessage: ReactNode,
  invalidNameMessage: ReactNode
) => {
  if (value?.length < 3) {
    return Promise.reject(invalidLengthMessage);
  }
  if (value && validadeName(value)) {
    return Promise.reject(invalidNameMessage);
  } else {
    return Promise.resolve();
  }
};

export const validadeName = (name: string) => {
  const regex = /^[-'a-zA-Z ,.'-À-ÖØ-öø-ÿ]+$/g;

  if (typeof name === "object") {
    const result = (name as Array<string>).find((e: string) => !regex.test(e));
    return result ? true : false;
  }

  return !regex.test(name);
};

export const validateEmail = (email: string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (typeof email === "object") {
    const result = (email as Array<string>).find((e: string) => !regex.test(e));
    return result ? true : false;
  }

  return !regex.test(email);
};

export const checkEmail = (
  rule: object,
  value: string,
  invalidEmailMessage: ReactNode
) => {
  if (value && validateEmail(value)) {
    return Promise.reject(invalidEmailMessage);
  } else {
    return Promise.resolve();
  }
};

export const checkMessage = (
  rule: object,
  value: string,
  invalidLengthMessage: ReactNode
) => {
  if (value?.length < 3) {
    return Promise.reject(invalidLengthMessage);
  } else {
    return Promise.resolve();
  }
};
