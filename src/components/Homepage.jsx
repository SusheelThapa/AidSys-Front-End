import React from "react";
import { Link } from "react-router-dom";

import Student from "../assets/img/student.png";

import { getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";

const Homepage = () => {
  /**
   * Execute when the web page loaded
   */

  setTimeout(async (event) => {
    if (doesTokenExist()) {
      const res = await getTokenData(readToken());

      /**
       * * You will get the id of student as res.data = {studentId: ....}
       */
      console.log(res.data);

      /**
       * TODO: Use the studentID to get the data of student and use it
       */
    }
  }, 2000);

  return (
    <div id="homepage" className="flex flex-col justify-between h-screen">
      <div className="flex bg-blue-800 h-20">
        <p className="mx-8 font-bold text-white bg-blue-800 font-serif text-2xl mt-4">
          AidSys
        </p>
        <div className="flex space-x-10 mx-auto bg-blue-800 items-center">
          <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
            Home
          </button>
          <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
            What we offer
          </button>
          <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
            Notice Board
          </button>
          <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
            Anything new?
          </button>
        </div>
        <div className="bg-blue-800 my-4 mx-8">
          <button className="bg-transparent py-1 px-4 border text-yellow-400 hover:font-bold">
            <Link
              to={"/login"}
              className="bg-transparent hover:text-yellow-500"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-16">
          <img className="w-80" src={Student} alt="Student" />
        </div>

        <input
          className="w-96 bg-white rounded-lg shadow-lg p-2 focus:outline-none"
          type="text"
          placeholder="Search for anything here"
        />
        <button className="py-2 px-4 mt-4 bg-yellow-500 shadow-lg border border-yellow-800 hover:bg-yellow-600 font-bold">
          SEARCH
        </button>
      </div>
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
