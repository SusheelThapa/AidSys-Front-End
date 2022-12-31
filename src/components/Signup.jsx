import React, { useRef } from "react";
import { Link } from "react-router-dom";

import phoneImage from "../assets/img/login-phone.svg";
import { sendSignupDetails } from "../services/request";
import { saveToken } from "../services/token";

const Signup = () => {
  /**
   * username, password, college, email and phone is used to keep track of value
   * of different input field.
   */
  const username = useRef();
  const password = useRef();
  const college = useRef();
  const email = useRef();
  const phone = useRef();

  const handleSubmit = async (event) => {
    /**
     * prevent default behaviour of submission
     * send the login data to server
     */
    event.preventDefault();

    const response = await sendSignupDetails(
      username.current.value,
      password.current.value,
      college.current.value,
      email.current.value,
      phone.current.value
    );

    const { success, error, token } = response;

    if (success) {
      saveToken(token);
      window.location.href = "http://localhost:3000/";
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

          <form onSubmit={handleSubmit} className="login-signup-form">
            <div className="form-control">
              <input type="text" placeholder="Username" ref={username} />
              <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
              <input type="text" placeholder="College" ref={college} />
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="form-control">
              <input type="text" placeholder="Email" ref={email} />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="form-control">
              <input type="text" placeholder="Phone" ref={phone} />
              <i className="fas fa-mobile"></i>
            </div>
            <div className="form-control">
              <input type="password" placeholder="Password" ref={password} />
              <i className="fas fa-lock"></i>
            </div>

            <button className="submit">Signup</button>
          </form>
          <Link to={"/"}>Have one? Login</Link>
        </div>
      </section>
    </div>
  );
};

export default Signup;
