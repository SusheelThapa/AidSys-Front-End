import React from "react";

import "../assets/css/login.css";

import loginPhoneImage from "../assets/img/login-phone.svg";
const Login = () => {
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

          <form className="login-form">
            <div className="form-control">
              <input type="text" placeholder="Username" />
              <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
              <input type="password" placeholder="Password" />
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
