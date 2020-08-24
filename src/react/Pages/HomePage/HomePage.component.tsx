/* eslint-disable react/forbid-component-props */
import { Col, Row } from "antd";
import React, { memo, useEffect, useState } from "react";
import { RootReducerState } from "../../../global";
import { useSelector } from "react-redux";

const AboutModal = React.lazy(() =>
  import("../../Components/AboutMeContainer/AboutModal/AboutModal.component")
);
const AboutTitle = React.lazy(() =>
  import("../../Components/AboutMeContainer/AboutTitle/AboutTitle.component")
);

const Connections = React.lazy(() =>
  import("../../Components/Links/Connections.component")
);

const DeveloperTitle = React.lazy(() =>
  import("../../Components/Titles/DeveloperTitle/DeveloperTitle.component")
);

const LanguageSwitch = React.lazy(() =>
  import(
    "../../Components/Configurations/LanguageSwitch/LanguageSwitch.component"
  )
);

const LightMode = React.lazy(() =>
  import("../../Components/Configurations/LightMode/LightMode.component")
);

const ProjectsArrow = React.lazy(() =>
  import("../../Components/Projects/ProjectsArrow/ProjectsArrow.component")
);

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
            <Row style={{ height: "100%" }} justify="start" align="middle">
              <h1 className={`initials ${animation ? "showInitials" : ""}`}>
                PS
              </h1>
              <DeveloperTitle
                className={animation ? "showDeveloperName" : ""}
              />
            </Row>
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

export default memo(HomePage);
