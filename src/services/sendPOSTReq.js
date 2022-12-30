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
