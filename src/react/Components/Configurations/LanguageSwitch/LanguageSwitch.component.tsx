import { useDispatch, useSelector } from "react-redux";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { RootReducerState } from "../../../../global";
import { Select } from "antd";
import websiteActions from "../../../../redux/website/website.actions";

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
  );
}

export default LanguageSwitch;
