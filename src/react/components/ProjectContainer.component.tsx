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
  const [animateShowLess, setAnimateShowLess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false);
    }, 2000);
  }, []);

  const handleClick = () => {
    if (showInfo) {
      setAnimateShowMore(false);
      setAnimateShowLess(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 2000);
    } else {
      setAnimateShowLess(false);
      setAnimateShowMore(true);
      setTimeout(() => {
        setShowInfo(true);
      }, 400);
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
          } ${firstAnimation ? "mainProjectTitleFirstAnimation" : ""} ${
            animateShowLess ? "mainProjectTitleBackAnimation" : ""
          }`}
        >
          {title}
        </span>
        <div
          className={`showMore ${animateShowMore ? "showMoreAnimation" : ""} ${
            firstAnimation ? "showMoreFirstAnimation" : ""
          } ${animateShowLess ? "showMoreBackAnimation" : ""}`}
          onClick={handleClick}
        >
          <span>{showInfo ? "Close" : "Show More"}</span>
        </div>
      </div>

      {showInfo ? (
        <div
          className={`infoProjectDisplay ${
            animateShowMore ? "infoProjectDisplayShowAnimation" : ""
          } ${animateShowLess ? "infoProjectDisplayHideAnimation" : ""}`}
        >
          <Row>
            <Col
              xs={24}
              sm={24}
              md={14}
              className={`descriptionContainer ${
                animateShowMore ? "descriptionContainerShowAnimation" : ""
              } ${animateShowLess ? "descriptionContainerHideAnimation" : ""}`}
            >
              <Row className="descriptionRow">
                <span
                  className={`infoProjectDescription ${
                    animateShowMore ? "infoProjectDescriptionShowAnimation" : ""
                  } ${
                    animateShowLess ? "infoProjectDescriptionHideAnimation" : ""
                  }`}
                >
                  {description}
                </span>
              </Row>
              <Row
                className={`infoProjectTechRow ${
                  animateShowMore ? "infoProjectTechRowShowAnimation" : ""
                } ${animateShowLess ? "infoProjectTechRowHideAnimation" : ""}`}
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
                  } ${animateShowLess ? "infoProjectLinkHideAnimation" : ""}`}
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
                  } ${animateShowLess ? "infoProjectLinkHideAnimation" : ""}`}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repository
                </a>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={10}>
              <img
                className={`infoProjectImage ${
                  animateShowMore ? "infoProjectImageShowAnimation" : ""
                } ${animateShowLess ? "infoProjectImageHideAnimation" : ""}`}
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
