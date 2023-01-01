import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormContainer from "./common/FormContainer.jsx";

import { sendSignupDetails } from "../services/request";
import { doesTokenExist, saveToken } from "../services/token";

import phoneImage from "../assets/img/login-phone.svg";

const Signup = () => {
  /**
   * navigate for redirection purpose
   */
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * Redirect to homepage if token exist
     */
    if (doesTokenExist()) {
      navigate("/");
    }
  });

  const inputFields = [
    { name: "Username", type: "text", icon: "fa-solid fa-user" },
    { name: "College", type: "text", icon: "fa-solid fa-graduation-cap" },
    { name: "Phone", type: "text", icon: "fa-solid fa-phone" },
    { name: "Email", type: "email", icon: "fa-solid fa-envelope" },
    { name: "Password", type: "password", icon: "fa-solid fa-lock" },
  ];

  const handleSubmit = async (event, data) => {
    /**
     * prevent default behaviour of submission
     * send the login data to server
     */
    event.preventDefault();

    const { username, password, college, email, phone } = data;

    const response = await sendSignupDetails(
      username,
      password,
      college,
      email,
      phone
    );

    const { success, error, token } = response;

    if (success) {
      saveToken(token);

      navigate("/");
    } else if (error) {
      console.error(error);
      /**
       * In the web page show, the error message
       */
    }
  };

  return (
    <div id="signup">
      <section className="side">
        <img src={phoneImage} alt="" />
      </section>

      <FormContainer
        title="Welcome"
        message="Please, provide below credential to create account in AidSys
        "
        formType="Signup"
        onSubmit={handleSubmit}
        inputFields={inputFields}
      >
        <Link to={`/login`}>Have one? Log in</Link>
      </FormContainer>
    </div>
  );
};

export default Signup;
