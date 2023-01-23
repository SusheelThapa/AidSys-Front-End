import React from "react";
import Header from "./Header";
import { getStudentDetail, getTokenData } from "../services/request";
import { readToken } from "../services/token";

const Asset = () => {
  getTokenData(readToken()).then((studentDetail) => {
    getStudentDetail(studentDetail.data.studentID).then((res) => {
      console.log(res);
    });
  });
  return (
    <div>
      <Header />
      <h1>Other goes here</h1>
    </div>
  );
};

export default Asset;
