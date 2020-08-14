import { Col, Row } from "antd";
import AboutModal from "../../components/AboutModal.component";
import BackgroundInitials from "../../components/BackgroundInitials.component";
import Connections from "../../components/Connections.component";
import DeveloperTitle from "../../components/DeveloperTitle.component";
import LightMode from "../../components/LightMode.component";
import React from "react";
import WorksArrow from "../../components/WorksArrow.component";

function HomePage() {
  return (
    <div className="homePage">
      <BackgroundInitials />
      <Row>
        <LightMode />
      </Row>
      <Row>
        <Col>
          <AboutModal />
        </Col>
        <Col>
          <DeveloperTitle />
        </Col>
        <Col>
          <DeveloperTitle />
        </Col>
        <Col>
          <Connections />
        </Col>
      </Row>
      <Row>
        <WorksArrow />
      </Row>
    </div>
  );
}

export default HomePage;
