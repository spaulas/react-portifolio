import React from "react";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";
import { FormattedMessage } from "react-intl";

function LightMode() {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(websiteActions.toggleLightMode());
  };

  return (
    <Tooltip title={<FormattedMessage id="configurations.theme" />}>
      <img
        className="lightMode"
        src={require("../../../../images/icons/lightMode.svg")}
        alt=""
        onClick={toggleTheme}
      />
    </Tooltip>
  );
}

export default LightMode;
