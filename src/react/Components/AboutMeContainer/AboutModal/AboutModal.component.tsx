import { Col, Modal, Row, Spin, notification } from "antd";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "../AboutMe/AboutMe.component";
import ContactMeForm from "../ContactMeForm/ContactMeForm.component";
import { RootReducerState } from "../../../../global";
import { useIntl } from "react-intl";
import websiteActions from "../../../../redux/website/website.actions";

/**
 * About Modal is the modal with the about me on the left side and contact me on the right (up and down for smaller devices).
 * It handles the result of the send message action from the form
 */
function AboutModal() {
  const dispatch = useDispatch();
  const intl = useIntl();

  const {
    visible,
    theme,
    pageLoading,
    emailError,
    emailErrorValue
  } = useSelector(({ Website, Email }: RootReducerState) => ({
    visible: Website.aboutModalVisible,
    theme: Website.theme,
    pageLoading: Website.pageLoading,
    emailError: Email.emailError,
    emailErrorValue: Email.emailErrorValue
  }));

  // closes the modal
  const closeModal = () => {
    dispatch(websiteActions.toggleAboutModalVisible());
  };

  // if the page is loading and email changed, respond accordingly
  // triggered by the emailError update
  const handleSendEmailResponse = () => {
    if (pageLoading) {
      // if the email error is defined, then an error happened
      if (emailError) {
        handleFirstMessageFail(emailErrorValue);
      }
      // if the email error is false, then the email was sent with success
      else if (emailError === false) {
        handleFirstMessageSuccess();
      }
    }
  };
  useEffect(handleSendEmailResponse, [emailError]);

  // handles a successful message sent
  const handleFirstMessageSuccess = () => {
    // show notification to inform user that the email was successfully sent
    notification.success({
      message: intl.formatMessage({ id: "contact.success" }),
      duration: 5
    });
    // close modal
    dispatch(websiteActions.toggleAboutModalVisible());
    // remove loading
    dispatch(websiteActions.removePageLoading());
  };

  // handles an error at message send
  const handleFirstMessageFail = (err: Error & { status: number }) => {
    // show notification to inform user that the email was not sent
    notification.error({
      message: intl.formatMessage({ id: "contact.error.message1" }),
      // if the error comes with a status code, then show it
      description: err?.status ? (
        <span>
          {intl.formatMessage({ id: "contact.error.message2" })}
          {err.status}
        </span>
      ) : null,
      duration: 5
    });
    // remove the page loading (but do not close the modal)
    dispatch(websiteActions.removePageLoading());
  };

  return visible ? (
    <Modal
      visible
      // user can only close the modal if the modal is not loading
      onCancel={() => (pageLoading ? null : closeModal())}
      footer={null}
      width={"80%"}
      wrapClassName="react-portifolio"
      maskClosable={false}
    >
      <Spin spinning={pageLoading}>
        <Row className={`aboutModalContainer ${theme}`}>
          {/* About Me info */}
          <Col className="aboutMeCol" xs={24} sm={24} md={14}>
            <AboutMe />
          </Col>
          {/* Contact Me Form */}
          <Col className="contactMeCol" xs={24} sm={24} md={10}>
            <ContactMeForm />
          </Col>
        </Row>
      </Spin>
    </Modal>
  ) : null;
}

export default memo(AboutModal);
