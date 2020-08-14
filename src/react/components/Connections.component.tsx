import React from "react";

function Connections() {
  return (
    <div className="connectionsContainer">
      <img
        className="connectionIcon"
        src={require("../../images/icons/linkedin.svg")}
        alt="Linkedin"
        onClick={() => window.open("https://www.linkedin.com/in/spaulas/?locale=en_US")}
      />

      <img
        className="connectionIcon"
        src={require("../../images/icons/github.svg")}
        alt="Github"
        onClick={() => window.open("https://github.com/spaulas")}
      />
    </div>
  );
}

export default Connections;
