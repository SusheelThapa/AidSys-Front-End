export const saveToken = (token) => {
  /**
   * Sets the token in local storage
   */
  localStorage.setItem("token", token);
  return;
};

export const getToken = () => {
  /**
   * gets the value of token from local storage
   */
  return localStorage.getItem("token");
};
