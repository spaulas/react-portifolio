import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import ReactGA from "react-ga";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import websiteActions from "../../../../redux/website/website.actions";

function AboutTitle() {
  const dispatch = useDispatch();

  const showModal = () => {
    ReactGA.event({ category: "About Me", action: "open about me modal" });
    dispatch(websiteActions.toggleAboutModalVisible());
  };

  return (
    <div className="aboutTitleContainer">
      <Tooltip placement="right" title={<FormattedMessage id="link.aboutMe" />}>
        <span
          tabIndex={0}
          role="button"
          className="aboutTitle"
          onClick={showModal}
        >
          <FormattedMessage id="about.title" />
        </span>
      </Tooltip>
    </div>
  );
}

export default memo(AboutTitle);
