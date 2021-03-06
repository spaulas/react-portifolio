import React, { memo } from "react";
import ReactGA from "react-ga";
import { Tooltip } from "antd";

function Connections() {
  return (
    <div className="connectionsContainer">
      <Tooltip placement="left" title="Linkedin">
        <img
          className="connectionIcon"
          src={require("../../../images/icons/linkedin.svg")}
          alt="Linkedin"
          onClick={() => {
            ReactGA.event({
              category: "External Links",
              action: "open linkedin"
            });
            window.open("https://www.linkedin.com/in/spaulas/?locale=en_US");
          }}
        />
      </Tooltip>

      <Tooltip placement="left" title="Github">
        <img
          className="connectionIcon"
          src={require("../../../images/icons/github.svg")}
          alt="Github"
          onClick={() => {
            ReactGA.event({
              category: "External Links",
              action: "open github"
            });
            window.open("https://github.com/spaulas");
          }}
        />
      </Tooltip>
    </div>
  );
}

export default memo(Connections);
