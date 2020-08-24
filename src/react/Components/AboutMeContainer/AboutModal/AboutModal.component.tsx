/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Modal, Row, Spin, notification } from "antd";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "../AboutMe/AboutMe.component";
import ContactMe from "../ContactMe/ContactMe.component";
import { RootReducerState } from "../../../../global";
import { Store } from "antd/lib/form/interface";
import { useIntl } from "react-intl";
import websiteActions from "../../../../redux/website/website.actions";

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

function AboutModal() {
  const dispatch = useDispatch();
  const intl = useIntl();

  const {
    visible,
    theme,
    pageLoading,
    emailError,
    emailValues,
    emailErrorValue
  } = useSelector(({ Website, Email }: RootReducerState) => ({
    visible: Website.aboutModalVisible,
    theme: Website.theme,
    pageLoading: Website.pageLoading,
    emailError: Email.emailError,
    emailValues: Email.values,
    emailErrorValue: Email.emailErrorValue
  }));

  const closeModal = () => {
    dispatch(websiteActions.toggleAboutModalVisible());
  };

  useEffect(() => {
    if (pageLoading) {
      if (emailError) {
        handleFirstMessageFail(emailErrorValue);
      } else if (emailError === false) {
        handleFirstMessageSuccess();
      }
    }
  }, [emailError]);

  const handleFirstMessageSuccess = () => {
    notification.success({
      message: intl.formatMessage({ id: "contact.success" }),
      duration: 5
    });
    dispatch(websiteActions.toggleAboutModalVisible());
    dispatch(websiteActions.removePageLoading());
    sendConfirmationEmail(emailValues);
  };

  const handleFirstMessageFail = (err: Error & { status: number }) => {
    notification.error({
      message: intl.formatMessage({ id: "contact.error.message1" }),
      description: err?.status ? (
        <span>
          {intl.formatMessage({ id: "contact.error.message2" })}
          {err.status}
        </span>
      ) : null,
      duration: 5
    });
    dispatch(websiteActions.removePageLoading());
  };

  const sendConfirmationEmail = (variables: Store) => {
    (window as NewWindow).emailjs
      .send("outlook", "portfolio", variables)
      // Handle errors here however you like, or use a React error boundary
      .catch((err: Error & { status: number }) => {
        notification.error({
          message: intl.formatMessage({ id: "contact.error.message3" }),
          description: err.status ? (
            <span>
              {intl.formatMessage({ id: "contact.error.message2" })}
              {err.status}
            </span>
          ) : null,
          duration: 5
        });
      });
  };

  return visible ? (
    <Modal
      visible
      onCancel={() => (pageLoading ? null : closeModal())}
      footer={null}
      width={"80%"}
      wrapClassName="react-portifolio"
      maskClosable={false}
    >
      <Spin spinning={pageLoading}>
        <Row className={`aboutModalContainer ${theme}`}>
          <Col className="aboutMeCol" xs={24} sm={24} md={14}>
            <AboutMe />
          </Col>

          <Col className="contactMeCol" xs={24} sm={24} md={10}>
            <ContactMe />
          </Col>
        </Row>
      </Spin>
    </Modal>
  ) : null;
}

export default memo(AboutModal);
