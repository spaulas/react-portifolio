import { Col, Row, Tooltip } from "antd";
import React, { ReactNode, memo, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
import ReactGA from "react-ga";

interface ProjectContainerProps {
  title: string;
  description: ReactNode;
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
      ReactGA.event({
        category: "Animation",
        action: "show less"
      });
      setAnimateShowMore(false);
      setAnimateShowLess(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 2000);
    } else {
      ReactGA.event({
        category: "Animation",
        action: "show more"
      });
      setAnimateShowLess(false);
      setAnimateShowMore(true);
      setTimeout(() => {
        setShowInfo(true);
      }, 400);
    }
  };

  return (
    <LazyLoad>
      <Row className="projectContainer" justify="center" align="middle">
        <Col
          className={`mainProjectDisplay ${
            firstAnimation ? "mainProjectDisplayFirstAnimation" : ""
          }`}
        >
          <img
            className="mainProjectImage"
            src={require(`../../../../images/projects/${mainImage}`)}
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
            className={`showMore ${
              animateShowMore ? "showMoreAnimation" : ""
            } ${firstAnimation ? "showMoreFirstAnimation" : ""} ${
              animateShowLess ? "showMoreBackAnimation" : ""
            }`}
            onClick={handleClick}
          >
            <span>
              {showInfo ? (
                <FormattedMessage id="project.close" />
              ) : (
                <FormattedMessage id="project.showMore" />
              )}
            </span>
          </div>
        </Col>

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
                } ${
                  animateShowLess ? "descriptionContainerHideAnimation" : ""
                }`}
              >
                <Row className="descriptionRow">
                  <span
                    className={`infoProjectDescription ${
                      animateShowMore
                        ? "infoProjectDescriptionShowAnimation"
                        : ""
                    } ${
                      animateShowLess
                        ? "infoProjectDescriptionHideAnimation"
                        : ""
                    }`}
                  >
                    {description}
                  </span>
                </Row>
                <Row
                  className={`infoProjectTechRow ${
                    animateShowMore ? "infoProjectTechRowShowAnimation" : ""
                  } ${
                    animateShowLess ? "infoProjectTechRowHideAnimation" : ""
                  }`}
                  justify="center"
                >
                  {techs.map((tech, index) => (
                    <Col
                      key={`tech_${index}`}
                      span={24 / techs.length}
                      className="techcol"
                    >
                      <Tooltip title={tech.title}>
                        <img
                          className="infoProjectTech"
                          src={require(`../../../../images/techs/${tech.source}`)}
                          alt=""
                        />
                      </Tooltip>
                    </Col>
                  ))}
                </Row>
                <Row justify="center">
                  <Tooltip
                    placement="top"
                    title={<FormattedMessage id="link.website" />}
                  >
                    <a
                      className={`infoProjectLink ${
                        animateShowMore ? "infoProjectLinkShowAnimation" : ""
                      } ${
                        animateShowLess ? "infoProjectLinkHideAnimation" : ""
                      }`}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        ReactGA.event({
                          category: `Project: ${title}`,
                          action: "open website"
                        })
                      }
                    >
                      <FormattedMessage id="project.website" />
                    </a>
                  </Tooltip>
                </Row>
                <Row justify="center">
                  <Tooltip
                    placement="top"
                    title={<FormattedMessage id="link.repository" />}
                  >
                    <a
                      className={`infoProjectLink ${
                        animateShowMore ? "infoProjectLinkShowAnimation" : ""
                      } ${
                        animateShowLess ? "infoProjectLinkHideAnimation" : ""
                      }`}
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        ReactGA.event({
                          category: `Project: ${title}`,
                          action: "open github"
                        })
                      }
                    >
                      <FormattedMessage id="project.github" />
                    </a>
                  </Tooltip>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <img
                  className={`infoProjectImage ${
                    animateShowMore ? "infoProjectImageShowAnimation" : ""
                  } ${animateShowLess ? "infoProjectImageHideAnimation" : ""}`}
                  src={require(`../../../../images/projects/${sideImage}`)}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        ) : null}
      </Row>
    </LazyLoad>
  );
}

export default memo(ProjectContainer);
