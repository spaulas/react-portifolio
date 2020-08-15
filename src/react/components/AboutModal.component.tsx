import { Col, Modal, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "./AboutMe.component";
import ContactMe from "./ContactMe.component";
import React from "react";
import { RootReducerState } from "../../global";
import websiteAction from "../../redux/website/website.actions";

function AboutModal() {
  const dispatch = useDispatch();

  const { visible, theme, pageLoading } = useSelector(
    ({ Website }: RootReducerState) => ({
      visible: Website.aboutModalVisible,
      theme: Website.theme,
      pageLoading: Website.pageLoading
    })
  );

  const closeModal = () => {
    dispatch(websiteAction.toggleAboutModalVisible());
  };

  return visible ? (
    <Modal
      visible
      onCancel={closeModal}
      footer={null}
      width={"80%"}
      wrapClassName="react-portifolio"
      maskClosable={false}
    >
      <Spin spinning={pageLoading} /* className={theme} */>
        <Row className={`aboutModalContainer ${theme}`}>
          <Col className="aboutMeCol" span={14}>
            <AboutMe />
          </Col>

          <Col className="contactMeCol" span={10}>
            <ContactMe />
          </Col>
        </Row>
      </Spin>
    </Modal>
  ) : null;
}

export default AboutModal;
