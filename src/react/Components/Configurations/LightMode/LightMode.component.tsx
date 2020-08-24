import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
import React from "react";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

function LightMode() {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(websiteActions.toggleLightMode());
  };

  return (
    <LazyLoad>
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
    </LazyLoad>
  );
}

export default LightMode;
