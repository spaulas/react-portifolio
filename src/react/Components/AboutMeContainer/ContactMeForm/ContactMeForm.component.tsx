import { Form, Input, Row, Tooltip } from "antd";
import React, { memo, useEffect } from "react";
import { checkEmail, checkMessage, checkName } from "./helpers";
import { FormattedMessage } from "react-intl";
import MenuButton from "../../Buttons/MenuButton.component";
import ReactGA from "react-ga";
import { Store } from "antd/lib/form/interface";
import emailActions from "../../../../redux/email/email.actions";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

const { Item } = Form;

interface EmailJSWindow {
  emailjs: {
    send: (
      email: string,
      template: string,
      variables: Store
    ) => Promise<object>;
  };
}

type NewWindow = Window & typeof globalThis & EmailJSWindow;

function ContactMeForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const mountComponent = () => {
    form.resetFields();
    dispatch(websiteActions.removePageLoading());
  };
  useEffect(mountComponent, []);

  const onSubmit = (values: Store) => {
    ReactGA.event({
      category: "Contact Me",
      action: "send message"
    });
    dispatch(websiteActions.setPageLoading());
    dispatch(emailActions.sendEmail(values));
    sendFeedback(values);
  };

  const onChange = (
    { target: { value } }: { target: { value: string } },
    field: string
  ) => {
    form.setFieldsValue({ [field]: value });
  };

  const sendFeedback = (variables: Store) => {
    (window as NewWindow).emailjs
      .send("outlook", "portfolio", variables)
      .then(() => {
        dispatch(emailActions.sentEmailSuccess());
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: Error) => {
        dispatch(emailActions.sentEmailFail(err));
      });
  };

  return (
    <>
      <Form
        name="loginForm"
        className="contactMeForm"
        onFinish={onSubmit}
        form={form}
      >
        <Item
          name="name"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="contact.required.name" />
            },
            {
              validator: (rule: object, value: string) =>
                checkName(
                  rule,
                  value,
                  <FormattedMessage id="contact.invalid.length" />,
                  <FormattedMessage id="contact.invalid.name" />
                )
            }
          ]}
        >
          <Row align="middle" justify="center">
            <Input
              className="formInputAnimated formInput"
              onChange={e => onChange(e, "name")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.name" />
            </label>
          </Row>
        </Item>
        <Item
          name="email"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="contact.required.email" />
            },
            {
              validator: (rule: object, value: string) =>
                checkEmail(
                  rule,
                  value,
                  <FormattedMessage id="contact.invalid.email" />
                )
            }
          ]}
        >
          <Row align="middle" justify="center">
            <Input
              className="formInputAnimated formInput"
              onChange={e => onChange(e, "email")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.email" />
            </label>
          </Row>
        </Item>
        <Item
          name="message"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="contact.required.message" />
            },
            {
              validator: (rule: object, value: string) =>
                checkMessage(
                  rule,
                  value,
                  <FormattedMessage id="contact.invalid.length" />
                )
            }
          ]}
        >
          <Row align="middle" justify="center">
            <Input.TextArea
              rows={4}
              className="formInputAnimated formInput formMessage"
              onChange={e => onChange(e, "message")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.message" />
            </label>
          </Row>
        </Item>

        <Tooltip
          placement="top"
          title={<FormattedMessage id="contact.disabled" />}
        >
          <Row align="middle" justify="center">
            <MenuButton
              disabled
              onClick={() => form.submit()}
              className="submitButtonAnimated"
            >
              <span>
                <FormattedMessage id="contact.submit" />
              </span>
            </MenuButton>
          </Row>
        </Tooltip>
      </Form>
      <span className="contactMeBehind">
        <FormattedMessage id="contact.title" />
      </span>
    </>
  );
}

export default memo(ContactMeForm);
