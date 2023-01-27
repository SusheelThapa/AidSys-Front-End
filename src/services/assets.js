import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getAllAssets = async () => {
  const { data } = await axios.get(DOMAIN + "/api/assets");

  return data;
};

export const getAsset = async (_id) => {
  const { data } = await axios.get(DOMAIN + "/api/assets/" + _id);
  return data;
};

export const addAsset = async (name, description) => {
  const { data } = await axios.post(DOMAIN + "/api/assets/add", {
    name,
    description,
  });

  return data;
};

export const bookAsset = async (studentID, assetID) => {
  const { data } = await axios.post(DOMAIN + "/api/assets/book", {
    studentID,
    assetID,
  });
  console.log(data);
  return data;
};
