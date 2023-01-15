import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormContainer from "./common/FormContainer.jsx";

import { sendLoginDetails, createToken } from "../services/request.js";
import { doesTokenExist, saveToken } from "../services/token.js";

import phoneImage from "../assets/img/login-phone.svg";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * Redirect to homepage if token exist
     */
    if (doesTokenExist()) {
      navigate("/");
    }
  });

  const handleSubmit = async (event, data) => {
    event.preventDefault();

    const { username, password } = data;

    const response = await sendLoginDetails(username, password);

    const { success, error } = response;

    if (success) {
      const { userID } = response;

      const token = await createToken(userID);

      saveToken(token);

      navigate("/");
    } else if (error) {
      console.error(error);

      /**
       * In the web page show, the error message
       */
    }
  };

  const inputFields = [
    { name: "Username", type: "text", icon: "fa-solid fa-user" },
    { name: "Password", type: "password" },
  ];

  return (
    <div id="login">
      <section className="side">
        <img src={phoneImage} alt="" />
      </section>

      <FormContainer
        title="Welcome Back"
        message="Please, provide login credential to proceed and have access to
            AidSys"
        formType="Login"
        onSubmit={handleSubmit}
        inputFields={inputFields}
      >
        <Link to={`/signup`}>Don't have one? Create one</Link>
      </FormContainer>
    </div>
  );
};

export default Login;
