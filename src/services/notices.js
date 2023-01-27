import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getNotices = async () => {
  const { data } = await axios.get(DOMAIN + "/api/notices");

  return data;
};
