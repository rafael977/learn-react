import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../../modal";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDeleteClicked = () => {
    const { id } = this.props.match.params;
    this.props.deleteStream(id);
  };

  renderActions = (
    <React.Fragment>
      <button className="ui button negative" onClick={this.onDeleteClicked}>
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  onDismiss = () => {
    history.push("/");
  };

  render() {
    let modalContent = "Are you sure to delete this stream?";
    if (this.props.stream) {
      modalContent = `Are you sure to delete this stream with title: ${this.props.stream.title}?`;
    }

    return (
      <div>
        <Modal
          title="Delete Stream"
          content={modalContent}
          actions={this.renderActions}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
