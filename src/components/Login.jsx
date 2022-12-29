import React, { useRef } from "react";

import {sendLoginDetails} from "../services/sendPOSTReq.js";
import { saveToken } from "../services/token.js";

import "../assets/css/login.css";

import loginPhoneImage from "../assets/img/login-phone.svg";

const Login = () => {
  /**
   * username and password is used to keep track of value
   * inside username and password field.
   */
  const username = useRef();
  const password = useRef();

  const handleSubmit = async (event) => {
    /**
     * prevent default behaviour of submission
     * send the login data to server
     * retrieve the token
     * save the token
     */
    event.preventDefault();

    const response = await sendLoginDetails(
      username.current.value,
      password.current.value
    );

    const { token } = response;

    saveToken(token);
  };

  return (
    <div id="login">
      <section className="side">
        <img src={loginPhoneImage} alt="" />
      </section>

      <section className="main">
        <div className="login-container">
          <p className="title">Welcome back!</p>
          <div className="separator"></div>
          <p className="welcome-message">
            Please, provide login credential to proceed and have access to
            AidSys
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-control">
              <input type="text" placeholder="Username" ref={username} />
              <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
              <input type="password" placeholder="Password" ref={password} />
              <i className="fas fa-lock"></i>
            </div>

            <button className="submit">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
