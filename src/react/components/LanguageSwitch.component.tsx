import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { RootReducerState } from "../../global";
import { Select } from "antd";
import websiteActions from "../../redux/website/website.actions";

function LanguageSwitch() {
  const dispatch = useDispatch();

  const { language } = useSelector(({ Website }: RootReducerState) => ({
    language: Website.language
  }));

  const changeLanguage = (language: string) => {
    dispatch(websiteActions.changeLanguage(language));
  };

  return <Select></Select>;
}

export default LanguageSwitch;
