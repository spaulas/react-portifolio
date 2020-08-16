import { FormattedMessage } from "react-intl";
import React from "react";

interface DeveloperTitleProps {
  className?: string;
}

function DeveloperTitle({ className = "" }: DeveloperTitleProps) {
  return (
    <div className={`developerTitleContainer ${className}`}>
      <h1 className="developerName">Paula Santos</h1>
      <h3 className="developerJob"><FormattedMessage id="developer.title" /></h3>
    </div>
  );
}

export default DeveloperTitle;
