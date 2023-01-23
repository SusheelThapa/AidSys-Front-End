import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getCollege = async (_id) => {
  try {
    const res = await axios.get(DOMAIN + "/api/colleges/" + _id);
    /**
     * res.data will contain data in following format
     *      If error occured
     *          {
     *              success:null,
     *              error:true,
     *              message:...
     *          }
     *      If error didn't occured
     *          {
     *              success:true,
     *              error:null,
     *              college:<college data>
     *          }
     */
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllColleges = async () => {
  try {
    const res = await axios.get(DOMAIN + "/api/colleges");
    /**
     * res.data will contain data in following format
     *      If error occured
     *          {
     *              success:null,
     *              error:true,
     *              message:...
     *          }
     *      If error didn't occured
     *          {
     *              success:true,
     *              error:null,
     *              colleges:<colleges data in array form>
     *          }
     */
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
