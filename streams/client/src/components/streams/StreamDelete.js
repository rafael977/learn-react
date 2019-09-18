import React from "react";

import Modal from "../../modal";

export default () => {
  const renderActions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure to delete this stream?"
        actions={renderActions}
      />
    </div>
  );
};
