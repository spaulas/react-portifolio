import React, { PropsWithChildren, memo } from "react";
import { ExplicitAny } from "../../../global";
import { Row } from "antd";

/**
 * Button to start the game, by redirecting to the /game location
 */

interface MenuButtonProps {
  className?: string;
  onClick: ExplicitAny;
}

function MenuButton({
  className,
  onClick,
  children
}: PropsWithChildren<MenuButtonProps>) {
  return (
    <Row className="buttonSpaceRow" align="middle" justify="center">
      <div
        tabIndex={0}
        role="button"
        aria-roledescription="animatedButton"
        className={`animatedButton divButton ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Row>
  );
}

export default memo(MenuButton);
