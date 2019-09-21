import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const renderSubmit = lan => {
  return lan === "english" ? "Submit" : "提交";
};

const renderButton = color => {
  console.log(color);

  return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {lan => renderSubmit(lan)}
      </LanguageContext.Consumer>
    </button>
  );
};

const Button = () => {
  return (
    <ColorContext.Consumer>
      {color => renderButton(color)}
    </ColorContext.Consumer>
  );
};

export default Button;
