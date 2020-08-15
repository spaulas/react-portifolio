import { Col, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "./AboutMe.component";
import ContactMe from "./ContactMe.component";
import React from "react";
import { RootReducerState } from "../../global";
import websiteAction from "../../redux/website/website.actions";

function AboutModal() {
  const dispatch = useDispatch();

  const { visible, theme } = useSelector(({ Website }: RootReducerState) => ({
    visible: Website.aboutModalVisible,
    theme: Website.theme
  }));

  const closeModal = () => {
    dispatch(websiteAction.toggleAboutModalVisible());
  };

  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      footer={null}
      width={"80%"}
      wrapClassName="react-portifolio"
      maskClosable={false}
    >
      <Row className={`aboutModalContainer ${theme}`}>
        <Col className="aboutMeCol" span={14}>
          <AboutMe />
        </Col>

        <Col className="contactMeCol" span={10}>
          <ContactMe />
        </Col>
      </Row>
    </Modal>
  );
}

export default AboutModal;
