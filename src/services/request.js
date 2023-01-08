import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const sendLoginDetails = async (username, password) => {
  /**
   * Send post request to the backend server with login details
   */
  const { data } = await axios.post(DOMAIN + "/api/login", {
    username: username,
    password: password,
  });
  return data;
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
  const res = await axios.post(DOMAIN + "/api/signup", {
    username,
    password,
    college,
    email,
    phone,
  });

  return res.data;
};

export const createToken = async (userID) => {
  const { data } = await axios.post(DOMAIN + "/api/token/create", {
    userID,
  });

  return data;
};

export const getTokenData = async (token) => {
  const response = await axios.post(DOMAIN + "/api/token/data", {
    token,
  });
  return response;
};

export const getUserDetail = async (userID) => {
  const { data } = await axios.get(DOMAIN + "/api/users/" + userID);
  return data;
};

export const getAllAssets = async () => {
  const { data } = await axios.get(DOMAIN + "/api/assets");

  return data;
};

export const bookAssets = async (userId, bookedAssets) => {
  const { data } = await axios.get(DOMAIN, "/api/users/bookassets", {
    userId,
    bookedAssets,
  });
  return data;
};
