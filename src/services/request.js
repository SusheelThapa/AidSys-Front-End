import axios from "axios";

export const sendLoginDetails = async (username, password) => {
  /**
   * Send post request to the backend server with login details
   */
  const res = await axios.post("http://localhost:5000/api/user/login", {
    username: username,
    password: password,
  });

  return res.data;
};

export const sendSignupDetails = async (
  username,
  password,
  college,
  email,
  phone
) => {
  /**
   * Send post request to the backend server with signup details
   */
  const res = await axios.post("http://localhost:5000/api/user/createuser", {
    username,
    password,
    college,
    email,
    phone,
  });

  return res.data;
};
