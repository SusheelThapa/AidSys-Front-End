import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormContainer from "./common/FormContainer.jsx";

// import { sendLoginDetails, createToken } from "../services/request.js";

import { sendLoginDetails } from "../services/auth.js";
import { doesTokenExist, saveToken, createToken } from "../services/token.js";

import phoneImage from "../assets/img/login-phone.svg";

import "../assets/css/auth.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (doesTokenExist()) {
      navigate("/");
    }
  });

  const handleSubmit = async (event, data) => {
    event.preventDefault();

    const { username, password } = data;

    const { _id } = await sendLoginDetails(username, password);

    if (_id) {
      const token = await createToken(_id);

      saveToken(token);

      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  };

  const inputFields = [
    { name: "Username", type: "text", icon: "fa-solid fa-user" },
    { name: "Password", type: "password" },
  ];

  return (
    <div id="auth">
      <section className="auth-side">
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
