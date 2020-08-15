import React, { PropsWithChildren } from "react";
import { ExplicitAny } from "../../global";
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
        className={`animatedButton divButton ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Row>
  );
}

export default MenuButton;
