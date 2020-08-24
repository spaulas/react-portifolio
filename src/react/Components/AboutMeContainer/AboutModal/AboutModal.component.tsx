/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Modal, Row, Spin, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "../AboutMe/AboutMe.component";
import ContactMe from "../ContactMe/ContactMe.component";
import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
import React, { useEffect } from "react";
import { RootReducerState } from "../../../../global";
import websiteActions from "../../../../redux/website/website.actions";

function AboutModal() {
  const dispatch = useDispatch();

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
        handleFirstMessageSuccess();
      } else if (emailError === false) {
        handleFirstMessageFail(emailErrorValue);
      }
    }
  }, [emailError]);

  const handleFirstMessageSuccess = () => {
    notification.success({
      message: <FormattedMessage id="contact.success" />,
      duration: 5
    });
    dispatch(websiteActions.toggleAboutModalVisible());
    dispatch(websiteActions.removePageLoading());
    sendConfirmationEmail(emailValues);
  };

  const handleFirstMessageFail = (err: any) => {
    notification.error({
      message: <FormattedMessage id="contact.error.message1" />,
      description: err?.status ? (
        <span>
          <FormattedMessage id="contact.error.message2" />
          {err.status}
        </span>
      ) : null,
      duration: 5
    });
    dispatch(websiteActions.removePageLoading());
  };

  const sendConfirmationEmail = (variables: any) => {
    (window as any).emailjs
      .send("outlook", "portfolio", variables)
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) => {
        notification.error({
          message: <FormattedMessage id="contact.error.message3" />,
          description: err.status ? (
            <span>
              <FormattedMessage id="contact.error.message2" />
              {err.status}
            </span>
          ) : null,
          duration: 5
        });
      });
  };

  return visible ? (
    <LazyLoad>
      <Modal
        visible
        onCancel={closeModal}
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
    </LazyLoad>
  ) : null;
}

export default AboutModal;
