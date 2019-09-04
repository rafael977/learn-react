import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GAUTH_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChanged(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChanged);
        });
    });
  }

  onAuthChanged = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClicked = () => {
    this.auth.signIn();
  };

  onSignOutClicked = () => {
    this.auth.signOut();
  };

  renderAuth = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = {
  signIn,
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
