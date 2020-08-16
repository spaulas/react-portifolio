import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import AboutModal from "../../Components/AboutMeContainer/AboutModal/AboutModal.component";
import AboutTitle from "../../Components/AboutMeContainer/AboutTitle/AboutTitle.component";
import BackgroundInitials from "../../Components/Titles/BackgroundInitials/BackgroundInitials.component";
import Connections from "../../Components/Links/Connections.component";
import DeveloperTitle from "../../Components/Titles/DeveloperTitle/DeveloperTitle.component";
import LanguageSwitch from "../../Components/Configurations/LanguageSwitch/LanguageSwitch.component";
import LightMode from "../../Components/Configurations/LightMode/LightMode.component";
import ProjectsArrow from "../../Components/Projects/ProjectsArrow/ProjectsArrow.component";
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
        <Row className="topRow" align="middle">
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
