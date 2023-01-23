import React from "react";
import { Link } from "react-router-dom";

const Header = ({ studentName }) => {
  return (
    <div className="flex bg-blue-800 h-20">
      <p className="mx-8 font-bold text-white bg-blue-800 font-serif text-2xl mt-4">
        AidSys
      </p>
      <div className="flex space-x-10 mx-auto bg-blue-800 items-center">
        <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/assets"}>Assets</Link>
        </button>
        <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link>Notice Board</Link>
        </button>
        <button className="bg-blue-800 text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link>User</Link>
        </button>
      </div>
      <div className="bg-blue-800 my-4 mx-8">
        <button className="bg-transparent font-medium py-1 px-4 border text-yellow-400 hover:font-bold ">
          {studentName}
        </button>
      </div>
    </div>
  );
};

export default Header;
