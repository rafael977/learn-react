import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  return (
    <LanguageContext.Consumer>
      {value =>
        value === "english" ? (
          <button className="ui button primary">Submit</button>
        ) : (
          <button className="ui button primary">提交</button>
        )
      }
    </LanguageContext.Consumer>
  );
};

export default Button;
