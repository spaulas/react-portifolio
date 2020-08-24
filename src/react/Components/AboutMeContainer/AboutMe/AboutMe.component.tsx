import { Col, Row } from "antd";
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
import moment from "moment";

function AboutMe() {
  const age = moment().diff("1995-01-12", "years");
  return (
    <Row>
      <Col xs={24} sm={24} md={10}>
        <LazyLoad>
          <img
            className="developer"
            src={require("../../../../images/developer.png")}
            alt=""
          />
        </LazyLoad>
      </Col>
      <Col xs={24} sm={24} md={14} className="aboutTextContainer">
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
