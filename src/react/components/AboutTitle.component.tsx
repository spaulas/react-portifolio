import { FormattedMessage } from "react-intl";
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
        <FormattedMessage id="about.title" />
      </span>
    </div>
  );
}

export default AboutTitle;
