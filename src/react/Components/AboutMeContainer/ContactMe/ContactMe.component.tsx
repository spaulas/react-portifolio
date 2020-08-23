import { Input, Form, Row } from "antd";
import { checkName, checkEmail, checkMessage } from "../../helpers";
import { FormattedMessage } from "react-intl";
import MenuButton from "../../Buttons/MenuButton.component";
import React, { useEffect } from "react";
import emailActions from "../../../../redux/email/email.actions";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

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
    dispatch(emailActions.sendEmail(values));
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
        dispatch(emailActions.sentEmailSuccess());
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) => {
        dispatch(emailActions.sentEmailFail(err));
      });
  };

  return (
    <>
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
                message: <FormattedMessage id="contact.required.name" />
              },
              {
                validator: (
                  rule: object,
                  value: string,
                  callback: (message?: string) => void
                ) =>
                  checkName(
                    rule,
                    value,
                    callback,
                    <FormattedMessage id="contact.invalid.length" />,
                    <FormattedMessage id="contact.invalid.name" />
                  )
              }
            ]}
          >
            <Input
              className="formInputAnimated formInput"
              onChange={(e: any) => onChange(e, "name")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.name" />
            </label>
          </Item>
        </Row>
        <Row align="middle" justify="center">
          <Item
            name="email"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="contact.required.email" />
              },
              {
                validator: (
                  rule: object,
                  value: string,
                  callback: (message?: string) => void
                ) =>
                  checkEmail(
                    rule,
                    value,
                    callback,
                    <FormattedMessage id="contact.invalid.email" />
                  )
              }
            ]}
          >
            <Input
              className="formInputAnimated formInput"
              onChange={(e: any) => onChange(e, "email")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.email" />
            </label>
          </Item>
        </Row>
        <Row align="middle" justify="center">
          <Item
            name="message"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="contact.required.message" />
              },
              {
                validator: (
                  rule: object,
                  value: string,
                  callback: (message?: string) => void
                ) =>
                  checkMessage(
                    rule,
                    value,
                    callback,
                    <FormattedMessage id="contact.invalid.length" />
                  )
              }
            ]}
          >
            <Input.TextArea
              rows={4}
              className="formInputAnimated formInput formMessage"
              onChange={(e: any) => onChange(e, "message")}
            />
            <label className="labelPlaceholder">
              <FormattedMessage id="contact.message" />
            </label>
          </Item>
        </Row>

        <Row align="middle" justify="center">
          <MenuButton
            onClick={() => form.submit()}
            className="submitButtonAnimated"
          >
            <span>
              <FormattedMessage id="contact.submit" />
            </span>
          </MenuButton>
        </Row>
      </Form>
      <span className="contactMeBehind">
        <FormattedMessage id="contact.title" />
      </span>
    </>
  );
}

export default ContactMe;
