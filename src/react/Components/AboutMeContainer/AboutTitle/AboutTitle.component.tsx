import { FormattedMessage } from "react-intl";
import React from "react";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

function AboutTitle() {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(websiteActions.toggleAboutModalVisible());
  };

  return (
    <div className="aboutContainer">
      <Tooltip placement="right" title={<FormattedMessage id="link.aboutMe" />}>
        <span className="aboutTitle" onClick={showModal}>
          <FormattedMessage id="about.title" />
        </span>
      </Tooltip>
    </div>
  );
}

export default AboutTitle;
