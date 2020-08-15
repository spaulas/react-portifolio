import { Input, Form, Row } from "antd";
import { checkName, checkEmail, checkMessage } from "./helpers";
import MenuButton from "./MenuButton.component";
import React from "react";

const { Item } = Form;

function ContactMe() {
  const [form] = Form.useForm();

  const onSubmit = (values: object) => {
    console.log("subtmie values = ", values);
  };

  const onChange = (
    { target: { value } }: { target: { value: string } },
    field: string
  ) => {
    form.setFieldsValue({ [field]: value });
  };

  return (
    <Form
      name="loginForm"
      className="contactMe"
      onFinish={onSubmit}
      form={form}
    >
      <Row align="middle" justify="center">
        <Item
          name="name"
          rules={[
            {
              required: true,
              message: "Name is required"
            },
            {
              validator: (
                rule: object,
                value: string,
                callback: (message?: string) => void
              ) => checkName(rule, value, callback)
            }
          ]}
        >
          <Input
            className="formInputAnimated formInput"
            onChange={(e: any) => onChange(e, "name")}
            onPressEnter={() => form.submit()}
          />
          <label className="labelPlaceholder">Name</label>
        </Item>
      </Row>
      <Row align="middle" justify="center">
        <Item
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required"
            },
            {
              validator: (
                rule: object,
                value: string,
                callback: (message?: string) => void
              ) => checkEmail(rule, value, callback)
            }
          ]}
        >
          <Input
            className="formInputAnimated formInput"
            onChange={(e: any) => onChange(e, "email")}
            onPressEnter={() => form.submit()}
          />
          <label className="labelPlaceholder">Email</label>
        </Item>
      </Row>
      <Row align="middle" justify="center">
        <Item
          name="message"
          rules={[
            {
              required: true,
              message: "Message is required"
            },
            {
              validator: (
                rule: object,
                value: string,
                callback: (message?: string) => void
              ) => checkMessage(rule, value, callback)
            }
          ]}
        >
          <Input.TextArea
            rows={4}
            className="formInputAnimated formInput formMessage"
            onChange={(e: any) => onChange(e, "message")}
            onPressEnter={() => form.submit()}
          />
          <label className="labelPlaceholder">Message</label>
        </Item>
      </Row>

      <Row align="middle" justify="center">
        <MenuButton
          onClick={() => form.submit()}
          className="submitButtonAnimated"
        >
          <span>Submit</span>
        </MenuButton>
      </Row>
    </Form>
  );
}

export default ContactMe;
