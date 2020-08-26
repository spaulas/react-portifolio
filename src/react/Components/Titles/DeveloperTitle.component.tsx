import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

interface DeveloperTitleProps {
  className?: string;
}

function DeveloperTitle({ className = "" }: DeveloperTitleProps) {
  return (
    <div className={`developerTitleContainer ${className}`}>
      <h1 className="developerName">Paula Santos</h1>
      <h2 className="developerJob">
        <FormattedMessage id="developer.title" />
      </h2>
    </div>
  );
}

export default memo(DeveloperTitle);
