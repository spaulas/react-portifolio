import React from "react";
import { Tooltip } from "antd";

function Connections() {
  return (
    <div className="connectionsContainer">
      <Tooltip placement="right" title="Linkedin">
        <img
          className="connectionIcon"
          src={require("../../../images/icons/linkedin.svg")}
          alt="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/spaulas/?locale=en_US")
          }
        />
      </Tooltip>

      <Tooltip placement="right" title="Github">
        <img
          className="connectionIcon"
          src={require("../../../images/icons/github.svg")}
          alt="Github"
          onClick={() => window.open("https://github.com/spaulas")}
        />
      </Tooltip>
    </div>
  );
}

export default Connections;
