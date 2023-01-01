import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const { formType, onSubmit, inputFields } = props;

  const revealPassword = () => {
    /**
     * Change the icon
     */
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
          <React.Fragment>
            <div key={field.name} className="form-control">
              {field.type !== "password" && (
                <React.Fragment>
                  <input type={field.type} placeholder={field.name} />
                  <FontAwesomeIcon icon={field.icon} />
                </React.Fragment>
              )}

              {field.type === "password" && (
                <React.Fragment>
                  <input type="password" placeholder="Password" />
                  <FontAwesomeIcon onClick={revealPassword} icon={field.icon} />
                </React.Fragment>
              )}
            </div>
          </React.Fragment>
        );
      })}
      <button className="submit">{formType}</button>
    </form>
  );
};

export default Form;
