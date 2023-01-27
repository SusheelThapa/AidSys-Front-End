import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getStudentDetail = async (_id) => {
  const { data } = await axios.get(DOMAIN + "/api/students/" + _id);
  return data;
};
