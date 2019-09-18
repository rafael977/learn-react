import React from "react";
import ReactDOM from "react-dom";

import history from "./history";

export default props => {
  return ReactDOM.createPortal(
    <div className="ui active dimmer" onClick={() => history.push("/")}>
      <div className="ui active modal" onClick={e => e.stopPropagation()}>
        <div className="ui header">This is modal header</div>
        <div className="content">Modal content</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
