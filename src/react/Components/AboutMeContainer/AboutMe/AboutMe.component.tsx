import { Col, Row } from "antd";
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import moment from "moment";

/**
 *  About Me component contains developer image and about texts
 */
function AboutMe() {
  // calculate current age
  const age = moment().diff("1995-01-12", "years");

  return (
    <Row className="aboutMeContainer">
      {/* developer image column */}
      <Col xs={24} sm={24} md={10}>
        <img
          className="developerImage"
          src={require("../../../../images/developer.png")}
          alt=""
        />
      </Col>
      {/* about me paragraphs column */}
      <Col xs={24} sm={24} md={14} className="aboutMeTextContainer">
        <p>
          <FormattedMessage id="about.text01" /> {age}
          <FormattedMessage id="about.text02" />
        </p>
        <p>
          <FormattedMessage id="about.text03" />{" "}
          <a
            href="https://en.wavecom.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wavecom
          </a>
          <FormattedMessage id="about.text04" />
        </p>
        <p>
          <FormattedMessage id="about.text05" />
        </p>
        <p>
          <FormattedMessage id="about.text06" />
        </p>
      </Col>
    </Row>
  );
}

export default memo(AboutMe);
