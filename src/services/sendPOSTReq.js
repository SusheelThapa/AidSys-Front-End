import axios from "axios";

const sendLoginDetails = async (username, password) => {
  const res = await axios.post("http://localhost:5000/login", {
    username: username,
    password: password,
  });

  return res.data;
};

export default sendLoginDetails;
