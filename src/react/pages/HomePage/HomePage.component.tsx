import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import AboutModal from "../../components/AboutModal.component";
import AboutTitle from "../../components/AboutTitle.component";
import BackgroundInitials from "../../components/BackgroundInitials.component";
import Connections from "../../components/Connections.component";
import DeveloperTitle from "../../components/DeveloperTitle.component";
import LanguageSwitch from "../../components/LanguageSwitch.component";
import LightMode from "../../components/LightMode.component";
import ProjectsArrow from "../../components/ProjectsArrow.component";
import { RootReducerState } from "../../../global";
import { useSelector } from "react-redux";

function HomePage() {
  const { theme } = useSelector(({ Website }: RootReducerState) => ({
    theme: Website.theme
  }));

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, []);

  return (
    <div className={`homePage ${theme}`}>
      <BackgroundInitials className={animation ? "showInitials" : ""} />
      <div className="overBackground">
        <Row className="topRow">
          <LanguageSwitch />
          <LightMode />
        </Row>
        <Row className="middleRow">
          <Col span={1}>
            <AboutTitle />
          </Col>
          <Col span={21}>
            <DeveloperTitle className={animation ? "showDeveloperName" : ""} />
          </Col>
          <Col span={2}>
            <Connections />
          </Col>
        </Row>
        <Row className="bottomRow" justify="center">
          <ProjectsArrow />
        </Row>
      </div>
      <AboutModal />
    </div>
  );
}

export default HomePage;
