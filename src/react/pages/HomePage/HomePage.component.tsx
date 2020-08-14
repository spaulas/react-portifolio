import { Col, Row } from "antd";
import AboutModal from "../../components/AboutModal.component";
import BackgroundInitials from "../../components/BackgroundInitials.component";
import Connections from "../../components/Connections.component";
import DeveloperTitle from "../../components/DeveloperTitle.component";
import LightMode from "../../components/LightMode.component";
import React from "react";
import WorksArrow from "../../components/WorksArrow.component";

function HomePage() {
  const theme = localStorage.getItem("theme") || "theme-1";
  return (
    <div className={`homePage ${theme}`}>
      <BackgroundInitials />
      <div className="overBackground">
        <Row className="topRow">
          <LightMode />
        </Row>
        <Row className="middleRow">
          <Col span={2}>
            <AboutModal />
          </Col>
          <Col span={20}>
            <DeveloperTitle />
          </Col>
          <Col span={2}>
            <Connections />
          </Col>
        </Row>
        <Row className="bottomRow">
          <WorksArrow />
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
