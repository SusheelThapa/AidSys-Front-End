import React from "react";

import { Link } from "react-router-dom";

import Student from "../assets/img/student.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-16">
        <img className="w-80" src={Student} alt="Student" />
      </div>
      <Link
        className="mt-4 bg-transparent text-blue-400 hover:text-blue-600 font-bold  text-2xl "
        to={"/projects"}
      >
        <p className="text-blue-400 bg-yellow-400 px-5 py-3 rounded-xl hover:bg-yellow-300">Explore More</p>
      </Link>
    </div>
  );
};

export default Hero;
