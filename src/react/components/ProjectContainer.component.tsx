import { Col, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

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
  const [firstAnimation, setFirstAnimation] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [animateShowMore, setAnimateShowMore] = useState(false);

  const showMore = () => {
    setAnimateShowMore(true);
    setTimeout(() => {
      setShowInfo(true);
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false);
    }, 2000);
  }, []);

  const handleClick = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      showMore();
    }
  };

  return (
    <LazyLoad height={"100%"} once>
      <div
        className={`mainProjectDisplay ${
          firstAnimation ? "mainProjectDisplayFirstAnimation" : ""
        }`}
      >
        <img
          className="mainProjectImage"
          src={require(`../../images/projects/${mainImage}`)}
          alt=""
        />
        <span
          className={`mainProjectTitle ${
            animateShowMore ? "mainProjectTitleAnimation" : ""
          } ${firstAnimation ? "mainProjectTitleFirstAnimation" : ""}`}
        >
          {title}
        </span>
        <div
          className={`showMore ${animateShowMore ? "showMoreAnimation" : ""} ${
            firstAnimation ? "showMoreFirstAnimation" : ""
          }`}
          onClick={handleClick}
        >
          <span>{showInfo ? "Close" : "Show More"}</span>
        </div>
      </div>

      {showInfo ? (
        <div
          className={`infoProjectDisplay ${
            animateShowMore ? "infoProjectDisplayShowAnimation" : ""
          }`}
        >
          <Row>
            <Col span={14}>
              <Row>
                <span
                  className={`infoProjectDescription ${
                    animateShowMore ? "infoProjectDescriptionShowAnimation" : ""
                  }`}
                >
                  {description}
                </span>
              </Row>
              <Row
                className={`infoProjectTechRow ${
                  animateShowMore ? "infoProjectTechRowShowAnimation" : ""
                }`}
                justify="center"
              >
                {techs.map((tech, index) => (
                  <Col key={`tech_${index}`} span={24 / techs.length}>
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
                  className={`infoProjectLink ${
                    animateShowMore ? "infoProjectLinkShowAnimation" : ""
                  }`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </Row>
              <Row justify="center">
                <a
                  className={`infoProjectLink ${
                    animateShowMore ? "infoProjectLinkShowAnimation" : ""
                  }`}
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
                className={`infoProjectImage ${
                  animateShowMore ? "infoProjectImageShowAnimation" : ""
                }`}
                src={require(`../../images/projects/${sideImage}`)}
                alt=""
              />
            </Col>
          </Row>
        </div>
      ) : null}
    </LazyLoad>
  );
}

export default ProjectContainer;
