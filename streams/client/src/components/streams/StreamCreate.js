import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError = meta => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
    return null;
  };
  renderInput = ({ input, label, meta }) => {
    let className = `field ${meta.touched && meta.error ? "error" : ""}`;

    return (
      <div className={`field ${className}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = "You must enter title";
  }

  if (!formValues.description) {
    error.description = "You must enter description";
  }

  return error;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
