import React from "react";

function LightMode() {
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "theme-1";
    console.log("current theme = ", currentTheme);
    let newTheme;

    if (currentTheme === "theme-1") {
      newTheme = "theme-2";
    } else {
      newTheme = "theme-1";
    }
    console.log("new theme = ", newTheme);

    localStorage.setItem("theme", newTheme);
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
