import React from "react";
import { Link } from "react-router-dom";

// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Workspace from "./Workspace";

import Student from "../assets/img/student.png";
import Header from "./Header";
const Homepage = () => {
  return (
    <div id="homepage" className="flex flex-col justify-between h-screen">
      {/* <Header />
      <Sidebar />
      <Workspace /> */}

      {/**
       * Your landing page goes here
       */}
      <Header />

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
