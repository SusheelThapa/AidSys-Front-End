import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getAllProjects = async () => {
  const { data } = await axios.get(DOMAIN + "/api/projects");

  return data;
};

export const getProject = async (_id) => {
  const { data } = await axios.get(DOMAIN + "/api/projects/" + _id);

  return data;
};

export const addProject = async (
  name,
  description,
  link,
  owner,
  catgories,
  teammember
) => {
  const { data } = await axios.post(DOMAIN + "/api/projects/add", {
    name,
    description,
    link,
    owner,
    catgories,
    teammember,
  });

  return data;
};
