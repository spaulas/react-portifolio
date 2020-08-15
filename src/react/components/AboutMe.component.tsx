import { Col, Row } from "antd";
import React from "react";
import moment from "moment";

function AboutMe() {
  var age = moment().diff("1995-01-12", "years");
  return (
    <Row>
      <Col xs={24} sm={24} md={10}>
        <img
          className="developer"
          src={require("../../images/developer.png")}
          alt=""
        />
      </Col>
      <Col xs={24} sm={24} md={14} className="aboutTextContainer">
        <p>I am Paula Santos, a {age}-year-old front-end developer.</p>
        <p>
          I am currently working at{" "}
          <a
            href="https://en.wavecom.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wavecom
          </a>
          , a Portuguese Communications Engineering company founded in 2000.
          There, I have developed my skills as a developer, starting with React
          and Redux-Saga to then begin implementing tests with Jest and Cypress.
          All the while working in a cross-functional team supported with the
          Agile methodology.
        </p>
        <p>
          I have been working on my Github page, creating new projects to enable
          other companies to have an idea of my skills as a developer. And this
          website's goal is to group every project.
        </p>
        <p>
          I am currently looking for a remote job as a web or front-end
          developer. I have stumbled across so many job opportunities, all
          scattered around Europe with such a mixture of cultures. I can not
          wait to start this adventure!
        </p>
      </Col>
    </Row>
  );
}

export default AboutMe;
