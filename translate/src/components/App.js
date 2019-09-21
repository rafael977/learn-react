import React from "react";

class App extends React.Component {
  state = {
    language: "english"
  };

  onLanguageSelected = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageSelected("english")}
          />
          <i
            className="flag cn"
            onClick={() => this.onLanguageSelected("chinese")}
          />
        </div>
      </div>
    );
  }
}

export default App;
