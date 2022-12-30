import axios from "axios";

export const sendLoginDetails = async (username, password) => {
  /**
   * Send post request to the backend server with login details
   */
  const res = await axios.post("http://localhost:5000/login", {
    username: username,
    password: password,
  });

  return res.data;
};
