import React from "react";

export default class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GAUTH_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChanged);
        });
    });
  }

  onAuthChanged = isSignedIn => {
    this.setState({ isSignedIn });
  };

  onSignInClicked = () => {
    this.auth.signIn();
  };

  onSignOutClicked = () => {
    this.auth.signOut();
  };

  renderAuth = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui google plus button"
          onClick={this.onSignOutClicked}
        >
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui google plus button"
          onClick={this.onSignInClicked}
        >
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  };

  render() {
    return this.renderAuth();
  }
}
