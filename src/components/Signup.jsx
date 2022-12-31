import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { sendSignupDetails } from "../services/request";
import { doesTokenExist, saveToken } from "../services/token";

import phoneImage from "../assets/img/login-phone.svg";
import Form from "./common/Form";

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
    { name: "Username", type: "text" },
    { name: "College", type: "text" },
    { name: "Phone", type: "text" },
    { name: "Email", type: "email" },
    { name: "Password", type: "password" },
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

      <section className="main">
        <div className="login-container">
          <p className="title">Signup</p>
          <div className="separator"></div>
          <p className="welcome-message">
            Please, provide below credential to create account in AidSys
          </p>

          <Form
            formType="Signup"
            onSubmit={handleSubmit}
            inputFields={inputFields}
          />
          <Link to={"/login"}>Have one? Login</Link>
        </div>
      </section>
    </div>
  );
};

export default Signup;
