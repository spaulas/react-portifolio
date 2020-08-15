import { Col, Row, Tooltip } from "antd";
import React, { useState } from "react";

interface ProjectContainerProps {
  title: string;
  description: string;
  techs: Array<{ source: string; title: string }>;
  link: string;
  github: string;
  mainImage: string;
  sideImage: string;
}

function ProjectContainer({
  title,
  description,
  techs,
  link,
  github,
  mainImage,
  sideImage
}: ProjectContainerProps) {
  const [showInfo, setShowInfo] = useState(false);
  return showInfo ? (
    <div className="infoProjectDisplay">
      <Row>
        <Col span={14}>
          <Row>
            <span className="infoProjectTitle">{title}</span>
          </Row>
          <Row>
            <span className="infoProjectDescription">{description}</span>
          </Row>
          <Row className="infoProjectTechRow" justify="center">
            {techs.map(tech => (
              <Col span={24 / techs.length}>
                <Tooltip title={tech.title}>
                  <img
                    className="infoProjectTech"
                    src={require(`../../images/techs/${tech.source}`)}
                    alt=""
                  />
                </Tooltip>
              </Col>
            ))}
          </Row>
          <Row justify="center">
            <a
              className="infoProjectLink"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </Row>
          <Row justify="center">
            <a
              className="infoProjectLink"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repository
            </a>
          </Row>
        </Col>
        <Col span={10}>
          <img
            className="infoProjectImage"
            src={require(`../../images/projects/${sideImage}`)}
            alt=""
          />
        </Col>
      </Row>
      <div className="showLess" onClick={() => setShowInfo(false)}>
        <span>Close</span>
      </div>
    </div>
  ) : (
    <div className="mainProjectDisplay">
      <img
        className="mainProjectImage"
        src={require(`../../images/projects/${mainImage}`)}
        alt=""
      />
      <span className="mainProjectTitle">{title}</span>
      <div className="showMore" onClick={() => setShowInfo(true)}>
        <span>Show More</span>
      </div>
    </div>
  );
}

export default ProjectContainer;
