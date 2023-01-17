import React from "react";

import Form from "./Form.jsx";

import "../../assets/css/formContainer.css";

const FormContainer = (props) => {
  const { title, message, formType, onSubmit, inputFields, children } = props;

  return (
    <section>
      <div className="form-container">
        <p className="form-container-title">{title}</p>
        <div className="form-container-separator"></div>
        <p className="form-container-welcome-message">{message}</p>

        <Form
          formType={formType}
          onSubmit={onSubmit}
          inputFields={inputFields}
        />
        {children}
      </div>
    </section>
  );
};

export default FormContainer;
