import React from "react";
import LangaugeContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LangaugeContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "名字";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
