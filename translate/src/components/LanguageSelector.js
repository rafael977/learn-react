import React from "react";
import LangauageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LangauageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageSelected("english")}
        />
        <i
          className="flag cn"
          onClick={() => this.context.onLanguageSelected("chinese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
