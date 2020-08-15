import { Input, Form, Row, notification } from "antd";
import { checkName, checkEmail, checkMessage } from "./helpers";
import MenuButton from "./MenuButton.component";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import websiteActions from "../../redux/website/website.actions";

const { Item } = Form;

function ContactMe() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const mountComponent = () => {
    form.resetFields();
    dispatch(websiteActions.removePageLoading());
  };
  useEffect(mountComponent, []);

  const onSubmit = (values: any) => {
    dispatch(websiteActions.setPageLoading());
    sendFeedback(values);
  };

  const onChange = (
    { target: { value } }: { target: { value: string } },
    field: string
  ) => {
    form.setFieldsValue({ [field]: value });
  };

  const sendFeedback = (variables: any) => {
    (window as any).emailjs
      .send("outlook", "portfolio", variables)
      .then((res: any) => {
        notification.success({
          message: "Message successfully sent.",
          duration: 5
        });
        dispatch(websiteActions.toggleAboutModalVisible());
        dispatch(websiteActions.removePageLoading());
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) => {
        notification.error({
          message: "Something happened.",
          description: err.status ? `Error code: ${err.status}` : null,
          duration: 5
        });
        dispatch(websiteActions.removePageLoading());
      });
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
