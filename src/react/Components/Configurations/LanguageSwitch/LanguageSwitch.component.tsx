import { Select, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { RootReducerState } from "../../../../global";
import websiteActions from "../../../../redux/website/website.actions";
import { FormattedMessage } from "react-intl";

const { Option } = Select;

function LanguageSwitch() {
  const dispatch = useDispatch();

  const { language } = useSelector(({ Website }: RootReducerState) => ({
    language: Website.language
  }));

  const changeLanguage = (language: string) => {
    dispatch(websiteActions.changeLanguage(language));
  };

  return (
    <Tooltip
      placement="leftBottom"
      title={<FormattedMessage id="configurations.languages" />}
    >
      <Select
        defaultValue="en-US"
        className="languageSwitch"
        value={language}
        onChange={changeLanguage}
      >
        <Option value="en-US">
          <ReactCountryFlag className="flags" countryCode="GB" />
        </Option>
        <Option value="pt-BR">
          <ReactCountryFlag className="flags" countryCode="BR" />
        </Option>
        <Option value="de-DE">
          <ReactCountryFlag className="flags" countryCode="DE" />
        </Option>
        <Option value="es-ES">
          <ReactCountryFlag className="flags" countryCode="ES" />
        </Option>
      </Select>
    </Tooltip>
  );
}

export default LanguageSwitch;
