import React from "react";
import Student from "../assets/img/student.png";

const Hero = () => {
  return (
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
  );
};

export default Hero;
