import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";


import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";


const Homepage = () => {
  /**
   * Execute when the web page loaded
   */

  setTimeout(async (event) => {
    if (doesTokenExist()) {
      const res = await getTokenData(readToken());

      /**
       * * You will get the id of student as res.data = {studentID: ....}
       */
      console.log(res.data);

      /**
       * TODO: Use the studentID to get the data of student and use it
       */

      const studentDetails = await getStudentDetail(res.data.studentID);

      /**
       * TODO: The detail of the student has been printed in console.
       * TODO: You can use the necessary detail
       */
      console.log(studentDetails);
    }
  }, 2000);

  return (
    <div id="homepage" className="flex flex-col justify-between h-screen">
      <Header />
      <Hero />

      {/**
       * TODO: Refactor below content into some components
       */}

      <div className="flex justify-center">
        <div className="flex flex-col items-center bg-blue-800 mt-20 rounded-t-full w-[700px] h-28 xl:w-[1000px]">
          <Link
            className="mt-4 bg-blue-800 text-yellow-400 hover:text-yellow-600 font-bold underline"
            to="#"
          >
            Explore More
          </Link>
          <p className="font-bold bg-blue-800 text-white mt-2 mb-4 text-2xl">
            Motto goes here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
