import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

function LightMode() {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(websiteActions.toggleLightMode());
  };

  return (
    <Tooltip
      placement="bottomLeft"
      title={<FormattedMessage id="configurations.theme" />}
    >
      <img
        className="lightMode"
        src={require("../../../../images/icons/lightMode.svg")}
        alt=""
        onClick={toggleTheme}
      />
    </Tooltip>
  );
}

export default memo(LightMode);
