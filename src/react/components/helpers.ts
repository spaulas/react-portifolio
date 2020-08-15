export const checkName = (
  rule: object,
  value: any,
  callback: (message?: string) => void
) => {
  if (value.lenght < 3) {
    callback("Min length Error");
  }
  if (value && validadeName(value)) {
    callback("Name Error");
  } else {
    callback();
  }
};

export const validadeName = (name: any) => {
  const regex = /^[0-9A-Za-z!@#$%&*()_\-+={[}\]|:;"'<,>.?/\\~`]+[0-9A-Za-z!@#$%&*()_\-+={[}\]|:;"'<,>.?/\\~`]*$/g;

  if (typeof name === "object") {
    const result = name.find((e: string) => !regex.test(e));
    return result ? true : false;
  }

  return !regex.test(name);
};

export const validateEmail = (email: any) => {
  const regex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (typeof email === "object") {
    const result = email.find((e: string) => !regex.test(e));
    return result ? true : false;
  }

  return !regex.test(email);
};

export const checkEmail = (
  rule: object,
  value: string,
  callback: (message?: string) => void
) => {
  if (value && validateEmail(value)) {
    callback("Email Error");
  } else {
    callback();
  }
};

export const checkMessage = (
  rule: object,
  value: any,
  callback: (message?: string) => void
) => {
  if (value.lenght < 3) {
    callback("Min length Error");
  } else {
    callback();
  }
};
