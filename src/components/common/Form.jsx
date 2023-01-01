import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const { formType, onSubmit, inputFields } = props;
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
            <input
              type={field.type}
              placeholder={field.name}
              ref={field.ref}
              name={field.name}
            />
            <FontAwesomeIcon icon={field.icon} />
          </div>
        );
      })}
      <button className="submit">{formType}</button>
    </form>
  );
};

export default Form;
