import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../assets/css/form.css";

const Form = ({ formType, onSubmit, inputFields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordInput = useRef();

  const revealPassword = () => {
    !showPassword === true
      ? (passwordInput.current.type = "text")
      : (passwordInput.current.type = "password");

    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={(event) => {
        const data = {};

        for (let index in inputFields) {
          data[inputFields[index].name.toLowerCase()] =
            event.target[index].value;
        }

        onSubmit(event, data);
      }}
      className="form"
    >
      {inputFields.map((field) => {
        return (
          <div key={field.name} className="form-control">
            {field.type !== "password" && (
              <React.Fragment>
                <input
                  className="form-input"
                  type={field.type}
                  placeholder={field.name}
                />
                <FontAwesomeIcon icon={field.icon} />
              </React.Fragment>
            )}

            {field.type === "password" && (
              <React.Fragment>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  ref={passwordInput}
                />
                <FontAwesomeIcon
                  onClick={() => {
                    revealPassword(field);
                  }}
                  icon={
                    showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                  }
                />
              </React.Fragment>
            )}
          </div>
        );
      })}
      <button className="form-submit">{formType}</button>
    </form>
  );
};

export default Form;
