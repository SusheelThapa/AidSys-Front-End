import React from "react";
import { Link } from "react-router-dom";

const Header = ({ studentName, studentId }) => {
  return (
    <div className="flex bg-gradient-to-l from-purple-500 to-indigo-500 h-20">
      <p className="mx-8 font-bold text-white bg-transparent font-serif text-2xl mt-4">
        <Link to={"/"}>AidSys</Link>
      </p>
      <div className="flex space-x-10 mx-auto bg-transparent items-center">
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/assets"}>Assets</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/notices"}>Notice Board</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/projects"}>Projects</Link>
        </button>
      </div>
      <div className="bg-transparent my-4 mx-8">
        <button className="bg-transparent font-medium py-1 px-4 border text-yellow-400 hover:font-bold ">
          <Link to={`/${studentId}`}>{studentName}</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
