export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const readToken = () => {
  return localStorage.getItem("token");
};

export const doesTokenExist = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
