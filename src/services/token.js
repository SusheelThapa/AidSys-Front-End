import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

const readToken = () => {
  return localStorage.getItem("token");
};

export const doesTokenExist = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

export const createToken = async (_id) => {
  const { data } = await axios.post(DOMAIN + "/api/token/create", {
    _id,
  });

  return data;
};

export const getTokenData = async () => {
  const token = readToken();
  const { data } = await axios.post(DOMAIN + "/api/token/data", {
    token,
  });
  return data;
};
