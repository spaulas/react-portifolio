import React from "react";
import { useDispatch } from "react-redux";
import websiteActions from "../../redux/website/website.actions";

function LightMode() {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(websiteActions.toggleLightMode());
  };

  return (
    <img
      className="lightMode"
      src={require("../../images/icons/lightMode.svg")}
      alt=""
      onClick={toggleTheme}
    />
  );
}

export default LightMode;
