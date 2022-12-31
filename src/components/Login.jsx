import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { sendLoginDetails } from "../services/request.js";
import { doesTokenExist, saveToken } from "../services/token.js";

import loginPhoneImage from "../assets/img/login-phone.svg";

const Login = () => {
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
     */
    event.preventDefault();

    const response = await sendLoginDetails(
      username.current.value,
      password.current.value
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

          <form onSubmit={handleSubmit} className="login-signup-form">
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
          <Link to={`/signup`}>Don't have one? Create one</Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
