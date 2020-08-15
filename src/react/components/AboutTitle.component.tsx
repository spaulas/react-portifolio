import React from "react";
import { useDispatch } from "react-redux";
import websiteActions from "../../redux/website/website.actions";

function AboutTitle() {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(websiteActions.toggleAboutModalVisible());
  };

  return (
    <div className="aboutContainer">
      <span className="aboutTitle" onClick={showModal}>
        About Me
      </span>
    </div>
  );
}

export default AboutTitle;
