import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const sendLoginDetails = async (username, password) => {
  const { data } = await axios.post(DOMAIN + "/api/login", {
    username,
    password,
  });

  return data;
};

export const sendSignupDetails = async (
  name,
  faculty,
  batch,
  interest,
  bio,
  phonenumber,
  email,
  githubLink,
  facebook,
  instagram,
  twitter,
  username,
  password
) => {
  const { data } = await axios.post(DOMAIN + "/api/signup", {
    name,
    faculty,
    batch,
    interest,
    bio,
    phonenumber,
    email,
    githubLink,
    facebook,
    instagram,
    twitter,
    username,
    password,
  });

  return data;
};
